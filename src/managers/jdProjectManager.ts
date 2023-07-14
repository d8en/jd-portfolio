import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectStore, { JdProjectStore } from '../stores/jdProjectStore';
import { IJdProject } from "../models/iJdProject";

class JdProjectManager extends JdManagerBase<JdProjectStore> {
    public store: JdProjectStore = jdProjectStore;

    public async toggleOpenProject(project: IJdProject): Promise<void> {
        await this.jdRunInAction(() => {
            project.isOpen = !project.isOpen;;
        });
    }

    public async closeAllProjects(): Promise<void> {
        for (const project of this.store.projects) {
            if (project.isOpen) {
                await this.jdRunInAction(() => {
                    project.isOpen = false;
                });
            }
        }
    }

    public async cycleProjects(direction: 'next' | 'prev', idx: number): Promise<void> {
        const newIdx: number = direction === 'next' ? idx + 1 : idx - 1;
        await this.closeAllProjects();
        await this.toggleOpenProject(this.store.projects[newIdx]);
    }
}

const jdProjectManager: JdProjectManager = new JdProjectManager();
export default jdProjectManager;