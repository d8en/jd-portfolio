import { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {
    return (
        <a href="" className={styles.navItemContainer}>

            {/* ICON */}
            <div className={styles.navItemIcon}>
                {props.icon}
            </div>

            {/* NAME */}
            <p className={styles.navItemText}>{props.name}</p>
        </a>
    );
}