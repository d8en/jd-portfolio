import { Link, useLocation, Location } from "react-router-dom";
import jdRoutes, { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";
import { JdFloatingHelp } from "../jdFloatingHelp/jdFloatingHelp";

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {

    // Location changes
    const [isActive, setIsActive] = useState<boolean>(false);
    const location: Location = useLocation();

    const [isProjects, setIsProjects] = useState<boolean>(false);

    useEffect(() => {
        setIsActive(props.path === location.pathname);
    }, [location]);

    useEffect(() => {
        if (props.name === jdRoutes.projects.name) setIsProjects(true);
    }, []);

    return (
        <Link
            onClick={() => { if (isProjects) setIsProjects(false) }}
            to={props.path!}
            className={`${styles.navItemContainer} ${isActive ? styles.navItemActive : ''} ${isProjects ? styles.navItemPulse : ''}`}
        >

            {isProjects &&
                <JdFloatingHelp
                    style={{ top: -80, }}
                    onClose={() => setIsProjects(false)}
                />
            }

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