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
import { JdSmartRouteApp } from "../components/jdProjects/jdSmartRouteApp";
import { JdSmartRouteWeb } from "../components/jdProjects/jdSmartRouteWeb";
import { JdRekApp } from "../components/jdProjects/jdRekApp";
import { JdRekWeb } from "../components/jdProjects/jdRekWeb";
import { JdTypoApp } from "../components/jdProjects/jdTypoApp";
import { JdInsuranceApp } from "../components/jdProjects/jdInsuranceApp";
import { JdObApp } from "../components/jdProjects/jdObApp";

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
        title: `Building a returns app in one month`,
        desc: `We had one month to build a returns app for a dark store in Chicago. It felt like an episode of 24, or Master Chef?`,
        isOpen: false,
    }

    public shopifyApp: IJdProject = {
        id: '2',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.redux, jdSkillsStore.sass, jdSkillsStore.productDesign, jdSkillsStore.figma],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyApp.webp?alt=media',
        component: <JdShoifyApp />,
        title: 'Shopify app with home pickup',
        desc: 'The success of our Chicago pilot led us to the next big project - build a Shopify app.',
        isOpen: false,
    }

    public boomNativeApp: IJdProject = {
        id: '3',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.reactNative, jdSkillsStore.reanimated, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.sass, jdSkillsStore.figma, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativePreview.webp?alt=media',
        component: <JdBoomNativeApp />,
        title: 'Mobile app to manage all returns',
        desc: 'Returns can be a pain, but how nice would it be to manage all of them in one app?',
        isOpen: false,
    }

    public boomSmartApp: IJdProject = {
        id: '4',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.framerMotion, jdSkillsStore.sass, jdSkillsStore.figma, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRoutePreview.webp?alt=media',
        component: <JdSmartRouteApp />,
        title: 'Routing returns to the most profitable location',
        desc: 'Most retailers send all of their returns to once place, sometimes across the country. Why not route them to a local store, warehouse, or consolidation center?',
        isOpen: false,
    }

    public boomSmartWeb: IJdProject = {
        id: '5',
        company: jdCompaniesStore.boomerang,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.framerMotion, jdSkillsStore.sass, jdSkillsStore.figma, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteWebPreview.webp?alt=media',
        component: <JdSmartRouteWeb />,
        title: 'Marketing a complex reverse logistics app in a one page scrollable site',
        desc: `Everyone's tired of hearing "simplify" but I suppose it was a relevant verb for this project.`,
        isOpen: false,
    }

    public rekApp: IJdProject = {
        id: '6',
        company: jdCompaniesStore.rek,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.reactNative, jdSkillsStore.mobX, jdSkillsStore.sql, jdSkillsStore.noSql, jdSkillsStore.nodeJs, jdSkillsStore.figma, jdSkillsStore.afterEffects, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekPreview.webp?alt=media',
        component: <JdRekApp />,
        title: 'Rek it. - Tracking recommendations amongst friends',
        desc: `Walking away from a dinner with friends, I couldn't remember a single TV show we talked about. How nice would it be to track it?`,
        isOpen: false,
    }

    public rekWeb: IJdProject = {
        id: '7',
        company: jdCompaniesStore.rek,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.figma, jdSkillsStore.productDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebPreview.webp?alt=media',
        component: <JdRekWeb />,
        title: 'Building a website to promote "Rek it" - a social recommendations app',
        desc: `After spending months in the React Native realm, it was time to revist the wonderful world wide web.`,
        isOpen: false,
    }

    public typoApp: IJdProject = {
        id: '8',
        company: jdCompaniesStore.typo,
        skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.reactNative, jdSkillsStore.reanimated, jdSkillsStore.figma, jdSkillsStore.productDesign, jdSkillsStore.brandDesign],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoPreview.webp?alt=media',
        component: <JdTypoApp />,
        title: `Typo - yet another social media app we don't need`,
        desc: `I love the idea of returning to a text-only social media, but is it really something we need? Probably not.`,
        isOpen: false,
    }

    public higApp: IJdProject = {
        id: '9',
        company: jdCompaniesStore.primacy,
        skills: [jdSkillsStore.productDesign, jdSkillsStore.figma, jdSkillsStore.afterEffects],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/insuranceProto.webp?alt=media',
        component: <JdInsuranceApp />,
        title: `Designing an app for insurance underwriters`,
        desc: `How do you take some of the most complex data structures and present them in a digestable and actionable UI? Lots of research and iteration.`,
        isOpen: false,
    }

    public obApp: IJdProject = {
        id: '10',
        company: jdCompaniesStore.primacy,
        skills: [jdSkillsStore.productDesign, jdSkillsStore.brandDesign, jdSkillsStore.figma, jdSkillsStore.afterEffects],
        image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obDashboard.webp?alt=media',
        component: <JdObApp />,
        title: `Project management app for agencies`,
        desc: `Talk about a LOT of personas. This was not only an fun research project but also an exciting UI to design.`,
        isOpen: false,
    }

    public get isAnyProjectOpen(): boolean {
        if (this.projects.find((proj: IJdProject) => proj.isOpen)) return true;
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

    public get idxOfOpenProj(): number {
        return this.projects.findIndex((proj: IJdProject) => proj.isOpen);
    }

    public get nextProject(): IJdProject | undefined {
        if (this.idxOfOpenProj === -1 || (this.idxOfOpenProj + 1) > (this.projects.length - 1)) return;
        return this.projects[this.idxOfOpenProj + 1];
    }

    public get prevProject(): IJdProject | undefined {
        if (this.idxOfOpenProj === -1 || this.idxOfOpenProj - 1 < 0) return;
        return this.projects[this.idxOfOpenProj - 1];
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