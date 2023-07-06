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

export interface IJdProjecProps {
    onToggleProject: () => void | Promise<void>;
}

export const JdProject = observer((props: IJdProject & IJdProjecProps): React.JSX.Element => {

    // Sizing used for wrapper container to maintain scroll position when an article is position:absolute (opened)
    const [innerDivRect, setInnerDivRect] = useState<DOMRect>();

    // Inner div ref
    const innerDiv = useRef<HTMLDivElement | null>(null);

    const onClickProject = (): void => {
        if (!props.isOpen) props.onToggleProject()
    }

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
                    <h1 className={styles.projectHeader}>{props.title}</h1>

                    {/* DESCRIPTION */}
                    <p className={props.isOpen ? '' : styles.projectDesc}>{props.desc}</p>

                    {/* COMPANY HEADEAR */}
                    {props.isOpen &&
                        <JdProjectSubHeader {...jdStringUtils.company} />
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

                </div>
            </motion.div>
        </div>
    )
});