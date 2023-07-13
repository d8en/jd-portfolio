import jdRoutes, { IJdRouteObj } from '../../utils/jdRoutes';
import { JdNavItem } from '../jdNavItem/jdNavItem';
import styles from './navStyles.module.scss';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { JdContact } from '../jdContact/jdContact';
import { JdContactForm } from '../jdContactForm/jdContactForm';
import { observer } from 'mobx-react-lite';

export const JdNav = observer(() => {
    return (
        <>
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

                {/* CONTACT ICON */}
                <JdContact />

            </motion.div>

            {/* CONTACT FORM */}
            <JdContactForm />

        </>
    );
});