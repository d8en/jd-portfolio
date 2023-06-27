import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as TypescriptIcon } from '../../assets/svg/brands/typescirpt.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
import { ReactComponent as ReanimatedIcon } from '../../assets/svg/brands/swm.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/brands/sass.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/brands/redux.svg';
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
                    xp="4 Years"
                    fillAmt={1}
                >
                    <p>My roots in C# were super beneficial in learning and using Typescript. I'm a big fan an very happy with the progression of Typescript over the past few years.</p>
                </JdXpItem>

                {/* REACT */}
                <JdXpItem
                    title="React / React Native"
                    icon={<ReactIcon />}
                    xp="4 Years"
                    fillAmt={1}
                >
                    <p>Experience building full web and mobile applications using hooks and previously class components. Proficient in full app architecture, troubleshooting, refactoring, and feature development.</p>
                </JdXpItem>

                {/* MOBX */}
                <JdXpItem
                    title="MobX"
                    imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media&token=8ff6afbf-f4d9-408c-bd5b-e100dd9dce7b"
                    xp="4 Years"
                    fillAmt={1}
                >
                    <p>By far my favorite state management library, I have 4 years of experience using it with the React lite bindings. The simplicity and familiar architecture makes this my go to for all projects.</p>
                </JdXpItem>

                {/* REANIMATED */}
                <JdXpItem
                    title="React Native Reanimated"
                    icon={<ReanimatedIcon />}
                    xp="4 Years"
                    fillAmt={.75}
                >
                    <p>An exceptional and powerful library that allowed me to do complex and performant native animations in my React Native projects (responsive pan responders, donut loaders, etc.).</p>
                </JdXpItem>

                {/* SASS */}
                <JdXpItem
                    title="Sass (CSS)"
                    icon={<SassIcon />}
                    xp="4 Years"
                    fillAmt={1}
                >
                    <p>I'm pleasantly surprised by the evolution of CSS. Although compatibility across browsers is a pain, recent features (gap, grid, aspect-ratio, etc.) have made this a less painful language to use. Sass is an incredibly useful pre-processing language that I use in all projects.</p>
                </JdXpItem>

                {/* REDUX */}
                <JdXpItem
                    title="Redux Toolkit"
                    icon={<ReduxIcon />}
                    xp="1 Year"
                    fillAmt={.25}
                >
                    <p>I took some time to rewrite about 60% of a production app in Redux to get a feel for how it compared to Mobx. While I prefer Mobx, I enjoyed using Redux and would love to use it in more projects.</p>
                </JdXpItem>


            </div>
        </JdViewWrapper>
    )
}