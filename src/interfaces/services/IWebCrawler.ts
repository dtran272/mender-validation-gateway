export interface IWebCrawler<T> {
    run(id: string | number): Promise<void>;
    getInfo(): T;
}
