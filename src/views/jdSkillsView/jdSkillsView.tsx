import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import styles from './skillsViewStyles.module.scss';
import jdSkillsStore from "../../stores/jdSkillsStore";
import { IJdSkillCo } from "../../models/iJdSkillCo";

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.skillsContainer }}>

            {/* SKILLS */}
            {/* <div className={styles.skillsContainer}> */}

            {jdSkillsStore.skills.map((skill: IJdSkillCo) => {
                return (
                    <JdXpItem
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        imgSrc={skill.imgSrc}
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