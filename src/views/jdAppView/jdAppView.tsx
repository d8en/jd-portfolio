import { Outlet } from 'react-router-dom';
import '../../styles/_index.scss';
import styles from './appViewStyles.module.scss';

export function JdAppView(): React.JSX.Element {
    return (
        <div className={styles.appContainer}>

            {/* ALL ROUTES */}
            <Outlet />

        </div>
    );
}