import styles from './themeToggleStyles.module.scss';
import { ReactComponent as SunIcon } from '../../assets/svg/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/svg/icons/moon.svg';
import jdThemeManager from '../../managers/jdThemeManager';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { JdFloatingHelp } from '../jdFloatingHelp/jdFloatingHelp';
import { useEffect } from 'react';

export const JdThemeToggle = observer((): React.JSX.Element => {

    useEffect(() => {
        setTimeout(() => {
            jdThemeManager.setStateAsync({ isFloatingShowing: true });
        }, 5000);
    }, []);

    return (
        <motion.div
            initial={{ left: -90, opacity: 0 }}
            animate={{ left: 20, opacity: 1 }}
            transition={{ ...jdAniUtils.springTransitionExtra, delay: 2.3 }}
            className={`${styles.themeToggleContainer} ${jdThemeManager.store.canShowFloat ? styles.themeContactPulse : ''}`}
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
            {jdThemeManager.store.canShowFloat &&
                <JdFloatingHelp
                    className={styles.themeFloatingHelp}
                    onClose={() => { jdThemeManager.setStateAsync({ isFloatingShowing: false, hasFloatShown: true }) }}
                    text="Use dark or light mode!"
                    removeDelay
                />
            }

        </motion.div>
    )
});