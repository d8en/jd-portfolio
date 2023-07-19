import { motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";
import { JdClose } from "../jdClose/jdClose";
import styles from '../jdProject/projectStyles.module.scss';
import jdThemeManager from "../../managers/jdThemeManager";
import { JdImg } from "../jdImg/jdImg";
import { IJdProjectProps } from "../jdProject/jdProject";
import { IJdProject } from "../../models/iJdProject";
import { Link } from "react-router-dom";
import { IJdSkillCo } from "../../models/iJdSkillCo";
import jdProjectStore from "../../stores/jdProjectStore";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdXpItem } from "../jdXpItem/jdXpItem";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowIcon } from '../../assets/svg/icons/arrow.svg';
import { observer } from "mobx-react-lite";
import jdElementUtils from "../../utils/jdElementUtils";

export const JdProjectOpen = observer((props: IJdProject & IJdProjectProps): React.JSX.Element => {

    // Hover over arrows to replace 'up next'
    const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);

    // Inner div ref
    const innerDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!innerDiv.current) return;
        jdElementUtils.resetScrollTop(innerDiv.current);
    }, [props.isOpen]);

    return (
        <motion.div
            ref={innerDiv}
            {...jdAniUtils.aniElementMount()}
            className={styles.projectsContainerOpen}
        >
            {/* CLOSE */}
            <JdClose onClick={() => props.onToggleProject()} />

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

            <div
                className={styles.projectContent}
            >

                {/* CLOSE */}
                <JdClose onClick={() => props.onToggleProject()} />


                {/* TITLE */}
                <h2
                    id={props.title}
                    className={styles.projectHeader}
                >
                    {props.title}
                </h2>

                {/* DESCRIPTION */}
                <p>{props.desc}</p>

                {/* COMPANY HEADER */}
                <JdProjectSubHeader {...jdStringUtils.company} />
                <JdXpItem
                    idx={0}
                    name={props.company.name}
                    companyName={props.company.companyName}
                    imgSrc={props.company.imgSrc}
                    icon={props.company.icon}
                    xp={props.company.xp}
                    xpPercentage={props.company.xpPercentage}
                    invertImageColors={props.company.invertImageColors}
                />

                {/* SKILLS HEADER */}
                <JdProjectSubHeader {...jdStringUtils.skillsUsed} />

                {/* SKILLS */}
                <div className={styles.projectSkills}>
                    {props.skills.map((skill: IJdSkillCo, idx: number) => {
                        return (
                            <JdXpItem
                                idx={idx}
                                key={skill.name}
                                xp={skill.xp}
                                xpPercentage={skill.xpPercentage}
                                icon={skill.icon}
                                imgSrc={skill.imgSrc}
                                name={skill.name}
                            />
                        )
                    })}
                </div>

                {/* ARTICLE CONTENT */}
                {props.component}

                {/* UP NEXT */}
                <div className={styles.projectNav}>

                    {/* PREVIOUS PROJECT */}
                    {jdProjectStore.prevProject &&
                        <Link
                            onMouseEnter={() => setIsHoverLeft(true)}
                            onMouseLeave={() => setIsHoverLeft(false)}
                            to={jdProjectStore.getLinkToProject(jdProjectStore.prevProject)}
                            className={styles.projectNavArrowIcon}
                        >
                            <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    }

                    {jdProjectStore.nextProject && !isHoverLeft ?
                        <p className={styles.projectNavText}><strong>Up Next:</strong>{jdProjectStore.nextProject.title}</p>
                        :
                        jdProjectStore.prevProject &&
                        <p className={styles.projectNavText}><strong>Go Back:</strong>{jdProjectStore.prevProject.title}</p>
                    }

                    {/* NEXT PROJECT */}
                    {jdProjectStore.nextProject &&
                        <Link
                            to={jdProjectStore.getLinkToProject(jdProjectStore.nextProject)}
                            className={styles.projectNavArrowIcon}
                        >
                            <ArrowIcon />
                        </Link>
                    }
                </div>
            </div>
        </motion.div>
    )
});