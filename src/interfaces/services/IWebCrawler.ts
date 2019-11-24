export interface IWebCrawler<T> {
    baseUrl: string;

    startCrawl(): void;
    getInfo(): T;
}
