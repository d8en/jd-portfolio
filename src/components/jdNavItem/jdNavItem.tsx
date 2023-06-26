import { Link, useLocation, Location } from "react-router-dom";
import jdRoutes, { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';
import { useEffect, useState } from "react";

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {

    // Location changes
    const [isActive, setIsActive] = useState<boolean>(false);
    const location: Location = useLocation();
    useEffect(() => {
        setIsActive(props.path === location.pathname);
    }, [location]);

    return (
        <Link to={props.path!} className={`${styles.navItemContainer} ${isActive ? styles.navItemActive : ''}`}>

            {/* ICON */}
            <div className={styles.navItemIcon}>
                {props.icon}
            </div>

            {/* NAME */}
            <p className={styles.navItemText}>{props.name}</p>
        </Link>
    );
}