import { HttpException } from "./HttpException";

export class LicenseNotFoundException extends HttpException {
    constructor(rbqNum: string, err: any) {
        super(404, `RBQ license number ${rbqNum} not found. ERROR => ${err}`);
    }
}
