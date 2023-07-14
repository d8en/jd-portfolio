import styles from './contactStyles.module.scss';
import { ReactComponent as ContactIcon } from '../../assets/svg/icons/mailOpen.svg';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import jdContactManager from '../../managers/jdContactManager';
import { observer } from 'mobx-react-lite';

export const JdContact = observer(() => {
    return (
        <motion.div
            layout
            initial={{ right: -90, opacity: 0 }}
            animate={{ right: 24, opacity: 1 }}
            transition={{ ...jdAniUtils.springTransitionExtra, delay: 2 }}
            className={styles.contactWrapper}
            onClick={() => jdContactManager.setStateAsync({ isOpen: !jdContactManager.store.isOpen })}
        >
            <div
                className={styles.contactContainer}
            >

                {/* TEXT */}
                <span>hit me up!</span>

                {/* ICON */}
                <ContactIcon style={{ marginBottom: 3 }} />
            </div>
        </motion.div>
    )
});