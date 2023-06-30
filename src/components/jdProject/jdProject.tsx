import { useEffect, useRef, useState } from 'react';
import { IJdProject } from '../../models/iJdProject';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdHashtag } from '../jdHashtag/jdHashtag';
import { JdImg } from '../jdImg/jdImg';
import { JdXpItem } from '../jdXpItem/jdXpItem';
import styles from './projectStyles.module.scss';
import jdStringUtils from '../../utils/jdStringUtils';
import { ReactComponent as Close } from '../../assets/svg/icons/close.svg';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';

export function JdProject(props: IJdProject): React.JSX.Element {

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [innerDivRect, setInnerDivRect] = useState<DOMRect>();

    // Open article
    const toggleOpen = (newIsOpen: boolean): void => {
        setIsOpen(newIsOpen);
    }

    // Inner div ref
    const innerDiv = useRef<HTMLDivElement | null>(null);

    // Mount
    useEffect(() => {
        setInnerDivRect(innerDiv.current?.getBoundingClientRect());
    }, []);

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
                onClick={() => { if (!isOpen) toggleOpen(!isOpen) }}
                className={`${isOpen ? styles.projectsContainerOpen : styles.projectsContainer}`}
                style={{
                    cursor: isOpen ? 'unset' : 'pointer',
                }}
            >

                {/* PREVIEW IMAGE */}
                <div className={styles.projectPreviewImgContainer}>
                    <JdImg
                        srcSet={props.image}
                        className={styles.projectPreviewImg}
                    />
                </div>

                {/* CONTENT */}
                <div className={styles.projectContent}>


                    {/* CLOSE */}
                    {isOpen &&
                        <motion.div
                            onClick={() => setIsOpen(false)}
                            className={styles.projectClose}
                            initial={{ top: -100 }}
                            animate={{ top: 12 }}
                            transition={jdAniUtils.springTransition}
                        >
                            <Close />
                        </motion.div>
                    }


                    {/* TITLE */}
                    <h2 className={isOpen ? styles.projectHeaderOpen : styles.projectHeader}>{props.title}</h2>

                    {/* DESCRIPTION */}
                    <p className={isOpen ? '' : styles.projectDesc}>{props.desc}</p>

                    {/* COMPANY HEADEAR */}
                    {isOpen &&
                        <h2>{jdStringUtils.company}</h2>
                    }

                    {/* COMPANY */}
                    <JdXpItem
                        name={props.company.name}
                        companyName={props.company.companyName}
                        imgSrc={props.company.imgSrc}
                        icon={props.company.icon}
                        xp={props.company.xp}
                        xpPercentage={props.company.xpPercentage}
                    />

                    {/* SKILLS HEADEAR */}
                    {isOpen &&
                        <h2>{jdStringUtils.skillsUsed}</h2>
                    }

                    {/* SKILLS */}
                    <div className={styles.projectSkills}>
                        {
                            isOpen ?
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
                    {isOpen && props.component}

                </div>
            </motion.div>
        </div>
    )
}