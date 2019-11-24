import { StatusType } from "../../common/enums/status";
import { IBusinessStatus } from "../../interfaces/models/IBusiness";

export class BusinessStatusModel implements IBusinessStatus {
    public name: string;
    public rbqNum: string;
    public status: StatusType;
    public isValid: boolean;

    constructor(name: string, rbqNum: string, status: StatusType) {
        this.name = name;
        this.rbqNum = rbqNum;
        this.status = status;
        this.isValid = this.status === StatusType.VALIDE;
    }
}
