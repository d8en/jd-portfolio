import { Link } from "react-router-dom";
import { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {
    return (
        <Link to={props.path!} className={styles.navItemContainer}>

            {/* ICON */}
            <div className={styles.navItemIcon}>
                {props.icon}
            </div>

            {/* NAME */}
            <p className={styles.navItemText}>{props.name}</p>
        </Link>
    );
}