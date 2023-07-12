import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';

export function JdHomeView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.homeContainer }}>

            {/* TITLE */}
            <div className={styles.homeHeader}>
                <h1>Jeff Dayton</h1>
                <h2 className={styles.homeSubHeader}>👋 Hey! I'm a <strong>software engineer</strong> and <strong>product designer</strong> with 8 years of experience designing and building products.</h2>
                <p>Checkout my projects below!</p>
            </div>

        </JdViewWrapper>
    );
}