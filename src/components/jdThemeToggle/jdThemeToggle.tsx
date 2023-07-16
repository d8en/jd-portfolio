import styles from './themeToggleStyles.module.scss';
import { ReactComponent as SunIcon } from '../../assets/svg/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/svg/icons/moon.svg';
import jdThemeManager from '../../managers/jdThemeManager';
import { observer } from 'mobx-react-lite';

export const JdThemeToggle = observer((): React.JSX.Element => {
    return (
        <div
            className={styles.themeToggleContainer}
            onClick={async () => await jdThemeManager.toggleTheme()}
            style={jdThemeManager.store.isDarkTheme ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}
        >

            {/* ICONS */}
            <div
                className={styles.themeIconContainer}
            >
                {jdThemeManager.store.isDarkTheme ?
                    <MoonIcon />
                    :
                    <SunIcon />
                }
            </div>

        </div>
    )
});