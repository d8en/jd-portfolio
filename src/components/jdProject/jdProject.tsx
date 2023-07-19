import { useEffect, useRef, useState } from 'react';
import { IJdProject } from '../../models/iJdProject';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdHashtag } from '../jdHashtag/jdHashtag';
import { JdImg } from '../jdImg/jdImg';
import { JdXpItem } from '../jdXpItem/jdXpItem';
import styles from './projectStyles.module.scss';
import jdStringUtils from '../../utils/jdStringUtils';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import { JdClose } from '../jdClose/jdClose';
import { ReactComponent as ArrowIcon } from '../../assets/svg/icons/arrow.svg';
import { Link } from 'react-router-dom';
import jdProjectStore from '../../stores/jdProjectStore';
import jdElementUtils from '../../utils/jdElementUtils';
import jdAniUtils from '../../utils/jdAniUtils';
import jdThemeManager from '../../managers/jdThemeManager';

export interface IJdProjectProps {
    onToggleProject: () => void | Promise<void>;
    idx: number;
    imgPreviewAlt: string;
}

export const JdProject = observer((props: IJdProject & IJdProjectProps): React.JSX.Element => {

    // Sizing used for wrapper container to maintain scroll position when an article is position:absolute (opened)
    const [innerDivRect, setInnerDivRect] = useState<DOMRect>();

    // Hover over arrows to replace 'up next'
    const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);

    // Inner div ref
    const innerDiv = useRef<HTMLDivElement | null>(null);

    const onClickProject = (): void => {
        if (props.isOpen) return;

        props.onToggleProject();
    }

    // Mount
    useEffect(() => {
        if (!innerDiv.current) return;

        // Set wrapper dims - we use a wrapper to make sure we maintain scroll position when a project is open.
        setInnerDivRect(innerDiv.current?.getBoundingClientRect());
        jdElementUtils.resetScrollTop(innerDiv.current);

    }, []);

    // When opened
    useEffect(() => {
        if (!innerDiv.current) return;
        jdElementUtils.resetScrollTop(innerDiv.current);
    }, [props.isOpen]);

    return (

        // OUTER PLACEHOLDER
        <div
            className={styles.projectsHolder}
            style={innerDivRect ?
                {
                    maxHeight: innerDivRect.height,
                    maxWidth: innerDivRect.width,
                }
                : undefined}
        >

            {/* INNER MOVING DIV */}
            <motion.div
                ref={innerDiv}
                onClickCapture={onClickProject}
                className={styles.projectsContainer}
                {...jdAniUtils.aniElementMount(props.idx / 6)}
            >

                {/* PREVIEW IMAGE */}
                <motion.div
                    className={styles.projectPreviewImgContainer}
                >
                    <JdImg
                        srcSet={props.image}
                        className={styles.projectPreviewImg}
                        onClick={(e) => { e.preventDefault() }}
                        alt={props.imgPreviewAlt}
                        style={props.invertImageColors && jdThemeManager.store.isDarkTheme ? { filter: 'invert()' } : undefined}
                    />
                </motion.div>

                {/* CONTENT */}
                <div
                    className={styles.projectContent}
                >

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
                                    onClick={() => { }}
                                />
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    )
});