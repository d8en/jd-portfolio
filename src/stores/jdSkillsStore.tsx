import { JdSkillType } from "../models/enums/jdSkillType";
import { IJdSkill } from "../models/iJdSkill";
import { ReactComponent as TsIcon } from '../assets/svg/brands/typescript.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/brands/react.svg';
import { ReactComponent as SassIcon } from '../assets/svg/brands/sass.svg';
import { ReactComponent as CssIcon } from '../assets/svg/brands/css.svg';
import { ReactComponent as FigmaIcon } from '../assets/svg/brands/figma.svg';
import { ReactComponent as ReanimatedIcon } from '../assets/svg/brands/swm.svg';
import { ReactComponent as ReduxIcon } from '../assets/svg/brands/redux.svg';
import { ReactComponent as NodeIcon } from '../assets/svg/brands/node.svg';
import { ReactComponent as AdobeAeIcon } from '../assets/svg/brands/ae.svg';
import { ReactComponent as FirebaseIcon } from '../assets/svg/brands/firebase.svg';
import { ReactComponent as BrandIcon } from '../assets/svg/brands/brand.svg';
import { makeAutoObservable } from "mobx";
import jdObjUtils from "../utils/jdObjUtils";

export class JdSkillsStore {
    constructor() {
        makeAutoObservable(this);
    }

    public typescript: IJdSkill = {
        name: 'Typescript',
        icon: <TsIcon />,
        type: JdSkillType.Typescript,
        xp: 4,
        xpPercentage: 1,
        component: <p>My roots in C# were super beneficial in learning and using Typescript. I'm a big fan an very happy with the progression of Typescript over the past few years.</p>
    }

    public react: IJdSkill = {
        name: 'React',
        icon: <ReactIcon />,
        type: JdSkillType.React,
        xp: 4,
        xpPercentage: 1,
        component: <p>Experience building full web applications using hooks and, previously, class components. Proficient in full app architecture, troubleshooting, refactoring, and feature development.</p>
    }

    public reactNative: IJdSkill = {
        name: 'React Native',
        icon: <ReactIcon />,
        type: JdSkillType.ReactNative,
        xp: 4,
        xpPercentage: 1,
        component: <p>Experience building mobile apps with many native features like push notifications, camera interactions, share activities, etc.</p>
    }

    public mobX: IJdSkill = {
        name: 'MobX',
        type: JdSkillType.MobX,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media',
        xp: 4,
        xpPercentage: 1,
        component: <p>By far my favorite state management library, I have 4 years of experience using it with the React lite bindings. The simplicity and familiar architecture makes this my go to for all projects.</p>
    }

    public css: IJdSkill = {
        name: 'CSS',
        type: JdSkillType.Css,
        icon: <CssIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use. Sass is an incredibly useful pre-processing language that I use in all projects.</p>
    }

    public sass: IJdSkill = {
        name: 'Sass',
        type: JdSkillType.Sass,
        icon: <SassIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use. Sass is an incredibly useful pre-processing language that I use in all projects.</p>
    }

    public figma: IJdSkill = {
        name: 'Figma',
        type: JdSkillType.Figma,
        icon: <FigmaIcon />,
        xp: 7,
        xpPercentage: 1,
        component: <p>It's fascinating to hear which applications each product designer has used. My progression goes like this: Inkscape, Illustrator, XD, Sketch, then Figma. Product design was something I discovered a passion for early on in my career as a product analyst and it's still something I love to this day.</p>,
    }

    public productDesign: IJdSkill = {
        name: 'Product Design',
        type: JdSkillType.ProductDesign,
        icon: <FigmaIcon />,
        xp: 7,
        xpPercentage: 1,
        component: <p>It's fascinating to hear which applications each product designer has used. My progression goes like this: Inkscape, Illustrator, XD, Sketch, then Figma. Product design was something I discovered a passion for early on in my career as a product analyst and it's still something I love to this day.</p>,
    }

    public reanimated: IJdSkill = {
        name: 'React Native Reanimated',
        type: JdSkillType.ReactNativeReanimated,
        icon: <ReanimatedIcon />,
        xp: 3,
        xpPercentage: .75,
        component: <p>An exceptional and powerful library that allowed me to do complex and performant native animations in my React Native projects (responsive pan responders, donut loaders, etc.).</p>
    }

    public redux: IJdSkill = {
        name: 'Redux Toolkit',
        type: JdSkillType.Redux,
        icon: <ReduxIcon />,
        xp: 1,
        xpPercentage: .25,
        component: <p>I took some time to rewrite about 60% of a production app in Redux to get a feel for how it compared to Mobx. While I prefer Mobx, I enjoyed using Redux and would love to use it in more projects.</p>,
    }

    public nodeJs: IJdSkill = {
        name: 'Node.js',
        type: JdSkillType.NodeJs,
        icon: <NodeIcon />,
        xp: 2,
        xpPercentage: .25,
        component: <p>I've spent the last few years building the web services to support my web apps as well as a few hobby projects (using Express as well).</p>,
    }

    public cSharp: IJdSkill = {
        name: 'C#',
        type: JdSkillType.CSharp,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media',
        xp: 1,
        xpPercentage: .1,
        component: <p>I've spent the last few years building the web services to support my web apps as well as a few hobby projects (using Express as well).</p>,

    }

    public noSql: IJdSkill = {
        name: 'NoSQL',
        type: JdSkillType.NoSql,
        icon: <FirebaseIcon />,
        xp: 1,
        xpPercentage: .25,
        component: <p>Heavily debated amongst my DBA friends, I believe NoSQL is a super powerful architecture that has many use cases. I've used this to develop rapid prototypes but also plan on using it for a side project.</p>,
    }

    public sql: IJdSkill = {
        name: 'SQL',
        type: JdSkillType.Sql,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media',
        xp: 2,
        xpPercentage: .25,
        component: <p>In addition to experimenting with NoSQL dbs, I've also used MySQL to support one of my published apps as well as during my time as a product analyst.</p>,
    }

    public afterEffects: IJdSkill = {
        name: 'After Effects',
        type: JdSkillType.AfterEffects,
        icon: <AdobeAeIcon />,
        xp: 4,
        xpPercentage: .5,
        component: <p>Motion design is one of my favorite parts of UI design. After Effects paired with Body Movin and Lotte are extremely powerful tools for more complex svg animations.</p>,
    }

    public brandDesign: IJdSkill = {
        name: 'Brand Design',
        type: JdSkillType.BrandDesign,
        icon: <BrandIcon />,
        xp: 8,
        xpPercentage: 1,
        component: <p>My first design projects were logo and branding design. I enjoy word-mark and logo design even to this day, as I got to work on a branding refresh at my most recent gig.</p>
    }

    public get skills(): IJdSkill[] {
        return jdObjUtils.getAllProperties(this);
    }
}

const jdSkillsStore = new JdSkillsStore();
export default jdSkillsStore;