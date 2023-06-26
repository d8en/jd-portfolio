import { IJdRouteObj } from "../../utils/jdRoutes";
import styles from './navItemStyles.module.scss';

export function JdNavItem(props: IJdRouteObj): React.JSX.Element {
    return (
        <div className={styles.navItemContainer}>
            {props.icon}
            <p className={styles.navItemText}>{props.name}</p>
        </div>
    )
}