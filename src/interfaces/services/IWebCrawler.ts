export interface IWebCrawler<T> {
    baseUrl: string;

    run(): void;
    getInfo(): T;
}
