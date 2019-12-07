import puppeteer from "puppeteer";
import { TimeoutError } from "puppeteer/Errors";
import { Service } from "typedi";
import config from "../api/config/config";
import { BusinessModel } from "../api/models/business";
import { LicenseNotFoundException } from "../exceptions/LicenseNotFoundException";
import { WebScrappingException } from "../exceptions/WebScrappingException";
import { IWebCrawler } from "../interfaces/services/IWebCrawler";

@Service("rbq.webCralwer")
export class RbqWebCrawler implements IWebCrawler<BusinessModel> {
    private baseUrl: string;
    private model: BusinessModel;

    constructor() {
        this.baseUrl = config.rbqBaseUrl;
        this.model = new BusinessModel();
    }

    public async run(rbqNum: string): Promise<void> {
        // Launch headless chrome browser.
        const browser = await puppeteer.launch({ headless: false });

        try {
            // Create a new page(tab) to navigate
            const page = await browser.newPage();

            this.model = await this.crawl(page, rbqNum);
        } catch (e) {
            throw e;
        } finally {
            await browser.close();
        }
    }

    public getInfo(): BusinessModel {
        return this.model;
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
        await page.waitForSelector(btnSearchSelector, { timeout: 10000 });
        await page.click(btnSearchSelector);

        try {
            // Click "Voir Fiche Complete"(View More Details) button for more details.
            const btnMoreInfoSelector = "a.btn.btn-primary.btn-sm";
            await page.waitForSelector(btnMoreInfoSelector, { timeout: 10000 });
            await page.click(btnMoreInfoSelector);

            // Scrape Company name
            const companyNameSelector = "div.col-md-10 h1.h1";
            await page.waitForSelector(companyNameSelector, { timeout: 10000 });

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
        } catch (e) {
            if (e instanceof TimeoutError) {
                throw new LicenseNotFoundException(rbqNum, e);
            }

            throw new WebScrappingException(e);
        }
    }
}
