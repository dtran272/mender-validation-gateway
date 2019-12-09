import { StatusType } from "../../common/enums/StatusType";
import { IBusinessStatus } from "../../interfaces/models/IBusiness";

export class BusinessStatusModel implements IBusinessStatus {
    public name: string;
    public rbqNum: string;
    public neqId: number;
    public status: StatusType;
    public isValid: boolean;

    constructor(name: string, rbqNum: string, neqId: number, status: StatusType) {
        this.name = name;
        this.rbqNum = rbqNum;
        this.neqId = neqId;
        this.status = status;
        this.isValid = this.status === StatusType.VALIDE;
    }
}
