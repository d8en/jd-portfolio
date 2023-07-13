import React from 'react';
import jdRoutes, { IJdRouteObj } from '../../utils/jdRoutes';
import { JdNavItem } from '../jdNavItem/jdNavItem';
import styles from './navStyles.module.scss';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { JdContact } from '../jdContact/jdContact';

export function JdNav(): React.JSX.Element {
    return (
        <motion.div
            {...jdAniUtils.getMoveUp(jdAniUtils.mountDelay)}
            className={styles.navContainer}
        >

            {/* ROUTES */}
            <div className={styles.navRoutes}>
                {jdRoutes.visibleRoutes.map((route: IJdRouteObj) =>
                    <JdNavItem {...route} key={route.path} />
                )}
            </div>

            {/* CONTACT */}
            <JdContact />


        </motion.div>
    );
}