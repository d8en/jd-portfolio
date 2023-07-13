import { IJdContactDto } from "../models/iJdContactDto";
import jdContactStore, { JdContactStore } from "../stores/jdContactStore";
import { JdManagerBase } from "./base/jdManagerBase";

export class JdContactManager extends JdManagerBase<JdContactStore> {
    public store: JdContactStore = jdContactStore

    public async setProperties(newProperties: Partial<IJdContactDto>): Promise<void> {
        await this.jdRunInAction(() => {
            Object.assign(this.store.contactInfo, newProperties);
        });
    }
}

const jdContactManager: JdContactManager = new JdContactManager();
export default jdContactManager;