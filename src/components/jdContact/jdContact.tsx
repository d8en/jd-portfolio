import styles from './contactStyles.module.scss';
import ContactIcon from '../../assets/svg/icons/mailOpen.svg?react';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import jdContactManager from '../../managers/jdContactManager';
import { observer } from 'mobx-react-lite';
import { JdFloatingHelp } from '../jdFloatingHelp/jdFloatingHelp';

export const JdContact = observer(() => {
    return (
        <motion.div
            initial={{ right: -90, opacity: 0 }}
            animate={{ right: 24, opacity: 1 }}
            transition={{ ...jdAniUtils.springTransitionExtra, delay: 2 }}
            className={`${styles.contactWrapper} ${jdContactManager.store.isFloatingShowing && !jdContactManager.store.hasFloatShown ? styles.contactPulse : ''}`}
            onClick={() => jdContactManager.setStateAsync({ isOpen: !jdContactManager.store.isOpen, isFloatingShowing: false, hasFloatShown: true })}
        >
            <div className={styles.contactContainer}>
                {/* TEXT */}
                <span>Reach out!</span>

                {/* ICON */}
                <ContactIcon
                    style={{ marginBottom: 3 }}
                    className={styles.contactIcon}
                />
            </div>

            {/* FLOATING HELP */}
            {jdContactManager.store.isFloatingShowing && !jdContactManager.store.hasFloatShown && (
                <JdFloatingHelp
                    style={{ top: -72, right: 0 }}
                    onClose={() => {
                        jdContactManager.setStateAsync({ isFloatingShowing: false, hasFloatShown: true });
                    }}
                    text="Reach out!"
                    removeDelay
                />
            )}
        </motion.div>
    );
});
