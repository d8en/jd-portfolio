import { makeAutoObservable } from "mobx";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }
    public

}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;