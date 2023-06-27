import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as TypescriptIcon } from '../../assets/svg/brands/typescirpt.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
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
                    title="React & React Native"
                    icon={<ReactIcon />}
                    xp="4 Years"
                    fillAmt={1}
                >
                    <p>Experience building full web and mobile applications using hooks and previously class components. Proficient in full app architecture, troubleshooting, refactoring, and feature development.</p>
                </JdXpItem>


            </div>
        </JdViewWrapper>
    )
}