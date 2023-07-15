import { motion } from 'framer-motion';
import styles from './projectSubHeaderStyles.module.scss';
import jdAniUtils from '../../utils/jdAniUtils';

export interface IJdProjectSubHeaderProps {
    icon: React.JSX.Element | string;
    name: React.JSX.Element | string;
}

export function JdProjectSubHeader(props: IJdProjectSubHeaderProps): React.JSX.Element {
    return (
        <motion.div
            {...jdAniUtils.aniElementMount()}
            className={styles.sectionHeader}
        >
            {/* <h2 className={styles.sectionIcon}>{props.icon}</h2> */}
            <h2>{props.name}</h2>
        </motion.div>
    )
}