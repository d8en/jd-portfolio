import jdRoutes, { IJdRouteObj } from '../../utils/jdRoutes';
import { JdNavItem } from '../jdNavItem/jdNavItem';
import styles from './navStyles.module.scss';

export function JdNav(): React.JSX.Element {
    return (
        <div className={styles.navContainer}>
            {jdRoutes.visibleRoutes.map((route: IJdRouteObj) => {
                return (
                    <JdNavItem {...route} />
                )
            })}
        </div>
    )
}