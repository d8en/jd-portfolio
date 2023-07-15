import { Link, useLocation, Location } from "react-router-dom";
import jdRoutes, { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";
import { JdFloatingHelp } from "../jdFloatingHelp/jdFloatingHelp";
import jdContactManager from "../../managers/jdContactManager";

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {

    // Location changes
    const [isActive, setIsActive] = useState<boolean>(false);
    const location: Location = useLocation();

    const [isProjects, setIsProjects] = useState<boolean>(false);

    const toggleProjects = (newIsProjects: boolean): void => {
        setIsProjects(newIsProjects);
        if (!newIsProjects && !jdContactManager.store.hasFloatShown) {
            setTimeout(() => {
                jdContactManager.setStateAsync({ isFloatingShowing: true, hasFloatShown: true });
            }, 6000);
        }
    }

    useEffect(() => {
        setIsActive(props.path === location.pathname);
        if (jdRoutes.activeRoute.name === jdRoutes.projects.name) toggleProjects(false);
    }, [location]);

    useEffect(() => {
        if (props.name === jdRoutes.projects.name && jdRoutes.activeRoute.name !== jdRoutes.projects.name) toggleProjects(true);
    }, []);

    return (
        <Link
            onClick={() => { if (isProjects) toggleProjects(false) }}
            to={props.path!}
            className={`${styles.navItemContainer} ${isActive ? styles.navItemActive : ''} ${isProjects ? styles.navItemPulse : ''}`}
        >

            {isProjects &&
                <JdFloatingHelp
                    style={{ top: -72, }}
                    onClose={() => toggleProjects(false)}
                    text="Checkout my projects!"
                />
            }

            {/* ICON */}
            <motion.div
                {...jdAniUtils.aniElementMount(1.5 + props.idx! / 3)}
                className={styles.navItemIcon}
            >
                {props.icon}
            </motion.div>

            {/* NAME */}
            <motion.p
                className={styles.navItemText}
                {...jdAniUtils.aniElementMount(1.7 + props.idx! / 3)}
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