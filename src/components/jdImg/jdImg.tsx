import { useState } from "react"
import styles from './imgStyles.module.scss';

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <img onClick={onClick} {...props} style={{ cursor: 'pointer' }} />

            {/* OPENED */}
            {isFullscreen &&
                <div
                    className={styles.fullscreenContainer}
                    onClick={onClick}
                >
                    <img
                        {...props}
                        className={`${props.className} ${styles.imageFullscreen}`} />
                </div>
            }
        </>
    )
}