import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as TypescriptIcon } from '../../assets/svg/brands/typescirpt.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
import { ReactComponent as ReanimatedIcon } from '../../assets/svg/brands/swm.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/brands/sass.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/brands/redux.svg';
import { ReactComponent as NodeIcon } from '../../assets/svg/brands/node.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/svg/brands/firebase.svg';
import styles from './skillsViewStyles.module.scss';

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper>

            {/* SKILLS */}
            <div className={styles.skillsContainer}>

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
                    imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media&token=8ff6afbf-f4d9-408c-bd5b-e100dd9dce7b"
                    xp="4 years"
                    fillAmt={1}
                >
                    <p>By far my favorite state management library, I have 4 years of experience using it with the React lite bindings. The simplicity and familiar architecture makes this my go to for all projects.</p>
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

                {/* SASS */}
                <JdXpItem
                    title="Sass (CSS)"
                    icon={<SassIcon />}
                    xp="4 years"
                    fillAmt={1}
                >
                    <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use. Sass is an incredibly useful pre-processing language that I use in all projects.</p>
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
                    imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media&token=91f7229e-f523-485f-afa8-72471a935628"
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
                    imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media&token=b6772dd0-0e41-4a13-b64e-e28cac6fb7e2"
                    xp="2 years"
                    fillAmt={.25}
                >
                    <p>In addition to experimenting with NoSQL dbs, I've also used MySQL to support one of my published apps as well as during my time as a product analyst.</p>
                </JdXpItem>

            </div>
        </JdViewWrapper>
    )
}