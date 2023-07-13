import { makeAutoObservable } from "mobx";
import { IJdContactDto, sampleJdContactDto } from "../models/iJdContactDto";

export class JdContactStore {
    constructor() {
        makeAutoObservable(this);
    }

    public contactInfo: IJdContactDto = sampleJdContactDto;
    public isOpen: boolean = false;
    public isSuccess: boolean = false;
    public isLoading: boolean = false;

    public get isDisabled(): boolean {
        if (
            this.contactInfo.firstName
            &&
            this.contactInfo.lastName
            &&
            this.contactInfo.email
            &&
            this.contactInfo.message
            &&
            !this.isLoading
            &&
            !this.isSuccess
        ) return false;

        return true;
    }
}

const jdContactStore = new JdContactStore();
export default jdContactStore;