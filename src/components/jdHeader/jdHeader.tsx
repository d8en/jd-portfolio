import { useLocation, Location } from 'react-router-dom';
import styles from './headerStyles.module.scss';
import { useEffect, useState } from 'react';
import jdRoutes, { IJdRouteObj } from '../../utils/jdRoutes';

export function JdHeader(): React.JSX.Element {
    // State
    const [title, setTitle] = useState<string>('home');

    // Location
    const location: Location = useLocation();

    // Set page title
    useEffect(() => {
        setTitle(jdRoutes.activeRoute.name);
    }, [location]);

    // Don't show header on specified pages
    if (jdRoutes.routesToHideNav.find((route: IJdRouteObj) => route === jdRoutes.activeRoute)) return <></>;

    return (
        <div className={styles.viewHeader}>
            <h2>{title}</h2>
        </div>
    );
}
