import { StatusType } from "../../common/enums/status";

export interface IBusiness {
    name: string;
    address: string;
    telephone: string;
    rbqNum: string;
    neqId: number;
    status: StatusType;
}

export interface IBusinessStatus {
    name: string;
    rbqNum: string;
    status: StatusType;
    isValid: boolean;
}
