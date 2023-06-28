import { JdImg } from '../jdImg/jdImg';
import styles from './xpItemStyles.module.scss';

export interface IJdXpItemProps {
    name: string;
    icon?: React.JSX.Element;
    imgSrc?: string;
    xp: number;
    xpPercentage: number;
}

export function JdXpItem(props: React.PropsWithChildren<IJdXpItemProps>): React.JSX.Element {
    return (
        <div className={styles.xpContainer}>

            {/* FIRST COLUMN  */}
            <div className={styles.xpColumn}>

                {/* ICON */}
                <div className={styles.xpIcon}>
                    {props.icon ?
                        props.icon
                        :
                        props.imgSrc ?
                            <JdImg
                                srcSet={props.imgSrc}
                                className={styles.xpImage}
                            />
                            :
                            undefined
                    }
                </div>

                {/* CONNECTOR */}
                <div className={styles.xpConnector} />
            </div>

            {/* SECOND COLUMN */}
            <div className={styles.xpColumn}>

                {/* FIRST ROW */}
                <div className={styles.xpRow}>

                    {/* TITLE */}
                    <h2 className={styles.xpHeader}>{props.name}</h2>

                    {/* XP BAR */}
                    <div className={styles.xpTotal}>

                        {/* XP TEXT */}
                        <p className={styles.xpText}>{props.xp} years</p>

                        {/* BAR */}
                        <div className={styles.xpBar} style={{ width: `${(props.xpPercentage / 1) * 100}%` }} />
                    </div>


                </div>

                {/* CHILDREN */}
                {props.children}
            </div>

        </div>
    )
}