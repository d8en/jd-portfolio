import jdProjectManager from "../managers/jdProjectManager";
import { IJdProject } from "../models/iJdProject";

class JdProjectUtils {

    public projectParam: string = 'id';

    public getParamForProject(project: IJdProject): string {
        return project.title.split(' ').join('-');
    }

    public getProjectFromParam(param: string | null): IJdProject | undefined {
        if (!param) return;
        for (const project of jdProjectManager.store.projects) {
            if (this.getParamForProject(project) !== param) continue;
            return project;
        }
    }

}

const jdProjectUtils = new JdProjectUtils();
export default jdProjectUtils;