export interface IBusiness {
    name: string;
    address: string;
    telephone: string;
    rbqNum: string;
    neqId: number;
    status: string;
}

export interface IBusinessStatus {
    status: string;
    isValid: boolean;
}
