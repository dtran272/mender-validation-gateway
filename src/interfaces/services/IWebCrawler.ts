import { BusinessModel } from "../../api/models/business";

export interface IWebCrawler<T> {
    run(id: string | number): Promise<void>;
    getInfo(): T;
}
