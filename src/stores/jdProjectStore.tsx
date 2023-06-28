import { makeAutoObservable } from "mobx";
import { IJdProject } from "../models/iJdProject";
import jdCompaniesStore from "./jdCompaniesStore";
import jdSkillsStore from "./jdSkillsStore";
import { JdAirshopApp } from "../components/jdProjects/jdAirshopApp";
import { IJdSkillCo } from "../models/iJdSkillCo";
import jdObjUtils from "../utils/jdObjUtils";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }

    public projects: IJdProject[] = [{
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopPreview.webp?alt=media',
        component: <JdAirshopApp />,
        title: 'Operation “Build a returns app with home pickup in one month”',
        desc: 'Our first prospect signed with us a month away from their new store launch in Chicago. They needed a return solution that was customized and offered a new cutting edge feature - home pickup. We were still in the early stages.',
    }];

    public get filter(): IJdSkillCo[] {
        return [];
    }

    public get filteredProjects(): IJdProject[] {
        console.log('filtered proejcts', jdObjUtils.getAllProperties(this).length);
        if (this.filter.length === 0) return jdObjUtils.getAllProperties(this);
        return [];
    }
}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;