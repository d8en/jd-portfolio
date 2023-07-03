import { makeAutoObservable } from "mobx";
import { IJdProject } from "../models/iJdProject";
import jdCompaniesStore from "./jdCompaniesStore";
import jdSkillsStore from "./jdSkillsStore";
import { JdAirshopApp } from "../components/jdProjects/jdAirshopApp";
import { IJdSkillCo } from "../models/iJdSkillCo";
import jdObjUtils from "../utils/jdObjUtils";
import { JdShoifyApp } from "../components/jdProjects/jdShopifyApp";

export class JdProjectStore {
    constructor() {
        makeAutoObservable(this);
    }

    public projects: IJdProject[] = [
        {
            id: '1',
            company: jdCompaniesStore.boomerang,
            skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.sass, jdSkillsStore.productDesign],
            image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopPreview.webp?alt=media',
            component: <JdAirshopApp />,
            title: `Operation “Build a returns app with home pickup in one month”`,
            desc: `We had one month to build an end-to-end returns solution for a dark store in Chicago. It felt like an episode of 24, or maybe Master Chef.`,
            isOpen: false,
        },
        {
            id: '2',
            company: jdCompaniesStore.boomerang,
            skills: [jdSkillsStore.typescript, jdSkillsStore.react, jdSkillsStore.css, jdSkillsStore.mobX, jdSkillsStore.sass, jdSkillsStore.productDesign],
            image: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyApp.webp?alt=media',
            component: <JdShoifyApp />,
            title: 'Shopify App - Home pickup for any Shopify store owner',
            desc: 'After we launched our Chicago based pickup solution, it was time to scale up. The Shopify ecosystem seemed like a great place to start.',
            isOpen: false,
        }
    ];

    public get filter(): IJdSkillCo[] {
        return [];
    }

    public get filteredProjects(): IJdProject[] {
        if (this.filter.length === 0) return jdObjUtils.getAllProperties(this);
        return [];
    }
}
const jdProjectStore: JdProjectStore = new JdProjectStore();
export default jdProjectStore;