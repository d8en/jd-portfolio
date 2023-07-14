import { Link, useLocation, Location } from "react-router-dom";
import jdRoutes, { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';
import { useEffect, useState } from "react";
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
        if (jdRoutes.activeRoute.name === jdRoutes.projects.name) setIsProjects(false);
    }, [location]);

    useEffect(() => {
        if (props.name === jdRoutes.projects.name && jdRoutes.activeRoute.name !== jdRoutes.projects.name) setIsProjects(true);
    }, []);

    return (
        <Link
            onClick={() => { if (isProjects) setIsProjects(false) }}
            to={props.path!}
            className={`${styles.navItemContainer} ${isActive ? styles.navItemActive : ''} ${isProjects ? styles.navItemPulse : ''}`}
        >

            {isProjects &&
                <JdFloatingHelp
                    style={{ top: -72, }}
                    onClose={() => setIsProjects(false)}
                />
            }

            {/* ICON */}
            <motion.div
                {...jdAniUtils.getMoveUp(1.5 + props.idx! / 3)}
                className={styles.navItemIcon}
            >
                {props.icon}
            </motion.div>

            {/* NAME */}
            <motion.p
                className={styles.navItemText}
                {...jdAniUtils.getMoveUp(1.7 + props.idx! / 3)}
            >
                {props.name}
            </motion.p>

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