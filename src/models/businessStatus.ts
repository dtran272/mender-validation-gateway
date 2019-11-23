import { IBusinessStatus } from "../interfaces/IBusiness";

export class BusinessStatusModel implements IBusinessStatus {
    public status: string;
    public isValid: boolean;

    constructor(status: string, isValid: boolean) {
        this.status = status;
        this.isValid = isValid;
    }
}
