import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
import styles from './skillsViewStyles.module.scss';

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper>

            {/* SKILLS */}
            <div className={styles.skillsContainer}>
                <JdXpItem
                    title="React / React Native"
                    icon={<ReactIcon />}
                    xp="4 Years"
                    fillAmt={1}
                />
            </div>
        </JdViewWrapper>
    )
}