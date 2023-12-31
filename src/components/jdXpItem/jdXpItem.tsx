import { motion } from 'framer-motion';
import { JdImg } from '../jdImg/jdImg';
import styles from './xpItemStyles.module.scss';
import jdAniUtils from '../../utils/jdAniUtils';
import jdThemeManager from '../../managers/jdThemeManager';
import { observer } from 'mobx-react-lite';

export interface IJdXpItemProps {
    name: string;
    companyName?: string;
    icon?: React.JSX.Element;
    imgSrc?: string;
    xp: number;
    xpPercentage: number;
    idx: number;
    invertImageColors?: boolean;
}

export const JdXpItem = observer((props: React.PropsWithChildren<IJdXpItemProps>): React.JSX.Element => {

    return (
        <motion.div
            {...jdAniUtils.aniElementMount(props.idx / 6)}
            className={styles.xpContainer}
            style={!props.children ? { display: 'flex', gap: 12 } : undefined}
        >

            {/* FIRST COLUMN  */}
            <div className={styles.xpColumn} style={!props.children ? { gap: 8 } : undefined}>

                {/* ICON */}
                <div
                    className={`${styles.xpIcon} ${props.children ? '' : styles.xpIconSmaller}`}
                >
                    {props.icon ?
                        props.icon
                        :
                        props.imgSrc ?
                            <JdImg
                                srcSet={props.imgSrc}
                                className={`${styles.xpImage} ${props.children ? '' : styles.xpIconSmaller}`}
                                style={{ margin: 0, filter: props.invertImageColors && jdThemeManager.store.isDarkTheme ? 'invert()' : undefined }}
                                alt="Brand icon"
                            />
                            :
                            undefined
                    }
                </div>

                {/* CONNECTOR */}
                {props.children &&
                    <div className={styles.xpConnector}>
                        <motion.div
                            initial={{ top: '100%' }}
                            animate={{ top: `${108 - ((props.xpPercentage / 1) * 100)}%` }}
                            transition={jdAniUtils.longestEase}
                            className={styles.xpConnectorAmt}
                        />
                    </div>
                }
            </div>

            {/* SECOND COLUMN */}
            <div
                className={styles.xpColumn}
                style={!props.children ? { gap: 0 } : undefined}
            >

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
                            {/* <div className={styles.xpBar} style={{ width: `${(props.xpPercentage / 1) * 100}%` }} /> */}
                        </div>
                    }

                </div>

                {/* CHILDREN */}
                {props.children}

            </div>

        </motion.div>
    )
}); 