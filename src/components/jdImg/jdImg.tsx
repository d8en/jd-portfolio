import { useState } from "react"
import styles from './imgStyles.module.scss';

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const onClick = (): void => {
        console.log('fullscreen clicked');
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <img onClick={onClick} {...props} />

            {/* OPENED */}
            {isFullscreen &&
                <div
                    className={styles.imageFullScreen}
                    onClick={onClick}
                >
                    <img {...props} />
                </div>
            }
        </>
    )
}