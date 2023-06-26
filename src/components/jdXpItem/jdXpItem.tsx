import styles from './xpItemStyles.module.scss';

export interface IJdXpItemProps {
    title: string;
    icon: React.JSX.Element;
    xp: string;
    fillAmt: number;
}

export function JdXpItem(props: IJdXpItemProps): React.JSX.Element {
    return (
        <div className={styles.xpItemContainer}>

            {/* FIRST COLUMN  */}
            <div className={styles.xpColumn}>

                {/* ICON */}
                <div className={styles.xpIcon}>
                    {props.icon}
                </div>

                {/* CONNECTOR */}
                <div className={styles.xpConnector} />
            </div>

            {/* SECOND COLUMN */}
            <div className={styles.xpColumn}>
                <h2>{props.title}</h2>
            </div>

        </div>
    )
}