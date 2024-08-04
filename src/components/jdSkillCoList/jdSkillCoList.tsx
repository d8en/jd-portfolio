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
                const { component, ...props } = skillCo;
                return (
                    <JdXpItem
                        idx={idx}
                        key={skillCo.name}
                        {...props}
                    >
                        {component}
                    </JdXpItem>
                );
            })}
        </div>
    );
}
