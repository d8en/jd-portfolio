import { Outlet } from 'react-router-dom';
import '../../styles/_index.scss';
import styles from './appViewStyles.module.scss';
import { JdNav } from '../../components/jdNav/jdNav';
import { JdHeader } from '../../components/jdHeader/jdHeader';

export function JdAppView(): React.JSX.Element {
    return (
        <div className={styles.appContainer}>

            {/* HEADER */}
            {/* <JdHeader /> */}

            {/* ALL ROUTES */}
            <Outlet />

            {/* NAV BAR */}
            <JdNav />

        </div>
    );
}