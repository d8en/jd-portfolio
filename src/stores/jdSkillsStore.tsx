import TsIcon from '../assets/svg/brands/typescript.svg?react';
import ReactIcon from '../assets/svg/brands/react.svg?react';
import SassIcon from '../assets/svg/brands/sass.svg?react';
import CssIcon from '../assets/svg/brands/css.svg?react';
import FigmaIcon from '../assets/svg/brands/figma.svg?react';
import ReanimatedIcon from '../assets/svg/brands/swm.svg?react';
import ReduxIcon from '../assets/svg/brands/redux.svg?react';
import BunIcon from '../assets/svg/brands/bun.svg?react';
import AdobeAeIcon from '../assets/svg/brands/ae.svg?react';
import MongoIcon from '../assets/svg/brands/mongo.svg?react';
import BrandIcon from '../assets/svg/brands/brand.svg?react';
import ProductIcon from '../assets/svg/brands/product.svg?react';
import FramerIcon from '../assets/svg/brands/framer.svg?react';
import GraphQLIcon from '../assets/svg/brands/graphQL.svg?react';
import ElectronIcon from '../assets/svg/brands/electron.svg?react';
import { makeAutoObservable } from 'mobx';
import jdObjUtils from '../utils/jdObjUtils';
import { IJdSkillCo } from '../models/iJdSkillCo';
import styles from './storeStyles.module.scss';
import { JdDateUtils } from '../utils/jdDateUtilts';

export class JdSkillsStore {
    constructor() {
        makeAutoObservable(this);
    }

    public typescript: IJdSkillCo = {
        name: 'Typescript',
        icon: <TsIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: <p>My roots in C# were super helpful in picking up Typescript. This is the primary language I've been using for the past {JdDateUtils.getYearDiff('2019')}.</p>,
    };

    public react: IJdSkillCo = {
        name: 'React',
        icon: <ReactIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: (
            <p>
                I've built 10+ end-to-end web applications using React. I have extensive experience with app architecture, lifecycle management, performance, hooks, animations, troubleshooting,
                refactoring, optimizing, bug fixing, and complex feature development.
            </p>
        ),
    };

    public reactNative: IJdSkillCo = {
        name: 'React Native',
        icon: <ReactIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: <p>I have 4 years of experience building end-to-end mobile apps with all sorts of native features like push notifications, camera interactions, share activities, and more.</p>,
    };

    public electron: IJdSkillCo = {
        name: 'Electron',
        icon: <ElectronIcon />,
        startYear: '2023',
        xpPercentage: 0.7,
        component: (
            <p>
                I'm a huge fan of building more native experiences, even if they're an illusion...I mean a PWA. Electron is very fun to work with and I've built a handful of projects both
                professionally and in my free time.
            </p>
        ),
    };

    public nodeJs: IJdSkillCo = {
        name: 'Bun.sh / Node.js',
        icon: <BunIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: <p>I'm a big fan of bun.sh and use node.js in several production apps (w/Typescript).</p>,
    };

    public graphQL: IJdSkillCo = {
        name: 'GraphQL',
        icon: <GraphQLIcon />,
        startYear: '2023',
        xpPercentage: 0.5,
        component: <p>While I still believe there is a place in the world for REST, I'm enjoying GraphQL at my current role and plan on using it in future projects.</p>,
    };

    public noSql: IJdSkillCo = {
        name: 'MongoDB',
        icon: <MongoIcon />,
        startYear: '2021',
        xpPercentage: 0.9,
        component: (
            <p>
                I'm a huge fan of MongoDB and I've also experimented with Firebase Realtime DB. The only other major NoSQL db that I'd like to try is DynamoDB, which also seems useful I just don't
                love being restricted to AWS.
            </p>
        ),
    };

    public sql: IJdSkillCo = {
        name: 'SQL',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media',
        startYear: '2021',
        endYear: '2024',
        xpPercentage: 0.5,
        component: <p>I use MySQL to support one of my published apps and used MSSQL daily as a product analyst.</p>,
    };

