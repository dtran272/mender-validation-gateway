import { HttpException } from "./HttpException";

export class WebScrappingException extends HttpException {
    constructor(err: any) {
        super(500, `Web Scrapping error. ERROR => ${err}`);
    }
}
