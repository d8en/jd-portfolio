import styles from './contactStyles.module.scss';
import { ReactComponent as ContactIcon } from '../../assets/svg/icons/mailOpen.svg';

export function JdContact(): React.JSX.Element {
    return (
        <div className={styles.contactContainer}>
            <ContactIcon />
        </div>
    )
}