import { StatusType } from "../../common/enums/status";
import { IBusiness } from "../../interfaces/models/IBusiness";

export class BusinessModel implements IBusiness {
    public name: string;
    public otherName: string;
    public rbqNum: string;
    public status: StatusType;
    public deliveranceDate: Date;
    public paymentDate: Date;
    public neqId: number;
    public address: string;
    public email: string;
    public telephone: string;

    constructor();
    constructor(
        name: string,
        otherName: string,
        rbqNum: string,
        status: string,
        deliveranceDate: Date,
        paymentDate: Date,
        neqId: number,
        address: string,
        email: string,
        telephone: string
    );
    constructor(
        name?: string,
        otherName?: string,
        rbqNum?: string,
        status?: string,
        deliveranceDate?: Date,
        paymentDate?: Date,
        neqId?: number,
        address?: string,
        email?: string,
        telephone?: string
    ) {
        this.name = name!;
        this.otherName = otherName!;
        this.rbqNum = rbqNum!;
        this.status = (StatusType as any)[status!.toLocaleUpperCase()];
        this.deliveranceDate = deliveranceDate!;
        this.paymentDate = paymentDate!;
        this.neqId = neqId!;
        this.address = address!;
        this.email = email!;
        this.telephone = telephone!;
    }
}
