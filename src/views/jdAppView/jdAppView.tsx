import { Outlet } from 'react-router-dom';
import '../../styles/_index.scss';
import styles from './appViewStyles.module.scss';
import { JdNav } from '../../components/jdNav/jdNav';
import { JdThemeToggle } from '../../components/jdThemeToggle/jdThemeToggle';
import { useEffect } from 'react';
import jdThemeManager from '../../managers/jdThemeManager';

export function JdAppView(): React.JSX.Element {

    // Mount
    useEffect(() => {
        setTimeout(() => {
            jdThemeManager.setTheme();
        }, 100);
    }, []);

    return (
        <div className={styles.appContainer}>

            {/* THEME TOGGLE */}
            <JdThemeToggle />

            {/* ALL ROUTES */}
            <Outlet />

            {/* NAV BAR */}
            <JdNav />


        </div>
    );
}