import { StatusType } from "../../common/enums/status";
import { IBusiness } from "../../interfaces/models/IBusiness";

export class BusinessModel implements IBusiness {
    public name: string;
    public address: string;
    public telephone: string;
    public rbqNum: string;
    public neqId: number;
    public status: StatusType;

    constructor();
    constructor(name: string, address: string, telephone: string, rbqNum: string, neqId: number, status: string);
    constructor(
        name?: string,
        address?: string,
        telephone?: string,
        rbqNum?: string,
        neqId?: number,
        status?: string
    ) {
        this.name = name!;
        this.address = address!;
        this.telephone = telephone!;
        this.rbqNum = rbqNum!;
        this.neqId = neqId!;
        this.status = (StatusType as any)[status!.toLocaleUpperCase()];
    }
}
