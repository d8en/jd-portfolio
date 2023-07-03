import { motion } from "framer-motion";
import styles from './closeStyles.module.scss';
import jdAniUtils from "../../utils/jdAniUtils";
import { ReactComponent as Close } from '../../assets/svg/icons/close.svg';

export interface IJdCloseProps {
    onClick: () => void | Promise<void>;
}

export function JdClose(props: IJdCloseProps): React.JSX.Element {
    return (
        <motion.div
            onClick={() => props.onClick()}
            className={styles.closeContainer}
            initial={{ top: -100 }}
            animate={{ top: 12 }}
            transition={jdAniUtils.springTransition}
        >
            <Close />
        </motion.div>
    )
}