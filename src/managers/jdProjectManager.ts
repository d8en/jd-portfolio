import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectStore, { JdProjectStore } from '../stores/jdProjectStore';
import { IJdProject } from "../models/iJdProject";
import jdProjectUtils from "../utils/jdProjectUtils";

class JdProjectManager extends JdManagerBase<JdProjectStore> {
    public store: JdProjectStore = jdProjectStore;

    public async toggleOpenProject(project: IJdProject): Promise<void> {
        await this.jdRunInAction(() => {
            project.isOpen = !project.isOpen;
        });
    }

    public async findProjectFromSlug(slug: string | null): Promise<void> {
        if (!slug) return;
        for (const project of this.store.projects) {
            if (jdProjectUtils.getProjectSlug(project) !== slug) continue;
            await this.toggleOpenProject(project);
            return;
        }
    }
}

const jdProjectManager: JdProjectManager = new JdProjectManager();
export default jdProjectManager;