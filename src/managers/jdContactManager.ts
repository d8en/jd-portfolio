import jdContactApi from '../api/jdContactApi';
import { IJdContactDto, sampleJdContactDto } from '../models/iJdContactDto';
import jdContactStore, { JdContactStore } from '../stores/jdContactStore';
import { JdManagerBase } from './base/jdManagerBase';

export class JdContactManager extends JdManagerBase<JdContactStore> {
    public store: JdContactStore = jdContactStore;

    public async setContactProps(newProperties: Partial<IJdContactDto>): Promise<void> {
        await this.jdRunInAction(() => {
            Object.assign(this.store.contactInfo, newProperties);
        });
    }

    public async sendForm(): Promise<boolean> {
        return await jdContactApi.sendForm(this.store.contactInfo);
    }

    public async resetForm(): Promise<void> {
        await this.setStateAsync({ contactInfo: sampleJdContactDto, isSuccess: false });
    }
}

const jdContactManager: JdContactManager = new JdContactManager();
export default jdContactManager;
