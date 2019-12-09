export class LicenseRequestValidator {
    /**
     * validateRbqNumber: A valid RBQ number is composed of 8 to 10 digits.
     */
    public validateRbqNumber(rbqNum: string): boolean {
        const regEx = new RegExp("(^[0-9]{4}-[0-9]{4}-[0-9]{2}$)|(^[0-9]{8,10}$)");

        return regEx.test(rbqNum);
    }

    /**
     * validateNeqId: A valid NEQ is composed of 10 digits.
     */
    public validateNeqId(neqId: number): boolean {
        const regEx = new RegExp("^[0-9]{10}$");

        return regEx.test(neqId.toString());
    }
}
