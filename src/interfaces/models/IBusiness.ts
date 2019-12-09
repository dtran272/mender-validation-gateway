import { StatusType } from "../../common/enums/status";

export interface IBusiness {
    name: string;
    otherName: string;
    rbqNum: string;
    status: StatusType;
    deliveranceDate: Date;
    paymentDate: Date;
    neqId: number;
    address: string;
    email: string;
    telephone: string;
}

export interface IBusinessStatus {
    name: string;
    rbqNum: string;
    status: StatusType;
    isValid: boolean;
}

export interface IBusinessRequest {
    rbqNum: string;
    neqId: number;
}
