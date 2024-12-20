import { motion } from 'framer-motion';
import styles from './closeStyles.module.scss';
import jdAniUtils from '../../utils/jdAniUtils';
import Close from '../../assets/svg/icons/close.svg?react';

export interface IJdCloseProps {
    onClick: () => void | Promise<void>;
}

export function JdClose(props: IJdCloseProps & { isBottom?: boolean }): React.JSX.Element {
    return (
        <motion.div
            onClick={() => props.onClick()}
            className={styles.closeContainer}
            initial={props.isBottom ? { bottom: -80 } : { top: -80 }}
            animate={props.isBottom ? { bottom: 24 } : { top: 12 }}
            transition={{ ...jdAniUtils.springTransition, delay: 0.4 }}
        >
            <Close />
        </motion.div>
    );
}
