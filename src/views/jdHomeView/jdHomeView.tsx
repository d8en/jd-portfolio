import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';

export function JdHomeView(): React.JSX.Element {
    return (
        <JdViewWrapper removeHeader>

            {/* H1 */}
            <div className={styles.homeContainer}>
                <h1>Jeff Dayton</h1>
                <p>👋 Good thing I don't write taglines for a living, checkout my portfolio instead.</p>
            </div>

        </JdViewWrapper>
    );
}