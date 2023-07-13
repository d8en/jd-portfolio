import jdContactApi from "../api/jdContactApi";
import { IJdContactDto } from "../models/iJdContactDto";
import jdContactStore, { JdContactStore } from "../stores/jdContactStore";
import { JdManagerBase } from "./base/jdManagerBase";

export class JdContactManager extends JdManagerBase<JdContactStore> {
    public store: JdContactStore = jdContactStore

    public async setContactProps(newProperties: Partial<IJdContactDto>): Promise<void> {
        await this.jdRunInAction(() => {
            Object.assign(this.store.contactInfo, newProperties);
        });
    }

    public async sendForm(): Promise<boolean> {
        return await jdContactApi.sendForm(this.store.contactInfo);
    }

}

const jdContactManager: JdContactManager = new JdContactManager();
export default jdContactManager;