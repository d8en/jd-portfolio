import { makeAutoObservable } from "mobx";

export class JdProjectFilterStore {
    constructor() {
        makeAutoObservable(this);
    }
}
const jdProjectFilterStore: JdProjectFilterStore = new JdProjectFilterStore();
export default jdProjectFilterStore;