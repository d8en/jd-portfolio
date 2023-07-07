import { Link, useLocation, Location } from "react-router-dom";
import { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";

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

            {isActive &&
                <motion.div
                    className={styles.navActiveBar}
                    layoutId="activeNav"
                    transition={jdAniUtils.springTransitionExtra}
                />
            }
        </Link>
    );
}