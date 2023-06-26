import { Outlet } from 'react-router-dom';
import '../../styles/_index.scss';
import styles from './appViewStyles.module.scss';
import { JdNav } from '../../components/JdNav/jdNav';

export function JdAppView(): React.JSX.Element {
    return (
        <div className={styles.appContainer}>

            {/* ALL ROUTES */}
            <Outlet />

            {/* NAV BAR */}
            <JdNav />

        </div>
    );
}