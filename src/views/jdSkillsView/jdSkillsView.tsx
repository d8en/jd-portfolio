import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as TypescriptIcon } from '../../assets/svg/brands/typescirpt.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
import { ReactComponent as ReanimatedIcon } from '../../assets/svg/brands/swm.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/brands/sass.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/brands/redux.svg';
import { ReactComponent as NodeIcon } from '../../assets/svg/brands/node.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/svg/brands/firebase.svg';
import { ReactComponent as AdobeAeIcon } from '../../assets/svg/brands/ae.svg';
import { ReactComponent as FigmaIcon } from '../../assets/svg/brands/figma.svg';
import { ReactComponent as BrandIcon } from '../../assets/svg/brands/brand.svg';
import styles from './skillsViewStyles.module.scss';

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.skillsContainer }}>

            {/* SKILLS */}
            {/* <div className={styles.skillsContainer}> */}

            {/* TYPESCRIPT */}
            <JdXpItem
                title="Typescript"
                icon={<TypescriptIcon />}
                xp="4 years"
                fillAmt={1}
            >
                <p>My roots in C# were super beneficial in learning and using Typescript. I'm a big fan an very happy with the progression of Typescript over the past few years.</p>
            </JdXpItem>

            {/* REACT */}
            <JdXpItem
                title="React / React Native"
                icon={<ReactIcon />}
                xp="4 years"
                fillAmt={1}
            >
                <p>Experience building full web and mobile applications using hooks and previously class components. Proficient in full app architecture, troubleshooting, refactoring, and feature development.</p>
            </JdXpItem>

            {/* MOBX */}
            <JdXpItem
                title="MobX"
                imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media"
                xp="4 years"
                fillAmt={1}
            >
                <p>By far my favorite state management library, I have 4 years of experience using it with the React lite bindings. The simplicity and familiar architecture makes this my go to for all projects.</p>
            </JdXpItem>

            {/* SASS */}
            <JdXpItem
                title="Sass (CSS)"
                icon={<SassIcon />}
                xp="4 years"
                fillAmt={1}
            >
                <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use. Sass is an incredibly useful pre-processing language that I use in all projects.</p>
            </JdXpItem>

            {/* FIGMA */}
            <JdXpItem
                title="Figma / Product Design"
                icon={<FigmaIcon />}
                xp="7 years"
                fillAmt={1}
            >
                <p>It's fascinating to hear which applications each product designer has used. My progression goes like this: Inkscape, Illustrator, XD, Sketch, then Figma. Product design was something I discovered a passion for early on in my career as a product analyst and it's still something I love to this day.</p>
            </JdXpItem>

            {/* REANIMATED */}
            <JdXpItem
                title="React Native Reanimated"
                icon={<ReanimatedIcon />}
                xp="3 years"
                fillAmt={.75}
            >
                <p>An exceptional and powerful library that allowed me to do complex and performant native animations in my React Native projects (responsive pan responders, donut loaders, etc.).</p>
            </JdXpItem>

            {/* REDUX */}
            <JdXpItem
                title="Redux Toolkit"
                icon={<ReduxIcon />}
                xp="1 year"
                fillAmt={.25}
            >
                <p>I took some time to rewrite about 60% of a production app in Redux to get a feel for how it compared to Mobx. While I prefer Mobx, I enjoyed using Redux and would love to use it in more projects.</p>
            </JdXpItem>

            {/* NODE */}
            <JdXpItem
                title="Node.js"
                icon={<NodeIcon />}
                xp="2 years"
                fillAmt={.25}
            >
                <p>I've spent the last few years building the web services to support my web apps as well as a few hobby projects (using Express as well).</p>
            </JdXpItem>

            {/* C# */}
            <JdXpItem
                title="C#"
                imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media"
                xp="1 year"
                fillAmt={.1}
            >
                <p>I've spent the last few years building the web services to support my web apps as well as a few hobby projects (using Express as well).</p>
            </JdXpItem>

            {/* NOSQL */}
            <JdXpItem
                title="NoSQL"
                icon={<FirebaseIcon />}
                xp="1 year"
                fillAmt={.25}
            >
                <p>Heavily debated amongst my DBA friends, I believe NoSQL is a super powerful architecture that has many use cases. I've used this to develop rapid prototypes but also plan on using it for a side project.</p>
            </JdXpItem>

            {/* SQL */}
            <JdXpItem
                title="SQL"
                imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media"
                xp="2 years"
                fillAmt={.25}
            >
                <p>In addition to experimenting with NoSQL dbs, I've also used MySQL to support one of my published apps as well as during my time as a product analyst.</p>
            </JdXpItem>

            {/* AFTER EFFECTS */}
            <JdXpItem
                title="After Effects / Motion Design"
                icon={<AdobeAeIcon />}
                xp="4 years"
                fillAmt={.5}
            >
                <p>Motion design is one of my favorite parts of UI design. After Effects paired with Body Movin and Lotte are extremely powerful tools for more complex svg animations.</p>
            </JdXpItem>

            {/* BRANDING */}
            <JdXpItem
                title="Brand Design"
                icon={<BrandIcon />}
                xp="8 years"
                fillAmt={1}
            >
                <p>My first design projects were logo and branding design. I enjoy word-mark and logo design even to this day, as I got to work on a branding refresh at my most recent gig.</p>
            </JdXpItem>

            {/* </div> */}
        </JdViewWrapper>
    )
}