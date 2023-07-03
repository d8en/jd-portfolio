import { makeAutoObservable } from "mobx";
import { IJdProject } from "../models/iJdProject";
import jdCompaniesStore from "./jdCompaniesStore";
import jdSkillsStore from "./jdSkillsStore";
import { JdAirshopApp } from "../components/jdProjects/jdAirshopApp";
import { IJdSkillCo } from "../models/iJdSkillCo";
import jdObjUtils from "../utils/jdObjUtils";
import { JdShoifyApp } from "../components/jdProjects/jdShopifyApp";
import jdRoutes from "../utils/jdRoutes";
import { To } from "react-router-dom";
import { JdBoomNativeApp } from "../components/jdProjects/jdBoomNativeApp";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }

    public projectParam: string = 'id';
    public airshopApp: IJdProject = {
        id: '1',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.sass, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopPreview.webp?alt=media',
        component: <JdAirshopApp />,
        title: `Operation “Build a returns app with home pickup in one month”`,
        desc: `We had one month to build an end-to-end returns solution for a dark store in Chicago. It felt like an episode of 24, or maybe Master Chef.`,
        isOpen: false,
    }

    public shopifyApp: IJdProject = {
        id: '2',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.redux, jdSkillsStore.sass, jdSkillsStore.productDesign, jdSkillsStore.figma],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyApp.webp?alt=media',
        component: <JdShoifyApp />,
        title: 'Shopify App - Home pickup for any Shopify store owner',
        desc: 'After we launched our Chicago based pickup solution, it was time to scale up. The Shopify ecosystem seemed like a great place to start.',
        isOpen: false,
    }

    public boomNativeApp: IJdProject = {
        id: '3',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.reactNative, jdSkillsStore.reanimated, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.sass, jdSkillsStore.figma, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativePreview.webp?alt=media',
        component: <JdBoomNativeApp />,
        title: 'Native App - One app, all returns, any store',
        desc: 'The idea was relatively simple - build an app for shoppers to manage returns for any store they shopped at.',
        isOpen: false,
    }

    public get isAnyProjectOpen(): boolean {
        if (this.projects.find((proj) => proj.isOpen)) return true;

        return false;
    }

    public get projects(): IJdProject[] {
        return jdObjUtils.getAllProperties<IJdProject>(this).filter((proj: IJdProject) => proj.id);
    }

    public get filter(): IJdSkillCo[] {
        return [];
    }

    public get filteredProjects(): IJdProject[] {
        if (this.filter.length === 0) return jdObjUtils.getAllProperties(this);
        return [];
    }

    public getParamForProject(project: IJdProject): string {
        return project.title.split(' ').join('-');
    }

    public getLinkToProject(project: IJdProject): To {
        return {
            pathname: jdRoutes.projects.path,
            search: `?${this.projectParam}=${this.getParamForProject(project)}`,
        }
    }

    public getProjectFromParam(param: string | null): IJdProject | undefined {
        if (!param) return;
        for (const project of this.projects) {
            if (this.getParamForProject(project) !== param) continue;
            return project;
        }
    }

}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;