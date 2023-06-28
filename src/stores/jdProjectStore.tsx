import { makeAutoObservable } from "mobx";
import { IJdProject } from "../models/iJdProject";
import jdCompaniesStore from "./jdCompaniesStore";
import jdSkillsStore from "./jdSkillsStore";
import { JdAirshopApp } from "../components/jdProjects/jdAirshopApp";
import { IJdSkillCo } from "../models/iJdSkillCo";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }

    public projects: IJdProject[] = [{
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.productDesign],
        image: '',
        component: <JdAirshopApp />,
        title: 'Operation “Build a returns app with home pickup in one month”',
        desc: 'Our first prospect signed with us a month away from their new store launch in Chicago. They needed a return solution that was customized and offered a new cutting edge feature - home pickup. We were still in the early stages.',
    }];

    public get filter(): IJdSkillCo[] {
        return [];
    }

    public get filteredProjects(): IJdProject[] {
        return [];
    }
}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;