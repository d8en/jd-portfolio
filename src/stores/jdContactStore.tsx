import { makeAutoObservable } from "mobx";
import { IJdContactDto, sampleJdContactDto } from "../models/iJdContactDto";

export class JdContactStore {
    constructor() {
        makeAutoObservable(this);
    }
    public contactInfo: IJdContactDto = sampleJdContactDto;
}

const jdContactStore = new JdContactStore();
export default jdContactStore;