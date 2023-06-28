import { makeAutoObservable } from "mobx";

export class JdCompaniesStore {
    constructor() {
        makeAutoObservable(this);
    }
}

const jdCompaniesStore = new JdCompaniesStore();
export default jdCompaniesStore;