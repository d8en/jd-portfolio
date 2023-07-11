import { useEffect, useRef, useState } from 'react';
import { IJdProject } from '../../models/iJdProject';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdHashtag } from '../jdHashtag/jdHashtag';
import { JdImg } from '../jdImg/jdImg';
import { JdXpItem } from '../jdXpItem/jdXpItem';
import styles from './projectStyles.module.scss';
import jdStringUtils from '../../utils/jdStringUtils';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { observer } from 'mobx-react-lite';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import { JdClose } from '../jdClose/jdClose';
import { ReactComponent as ArrowIcon } from '../../assets/svg/icons/arrow.svg';
import { Link } from 'react-router-dom';
import jdProjectStore from '../../stores/jdProjectStore';

export interface IJdProjectProps {
    onToggleProject: () => void | Promise<void>;
}

export const JdProject = observer((props: IJdProject & IJdProjectProps): React.JSX.Element => {

    // Sizing used for wrapper container to maintain scroll position when an article is position:absolute (opened)
    const [innerDivRect, setInnerDivRect] = useState<DOMRect>();

    // Hover over arrows to replace 'up next'
    const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);

    // Inner div ref
    const innerDiv = useRef<HTMLDivElement | null>(null);

    const onClickProject = (): void => {
        if (!props.isOpen) props.onToggleProject()
    }

    // Mount
    useEffect(() => {
        if (!innerDiv.current) return;
        setInnerDivRect(innerDiv.current?.getBoundingClientRect());
        innerDiv.current.scrollTop = 0;
    }, []);

    // When opened
    useEffect(() => {
        if (!innerDiv.current) return;
        // innerDiv.current.scrollTop = 0;
    }, [props.isOpen]);

    return (

        // OUTER PLACEHOLDER
        <div
            className={styles.projectsHolder}
            style={innerDivRect ?
                {
                    height: innerDivRect.height,
                    width: innerDivRect.width,
                }
                : undefined}
        >

            {/* INNER MOVING DIV */}
            <motion.div
                ref={innerDiv}
                layout
                transition={jdAniUtils.baseEase}
                onClick={onClickProject}
                className={`${props.isOpen ? styles.projectsContainerOpen : styles.projectsContainer}`}
                style={{
                    cursor: props.isOpen ? 'unset' : 'pointer',
                }}
            >

                {/* PREVIEW IMAGE */}
                <div className={styles.projectPreviewImgContainer}>
                    <JdImg
                        srcSet={props.image}
                        className={styles.projectPreviewImg}
                        onClick={(e) => { e.preventDefault() }}
                    />
                </div>

                {/* CONTENT */}
                <div className={styles.projectContent}>


                    {/* CLOSE */}
                    {props.isOpen &&
                        <JdClose onClick={() => props.onToggleProject()} />
                    }


                    {/* TITLE */}
                    <h2 className={styles.projectHeader}>{props.title}</h2>

                    {/* DESCRIPTION */}
                    <p className={props.isOpen ? '' : styles.projectDesc}>{props.desc}</p>

                    {/* COMPANY HEADEAR */}
                    {props.isOpen &&
                        <>
                            <JdProjectSubHeader {...jdStringUtils.company} />
                            <JdXpItem
                                name={props.company.name}
                                companyName={props.company.companyName}
                                imgSrc={props.company.imgSrc}
                                icon={props.company.icon}
                                xp={props.company.xp}
                                xpPercentage={props.company.xpPercentage}
                            />
                        </>
                    }

                    {/* SKILLS HEADER */}
                    {props.isOpen &&
                        <JdProjectSubHeader {...jdStringUtils.skillsUsed} />
                    }

                    {/* SKILLS */}
                    <div className={styles.projectSkills}>
                        {
                            props.isOpen ?
                                <>
                                    {props.skills.map((skill: IJdSkillCo) => {
                                        return (
                                            <JdXpItem
                                                key={skill.name}
                                                xp={skill.xp}
                                                xpPercentage={skill.xpPercentage}
                                                icon={skill.icon}
                                                imgSrc={skill.imgSrc}
                                                name={skill.name}
                                            />
                                        )
                                    })}
                                </>
                                :
                                props.skills.map((skill: IJdSkillCo) => {
                                    return (
                                        <JdHashtag
                                            key={skill.name}
                                            name={skill.name}
                                            onClick={() => { }}
                                        />
                                    )
                                })
                        }
                    </div>

                    {/* ARTICLE CONTENT */}
                    {props.isOpen && props.component}

                    {/* UP NEXT */}
                    {props.isOpen &&
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
                                <p className={styles.projectNavText}><strong>Up Next:</strong> {jdProjectStore.nextProject.title}</p>
                                :
                                jdProjectStore.prevProject &&
                                <p className={styles.projectNavText}><strong>Go Back:</strong> {jdProjectStore.prevProject.title}</p>
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
                    }

                </div>
            </motion.div>
        </div>
    )
});