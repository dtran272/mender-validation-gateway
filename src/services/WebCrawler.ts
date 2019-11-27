import { BusinessModel } from "./../api/models/business";

export abstract class WebCrawler<T> {
    protected baseUrl: string;
    protected model: BusinessModel;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.model = new BusinessModel();
    }

    public abstract async run(rbqNum: string): Promise<void>;
    public abstract getInfo(): T;
}
