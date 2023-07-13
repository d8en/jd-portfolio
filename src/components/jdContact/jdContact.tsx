import styles from './contactStyles.module.scss';
import { ReactComponent as ContactIcon } from '../../assets/svg/icons/mailOpen.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/icons/close.svg';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import jdContactManager from '../../managers/jdContactManager';
import { observer } from 'mobx-react-lite';

export const JdContact = observer(() => {
    return (
        <motion.div
            initial={{ bottom: -40, opacity: 0 }}
            animate={{ bottom: 95, opacity: 1 }}
            transition={{ ...jdAniUtils.baseEase, delay: 2.2 }}
            className={styles.contactContainer}
            onClick={() => jdContactManager.setStateAsync({ isOpen: !jdContactManager.store.isOpen })}
        >

            {/* ICON */}
            {jdContactManager.store.isOpen ?
                <CloseIcon />
                :
                <ContactIcon style={{ marginBottom: 3 }} />
            }

            {/* TEXT */}
            <span>contact</span>
        </motion.div>
    )
});