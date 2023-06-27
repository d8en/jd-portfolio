import styles from './xpItemStyles.module.scss';

export interface IJdXpItemProps {
    title: string;
    icon: React.JSX.Element;
    xp: string;
    fillAmt: number;
}

export function JdXpItem(props: React.PropsWithChildren<IJdXpItemProps>): React.JSX.Element {
    return (
        <div className={styles.xpItemContainer}>

            {/* FIRST COLUMN  */}
            <div className={styles.xpColumn} style={{ height: '100%' }}>

                {/* ICON */}
                <div className={styles.xpIcon}>
                    {props.icon}
                </div>

                {/* CONNECTOR */}
                <div className={styles.xpConnector} />
            </div>

            {/* SECOND COLUMN */}
            <div className={styles.xpColumn}>

                {/* TITLE */}
                <h2>{props.title}</h2>

                {/* CHILDREN */}
                {props.children}
            </div>

        </div>
    )
}