import * as puppeteer from "puppeteer";
import { BusinessModel } from "../api/models/business";
import { BusinessStatusModel } from "../api/models/businessStatus";
import { WebCrawler } from "./WebCrawler";

export class RbqWebCrawler extends WebCrawler<BusinessModel> {
    public async run(rbqNum: string): Promise<void> {
        // Launch headless chrome browser.
        const browser = await puppeteer.launch();
        // Create a new page(tab) to navigate
        const page = await browser.newPage();

        this.model = await this.crawl(page, rbqNum);

        await browser.close();
    }

    public getInfo(): BusinessModel {
        return this.model;
    }

    public getLicenseStatus(): BusinessStatusModel {
        const businessStatus = new BusinessStatusModel(this.model.name, this.model.rbqNum, this.model.status);

        return businessStatus;
    }

    private async crawl(page: puppeteer.Page, rbqNum: string): Promise<BusinessModel> {
        // Go to target page
        await page.goto(this.baseUrl);

        // Enter Rbq license number in the text box
        await page.type("[name=NoLicence]", rbqNum);

        // Click on "Recherche"(search) button. This will trigger a naviation event
        // and we'll have to wait unti page.waitForNavigation() promise to
        // be resolved. Else we might end up with a race condition.
        const btnSearchSelector = "[type=submit]";
        await page.waitForSelector(btnSearchSelector);
        await page.click(btnSearchSelector);

        // Click "Voir Fiche Complete"(View More Details) button for more details.
        const btnMoreInfoSelector = "a.btn.btn-primary.btn-sm";
        await page.waitForSelector(btnMoreInfoSelector);
        await page.click(btnMoreInfoSelector);

        // Scrape Company name
        const companyNameSelector = "div.col-md-10 h1.h1";
        await page.waitForSelector(companyNameSelector);

        const compName = await page.evaluate(
            selector => document.querySelector(selector).innerText.trim(),
            companyNameSelector
        );

        // Scrape the info table
        const infoSelector = "div[class=p-1]";
        await page.waitForSelector(infoSelector);

        const dataArray = await page.evaluate(selector => {
            const info = Array.from(document.querySelectorAll(selector));
            return info.map(data => data.innerText.trim());
        }, infoSelector);

        return new BusinessModel(
            compName,
            dataArray[0],
            dataArray[1],
            dataArray[2],
            dataArray[3],
            dataArray[4],
            dataArray[5],
            dataArray[6],
            dataArray[7],
            dataArray[8]
        );
    }
}
