import { useState } from "react";
import styles from './imgStyles.module.scss';
import { JdClose } from "../jdClose/jdClose";

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // Open/close fullscreen
    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <img
                {...props}
                onClick={onClick}
            />

            {/* OPENED */}
            {isFullscreen &&
                <div
                    className={styles.fullscreenContainer}
                    onClick={onClick}
                >
                    {/* IMAGE SCALED */}
                    <img
                        {...props}
                        className={`${props.className} ${styles.imageFullscreen}`}
                        style={{ boxShadow: 'unset' }}
                    />

                    {/* CLOSE BTN */}
                    <JdClose
                        onClick={onClick}
                    />
                </div>
            }
        </>
    )
}