import { HttpException } from "./HttpException";

export class InvalidNeqIdException extends HttpException {
    constructor(neqId: number) {
        super(400, `NEQ ID: ${neqId} is invalid. Please enter a valid NEQ, composed of 10 digits.`);
    }
}
