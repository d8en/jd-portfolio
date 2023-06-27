import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';

export function JdHomeView(): React.JSX.Element {
    return (
        <JdViewWrapper removeHeader>

            {/* H1 */}
            <div className={styles.homeContainer}>
                <h1>Jeff Dayton</h1>
                <p>👋 Hey there! I build apps with amazing people. Checkout my projects!</p>
            </div>

        </JdViewWrapper>
    );
}