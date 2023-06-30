import { useLocation, Location } from 'react-router-dom';
import styles from './headerStyles.module.scss';
import { useEffect, useState } from 'react';
import jdRoutes from '../../utils/jdRoutes';

export function JdHeader(): React.JSX.Element {

    const [title, setTitle] = useState<string>('home');

    const location: Location = useLocation();

    useEffect(() => {
        setTitle(jdRoutes.activeRoute.name);
    }, [location]);

    return (
        <div className={styles.viewHeader}>
            <h2>{title}</h2>
        </div>

    )
}