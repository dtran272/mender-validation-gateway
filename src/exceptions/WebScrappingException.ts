import { HttpException } from "./HttpException";

export class WebScrappingException extends HttpException {
    constructor(errorMsg: string) {
        super(500, `Web Scrapping error. ERROR => ${errorMsg}`);
    }
}
