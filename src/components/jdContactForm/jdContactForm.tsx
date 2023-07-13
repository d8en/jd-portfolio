import { observer } from "mobx-react-lite";
import styles from './contactFormStyles.module.scss';

export const JdContactForm = observer(() => {
    return (
        <div className={styles.contactFormContainer}>
            <p>Test</p>
        </div>
    );
})