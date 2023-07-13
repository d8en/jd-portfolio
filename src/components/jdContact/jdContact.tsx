import styles from './contactStyles.module.scss';
import { ReactComponent as ContactIcon } from '../../assets/svg/icons/mailOpen.svg';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import jdContactManager from '../../managers/jdContactManager';

export function JdContact(): React.JSX.Element {
    return (
        <motion.div
            initial={{ bottom: -40, opacity: 0 }}
            animate={{ bottom: 95, opacity: 1 }}
            transition={{ ...jdAniUtils.baseEase, delay: 2.2 }}
            className={styles.contactContainer}
            onClick={() => jdContactManager.setStateAsync({ isOpen: true })}
        >

            {/* ICON */}
            <ContactIcon style={{ marginBottom: 3 }} />

            {/* TEXT */}
            <span>contact</span>
        </motion.div>
    )
}