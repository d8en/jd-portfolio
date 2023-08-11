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
import { ReactComponent as ProductIcon } from '../assets/svg/brands/product.svg';
import { ReactComponent as FramerIcon } from '../assets/svg/brands/framer.svg';
import { makeAutoObservable } from "mobx";
import jdObjUtils from "../utils/jdObjUtils";
import { IJdSkillCo } from '../models/iJdSkillCo';
import styles from './storeStyles.module.scss';

export class JdSkillsStore {
    constructor() {
        makeAutoObservable(this);
    }

    public typescript: IJdSkillCo = {
        name: 'Typescript',
        icon: <TsIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>My roots in C# were super helpful in picking up Typescript. This is the primary language I've been using for the past 4 years.</p>
    }

    public react: IJdSkillCo = {
        name: 'React',
        icon: <ReactIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I've built 10+ end-to-end web applications using React. I have extensive experience with app architecture, lifecycle management, performance, hooks, animations, troubleshooting, refactoring, optimizing, bug fixing, and complex feature development.</p>
    }

    public reactNative: IJdSkillCo = {
        name: 'React Native',
        icon: <ReactIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I have 4 years of experience building end-to-end mobile apps with all sorts of native features like push notifications, camera interactions, share activities, and more.</p>
    }

    public sass: IJdSkillCo = {
        name: 'Sass',
        icon: <SassIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>Sass is an incredibly useful pre-processing language that I use in all of my projects. Mixins, variables, and functions bring sanity to CSS.</p>
    }

    public css: IJdSkillCo = {
        name: 'CSS',
        icon: <CssIcon />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use.</p>
    }

    public nodeJs: IJdSkillCo = {
        name: 'Node.js',
        icon: <NodeIcon />,
        xp: 3,
        xpPercentage: .75,
        component: <p>I've spent the last few years building the web services to support my web apps as well as a few hobby projects (using Express as well).</p>,
    }

    public noSql: IJdSkillCo = {
        name: 'NoSQL',
        icon: <FirebaseIcon />,
        xp: 2,
        xpPercentage: .4,
        component: <p>Heavily debated amongst my DBA friends, I believe the NoSQL paradigm has many use cases. I've used this to develop rapid prototypes but also feel its the appropriate database for specific projects.</p>,
    }

    public sql: IJdSkillCo = {
        name: 'SQL',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media',
        xp: 2,
        xpPercentage: .4,
        component: <p>I use MySQL to support one of my published apps and used MSSQL daily as a product analyst.</p>,
    }

    public cSharp: IJdSkillCo = {
        name: 'C#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media',
        xp: 1,
        xpPercentage: .1,
        component: <p>I spent my first year of programming learning C#, reading 3 books and building several terminal apps. I'm glad I started here, as the core principles helped me get to where I'm at today.</p>
    }

    public mobX: IJdSkillCo = {
        name: 'MobX',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media',
        xp: 4,
        xpPercentage: 1,
        component: <p>By far my favorite state management library, I have 4 years of experience using it with large scale projects. The simplicity and familiar architecture makes this my go-to for all projects.</p>
    }

    public redux: IJdSkillCo = {
        name: 'Redux Toolkit',
        icon: <ReduxIcon />,
        xp: 1,
        xpPercentage: .25,
        component: <p>I took some time to rewrite about 60% of a production app in Redux to get a feel for how it compared to Mobx. While I prefer Mobx, I enjoyed using Redux and would love to use it in more projects.</p>,
    }

    public reanimated: IJdSkillCo = {
        name: 'RN Reanimated',
        icon: <ReanimatedIcon />,
        xp: 3,
        xpPercentage: .75,
        component: <p>Software Mansion has built some incredible libraries and this is no exception. I use this library in almost every project and prefer it over the Animated API for almost all animations (responsive pan responders, doughnut loaders, etc.).</p>
    }

    public framerMotion: IJdSkillCo = {
        name: 'Framer Motion',
        icon: <FramerIcon className={styles.themedIcon} />,
        xp: 4,
        xpPercentage: 1,
        component: <p>I use css animations and transitions as much as possible but continue to be impressed by the Framer Motion team. This library is incredibly performant and can make lifecycle animations (specifically unmounting) and interpolation super simple.</p>
    }

    public figma: IJdSkillCo = {
        name: 'Figma',
        icon: <FigmaIcon />,
        xp: 7,
        xpPercentage: 1,
        component: <p>It's fascinating to see which applications each product designer has gone through. My progression goes something like this: Inkscape, Illustrator, XD, Sketch, then Figma. I can't imagine using anything else, from advanced prototyping and large scale design systems to branding and typeface design, I'm an fanboy and power user.</p>,
    }

    public productDesign: IJdSkillCo = {
        name: 'Product Design',
        icon: <ProductIcon />,
        xp: 7,
        xpPercentage: 1,
        component: <p>I've always wanted to be an "inventor" and I think product designers are exactly that. I have 7 years of experience across 10+ industries with many happy clients, profitable products, and growing user bases.</p>
    }

    public afterEffects: IJdSkillCo = {
        name: 'After Effects',
        icon: <AdobeAeIcon />,
        xp: 4,
        xpPercentage: .5,
        component: <p>Motion design is one of my favorite parts of UI design. After Effects paired with Body Movin and Lotte are extremely powerful tools for more complex svg animations.</p>,
    }

    public brandDesign: IJdSkillCo = {
        name: 'Brand Design',
        icon: <BrandIcon className={styles.themedIcon} />,
        xp: 8,
        xpPercentage: 1,
        component: <p>My first design projects were logo and branding design. I enjoy word-mark and logo design even to this day, as I got to work on a branding refresh at my most recent gig.</p>
    }

    public get skills(): IJdSkillCo[] {
        return jdObjUtils.getAllProperties(this);
    }
}

const jdSkillsStore = new JdSkillsStore();
export default jdSkillsStore;