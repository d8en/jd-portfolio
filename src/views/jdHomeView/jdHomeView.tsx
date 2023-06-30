import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';

export function JdHomeView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.homeContainer }}>

            {/* TITLE */}
            <div className={styles.homeHeader}>
                <h1>Jeff Dayton</h1>
                <p>👋 Hey there! I build apps with amazing people. Checkout my projects!</p>
            </div>

        </JdViewWrapper>
    );
}