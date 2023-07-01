import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectStore, { JdProjectStore } from '../stores/jdProjectStore';
import { IJdProject } from "../models/iJdProject";

class JdProjectManager extends JdManagerBase<JdProjectStore> {
    public store: JdProjectStore = jdProjectStore;

    public async toggleOpenProject(project: IJdProject): Promise<void> {
        const isOpen: boolean = !project.isOpen;
        console.log('is open', isOpen);
        await this.jdRunInAction(() => {
            project.isOpen = isOpen;
        });
        console.log('projects', this.store.projects.map((proj) => proj.isOpen));
    }

    public async closeAllProjects(): Promise<void> {
        for (const project of this.store.projects) {
            if (project.isOpen) {
                await this.jdRunInAction(() => {
                    project.isOpen = false;
                })
            }
        }
    }
}

const jdProjectManager: JdProjectManager = new JdProjectManager();
export default jdProjectManager;