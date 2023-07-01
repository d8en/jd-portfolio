import { IJdProject } from "../models/iJdProject";

class JdProjectUtils {

    public projectParam: string = 'id';

    public getProjectSlug(project: IJdProject): string {
        return project.title.split(' ').join('-');
    }
}

const jdProjectUtils = new JdProjectUtils();
export default jdProjectUtils;