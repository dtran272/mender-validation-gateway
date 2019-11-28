import { BusinessModel } from "../../api/models/business";

export interface IWebCrawler<T> {
    run(rbqNum: string): Promise<void>;
    getInfo(): T;
}
