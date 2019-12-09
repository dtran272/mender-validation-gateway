import { SearchType } from "../../common/enums/SearchType";

export interface IWebCrawler<T> {
    run(id: string, searchType: SearchType): Promise<void>;
    getInfo(): T;
}
