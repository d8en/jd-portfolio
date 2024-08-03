import React from 'react';
import { IJdSkillCo } from '../../models/iJdSkillCo';
import { JdXpItem } from '../jdXpItem/jdXpItem';
import styles from './jsSkillCoListStyles.module.scss';

export interface IJdSkillCoListProps {
    list: IJdSkillCo[];
}

export function JdSkillCoList(props: IJdSkillCoListProps): React.JSX.Element {
    return (
        <div className={styles.jdSkillCoListContainer}>
            {props.list.map((skillCo: IJdSkillCo, idx: number) => {
                return (
                    <JdXpItem
                        idx={idx}
                        key={skillCo.name}
                        name={skillCo.name}
                        icon={skillCo.icon}
                        imgSrc={skillCo.imgSrc}
                        startYear={skillCo.startYear}
                        xpPercentage={skillCo.xpPercentage}
                        invertImageColors={skillCo.invertImageColors}
                    >
                        {skillCo.component}
                    </JdXpItem>
                );
            })}
        </div>
    );
}
