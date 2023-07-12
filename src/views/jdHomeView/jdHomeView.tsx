import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';
import { ReactComponent as JdLogo } from '../../assets/svg/brands/jd.svg';

export function JdHomeView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.homeContainer }}>

            {/* TITLE */}
            <div className={styles.homeHeader}>

                {/* TITLE / LOGO */}
                <div className={styles.homeTitle}>

                    {/* LOGO */}
                    <div className={styles.homeLogo} >
                        <JdLogo />
                    </div>

                    {/* TITLE */}
                    <h1>Jeff Dayton</h1>
                </div>

                {/* HEADLINE */}
                <h2 className={styles.homeSubHeader}>👋 Hey! I'm a <strong>software engineer</strong> and <strong>product designer</strong> with 8 years of experience designing and building products.</h2>

                {/* SUB HEADER */}
                <p>Checkout my projects below!</p>
            </div>

        </JdViewWrapper>
    );
}