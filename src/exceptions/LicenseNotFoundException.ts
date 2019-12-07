import { HttpException } from "./HttpException";

export class LicenseNotFoundException extends HttpException {
    constructor(id: string | number, err: any) {
        let message = "";

        if (typeof id === "number") {
            message = `License with NEQ: ${id} not found. ERROR => ${err}`;
        } else {
            message = `RBQ license number ${id} not found. ERROR => ${err}`;
        }

        super(404, message);
    }
}
