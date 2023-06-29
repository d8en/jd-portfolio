import { useState } from 'react';
import { IJdProject } from '../../models/iJdProject';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdHashtag } from '../jdHashtag/jdHashtag';
import { JdImg } from '../jdImg/jdImg';
import { JdXpItem } from '../jdXpItem/jdXpItem';
import styles from './projectStyles.module.scss';
import jdStringUtils from '../../utils/jdStringUtils';

export function JdProject(props: IJdProject): React.JSX.Element {

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Open article
    const toggleOpen = (newIsOpen: boolean): void => {
        setIsOpen(newIsOpen);
    }

    return (
        <div onClick={() => { if (!isOpen) toggleOpen(!isOpen) }} className={`${styles.projectsContainer} ${isOpen ? styles.projectsContainerOpen : ''}`}>

            {/* PREVIEW IMAGE */}
            <div className={styles.projectPreviewImgContainer}>
                <JdImg
                    srcSet={props.image}
                    className={styles.projectPreviewImg}
                />


                {/* COMPANY */}
                <div className={styles.projectCompany}>
                    <JdXpItem
                        name={props.company.name}
                        companyName={props.company.companyName}
                        imgSrc={props.company.imgSrc}
                        icon={props.company.icon}
                        xp={props.company.xp}
                        xpPercentage={props.company.xpPercentage}
                    />
                </div>

            </div>

            {/* CONTENT */}
            <div className={styles.projectContent}>

                {/* TITLE */}
                <h2 className={isOpen ? '' : styles.projectHeader}>{props.title}</h2>

                {/* DESCRIPTION */}
                <p className={isOpen ? '' : styles.projectDesc}>{props.desc}</p>

                {isOpen &&
                    <h2>{jdStringUtils.emojiSKillsUsed}Skills Used</h2>
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
        </div>
    )
}