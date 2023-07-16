import styles from './themeToggleStyles.module.scss';
import { ReactComponent as SunIcon } from '../../assets/svg/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/svg/icons/moon.svg';
import jdThemeManager from '../../managers/jdThemeManager';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { JdFloatingHelp } from '../jdFloatingHelp/jdFloatingHelp';

export const JdThemeToggle = observer((): React.JSX.Element => {
    return (
        <motion.div
            initial={{ left: -90, opacity: 0 }}
            animate={{ left: 20, opacity: 1 }}
            transition={{ ...jdAniUtils.springTransitionExtra, delay: 2.3 }}
            className={styles.themeToggleContainer}
            onClick={async () => await jdThemeManager.toggleTheme()}
        >

            {/* ICONS */}
            <div
                className={`${styles.themeIconContainer} ${jdThemeManager.store.isDarkTheme ? styles.themeIconContainerDark : ''}`}
            >
                {jdThemeManager.store.isDarkTheme ?
                    <MoonIcon />
                    :
                    <SunIcon />
                }
            </div>

            {/* FLOATING HELP */}
            {jdThemeManager.store.isFloatingShowing &&
                <JdFloatingHelp
                    className={styles.themeFloatingHelp}
                    onClose={() => { jdThemeManager.setStateAsync({ isFloatingShowing: false }) }}
                    text="Use dark or light mode!"
                    removeDelay
                />
            }

        </motion.div>
    )
});