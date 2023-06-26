import jdRoutes, { IJdRouteObj } from '../../utils/jdRoutes';
import { JdNavItem } from '../jdNavItem/jdNavItem';
import styles from './navStyles.module.scss';

export function JdNav(): React.JSX.Element {
    return (
        <div className={styles.navContainer}>

            {/* ROUTES */}
            <div className={styles.navRoutes}>
                {jdRoutes.visibleRoutes.map((route: IJdRouteObj) => {
                    return (
                        <JdNavItem {...route} key={route.path} isActive={jdRoutes.activeRoute === route} />
                    )
                })}
            </div>
        </div>
    );
}