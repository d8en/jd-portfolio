import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectStore, { JdProjectStore } from '../stores/jdProjectStore';
import { IJdProject } from "../models/iJdProject";

class JdProjectManager extends JdManagerBase<JdProjectStore> {
    public store: JdProjectStore = jdProjectStore;

    public async toggleOpenProject(project: IJdProject): Promise<void> {
        await this.jdRunInAction(() => {
            project.isOpen = !project.isOpen;
        });
    }
}

const jdProjectManager: JdProjectManager = new JdProjectManager();
export default jdProjectManager;