    public cSharp: IJdSkillCo = {
        name: 'C#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media',
        startYear: '2019',
        endYear: '2020',
        xpPercentage: 0.3,
        component: (
            <p>
                I spent my first year of programming learning C#, reading 3 books and building several terminal apps. I'm glad I started here, as the core principles helped me get to where I'm at
                today.
            </p>
        ),
    };

    public sass: IJdSkillCo = {
        name: 'Sass',
        icon: <SassIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: <p>Sass is an incredibly useful pre-processing language that I use in all of my projects. Mixins, variables, and functions bring sanity to CSS.</p>,
    };

    public css: IJdSkillCo = {
        name: 'CSS',
        icon: <CssIcon />,
        startYear: '2019',
        xpPercentage: 1,
        component: (
            <p>
                I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful
                language to use.
            </p>
        ),
    };

    public productDesign: IJdSkillCo = {
        name: 'Product Design',
        icon: <ProductIcon />,
        startYear: '2017',
        xpPercentage: 1,
        component: (
            <p>
                I've always wanted to be an "inventor" and I think product designers are exactly that. I have 7 years of experience across 10+ industries with many happy clients, profitable products,
                and growing user bases.
            </p>
        ),
    };

    public figma: IJdSkillCo = {
        name: 'Figma',
        icon: <FigmaIcon />,
        startYear: '2017',
        xpPercentage: 1,
        component: (
            <p>
                It's fascinating to see which applications each product designer has gone through. My progression goes something like this: Inkscape, Illustrator, XD, Sketch, then Figma. I can't
                imagine using anything else, from advanced prototyping and large scale design systems to branding and typeface design, I'm an fanboy and power user.
            </p>
        ),
    };

    public brandDesign: IJdSkillCo = {
        name: 'Brand Design',
        icon: <BrandIcon className={styles.themedIcon} />,
        startYear: '2014',
        endYear: '2019',
        xpPercentage: 1,
        component: <p>My first design projects were logo and branding design. I enjoy word-mark and logo design even to this day, as I got to work on a branding refresh at my most recent gig.</p>,
    };

    public mobX: IJdSkillCo = {
        name: 'MobX',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media',
        startYear: '2019',
        xpPercentage: 1,
        component: (
            <p>
                By far my favorite state management library, I have 4 years of experience using it with large scale projects. The simplicity and familiar architecture makes this my go-to for all
                projects.
            </p>
        ),
    };

    public redux: IJdSkillCo = {
        name: 'Redux Toolkit',
        icon: <ReduxIcon />,
        startYear: '2022',
        xpPercentage: 0.5,
        component: (
            <p>
                I took some time to rewrite about 60% of a production app in Redux to get a feel for how it compared to Mobx. While I prefer Mobx, I enjoyed using Redux and would love to use it in
                more projects.
            </p>
        ),
    };

    public reanimated: IJdSkillCo = {
        name: 'RN Reanimated',
        icon: <ReanimatedIcon />,
        startYear: '2019',
        xpPercentage: 0.75,
        component: (
            <p>
                Software Mansion has built some incredible libraries and this is no exception. I use this library in almost every project and prefer it over the Animated API for almost all animations
                (responsive pan responders, doughnut loaders, etc.).
            </p>
        ),
    };

    public framerMotion: IJdSkillCo = {
        name: 'Framer Motion',
        icon: <FramerIcon className={styles.themedIcon} />,
        startYear: '2019',
        xpPercentage: 1,
        component: (
            <p>
                I use css animations and transitions as much as possible but continue to be impressed by the Framer Motion team. This library is incredibly performant and can make lifecycle animations
                (specifically unmounting) and interpolation super simple.
            </p>
        ),
    };

    public afterEffects: IJdSkillCo = {
        name: 'After Effects',
        icon: <AdobeAeIcon />,
        startYear: '2022',
        endYear: '2024',
        xpPercentage: 0.5,
        component: <p>Motion design is one of my favorite parts of UI design. After Effects paired with Body Movin and Lotte are extremely powerful tools for more complex svg animations.</p>,
    };

    public get skills(): IJdSkillCo[] {
        return jdObjUtils.getValues(this);
    }
}

const jdSkillsStore = new JdSkillsStore();
export default jdSkillsStore;
