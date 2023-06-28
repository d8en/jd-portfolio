import { makeAutoObservable } from "mobx";
import { IJdCompany } from "../models/iJdCompany";
import { IJdSkill } from "../models/iJdSkill";
import { IJdProject } from "../models/iJdProject";
import jdObjUtils from "../utils/jdObjUtils";
import jdSkills from "../data/jdSkills";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }

    public companies: IJdCompany[] = [];
    public skills: IJdSkill[] = jdObjUtils.getAllProperties(jdSkills);
    public projects: IJdProject[] = [];

    public get filter(): (IJdCompany | IJdSkill)[] {
        return [];
    }

    public get filteredProejcts(): IJdProject[] {
        return [];
    }
}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;