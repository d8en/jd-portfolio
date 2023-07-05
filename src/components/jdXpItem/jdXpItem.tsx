import { JdImg } from '../jdImg/jdImg';
import styles from './xpItemStyles.module.scss';

export interface IJdXpItemProps {
    name: string;
    companyName?: string;
    icon?: React.JSX.Element;
    imgSrc?: string;
    xp: number;
    xpPercentage: number;
}

export function JdXpItem(props: React.PropsWithChildren<IJdXpItemProps>): React.JSX.Element {
    return (
        <div className={styles.xpContainer} style={!props.children ? { display: 'flex', gap: 12 } : undefined}>

            {/* FIRST COLUMN  */}
            <div className={styles.xpColumn} style={!props.children ? { gap: 8 } : undefined}>

                {/* ICON */}
                <div className={`${styles.xpIcon} ${props.children ? '' : styles.xpIconSmaller}`}>
                    {props.icon ?
                        props.icon
                        :
                        props.imgSrc ?
                            <JdImg
                                srcSet={props.imgSrc}
                                className={`${styles.xpImage} ${props.children ? '' : styles.xpIconSmaller}`}
                            />
                            :
                            undefined
                    }
                </div>

                {/* CONNECTOR */}
                {props.children &&
                    <div className={styles.xpConnector} />
                }
            </div>

            {/* SECOND COLUMN */}
            <div className={styles.xpColumn} style={!props.children ? { gap: 0 } : undefined}>

                {/* FIRST ROW */}
                <div className={styles.xpRow}>

                    {/* TITLE */}
                    <h2 className={`${styles.xpHeader} ${!props.children ? styles.xpCoName : ''}`}>{props.companyName ?? props.name}</h2>

                    {/* XP BAR */}
                    {props.children &&
                        <div className={styles.xpTotal}>

                            {/* XP TEXT */}
                            <p className={styles.xpText}>{props.xp} year{props.xp !== 1 ? 's' : ''}</p>

                            {/* BAR */}
                            <div className={styles.xpBar} style={{ width: `${(props.xpPercentage / 1) * 100}%` }} />
                        </div>
                    }

                </div>

                {/* CHILDREN */}
                {props.children}

            </div>

        </div>
    )
}