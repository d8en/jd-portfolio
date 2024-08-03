import { IJdProject } from '../../models/iJdProject';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdHashtag } from '../jdHashtag/jdHashtag';
import { JdImg } from '../jdImg/jdImg';
import styles from './projectStyles.module.scss';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import jdAniUtils from '../../utils/jdAniUtils';
import jdThemeManager from '../../managers/jdThemeManager';

export interface IJdProjectProps {
    onToggleProject: () => void | Promise<void>;
    idx: number;
    imgPreviewAlt: string;
}

export const JdProject = observer((props: IJdProject & IJdProjectProps): React.JSX.Element => {
    const onClickProject = (): void => {
        if (props.isOpen) return;
        props.onToggleProject();
    };

    return (
        <motion.div
            onClickCapture={onClickProject}
            className={styles.projectsContainer}
            {...jdAniUtils.aniElementMount(props.idx / 6)}
        >
            {/* PREVIEW IMAGE */}
            <motion.div className={styles.projectPreviewImgContainer}>
                <JdImg
                    srcSet={props.image}
                    className={styles.projectPreviewImg}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    alt={props.imgPreviewAlt}
                    style={props.invertImageColors && jdThemeManager.store.isDarkTheme ? { filter: 'invert()' } : undefined}
                />
            </motion.div>

            {/* CONTENT */}
            <div className={styles.projectContent}>
                {/* TITLE */}
                <h2
                    id={props.title}
                    className={styles.projectHeader}
                >
                    {props.title}
                </h2>

                {/* DESCRIPTION */}
                <p className={styles.projectDesc}>{props.desc}</p>

                {/* SKILLS */}
                <div className={styles.projectSkills}>
                    {props.skills.map((skill: IJdSkillCo) => {
                        return (
                            <JdHashtag
                                key={skill.name}
                                name={skill.name}
                                onClick={() => {}}
                            />
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
});
