import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import styles from './skillsViewStyles.module.scss';
import jdSkillsStore from "../../stores/jdSkillsStore";
import { IJdSkill } from "../../models/iJdSkill";

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.skillsContainer }}>

            {/* SKILLS */}
            {/* <div className={styles.skillsContainer}> */}

            {jdSkillsStore.skills.map((skill: IJdSkill) => {
                return (
                    <JdXpItem
                        key={skill.type}
                        title={skill.name}
                        icon={skill.icon}
                        xp={skill.xp}
                        xpPercentage={skill.xpPercentage}
                    >
                        {skill.component}
                    </JdXpItem>
                )
            })}

            {/* </div> */}
        </JdViewWrapper>
    )
}