import { JdImg } from '../jdImg/jdImg';
import styles from './xpItemStyles.module.scss';

export interface IJdXpItemProps {
    title: string;
    icon?: React.JSX.Element;
    imgSrcSet?: string;
    xp: string;
    fillAmt: number;
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
                        props.imgSrcSet ?
                            <JdImg
                                srcSet={props.imgSrcSet}
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
                    <h2>{props.title}</h2>

                    {/* XP BAR */}
                    <div className={styles.xpTotal}>

                        {/* BAR */}
                        <div className={styles.xpBar} style={{ width: `${(props.fillAmt / 1) * 100}%` }} />

                        {/* XP TEXT */}
                        <p>{props.xp}</p>
                    </div>


                </div>

                {/* CHILDREN */}
                {props.children}
            </div>

        </div>
    )
}