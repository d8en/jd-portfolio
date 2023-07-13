import styles from './contactStyles.module.scss';
import { ReactComponent as ContactIcon } from '../../assets/svg/icons/mailOpen.svg';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';

export function JdContact(): React.JSX.Element {
    return (
        <motion.div
            initial={{ bottom: -40, opacity: 0 }}
            animate={{ bottom: 'calc(100% + 24px)', opacity: 1 }}
            transition={{ ...jdAniUtils.baseEase, delay: 3 }}
            className={styles.contactContainer}
        >

            {/* ICON */}
            <ContactIcon style={{ marginBottom: 3 }} />

            {/* TEXT */}
            <span>contact</span>
        </motion.div>
    )
}