import { useState } from "react";
import styles from './imgStyles.module.scss';
import { JdClose } from "../jdClose/jdClose";

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const toggleLoader = (newIsLoading: boolean): void => {
        setTimeout(() => {
            setIsLoading(newIsLoading);
        }, newIsLoading === false ? 350 : 0);
    }

    // Open/close fullscreen
    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <img
                onLoad={() => toggleLoader(false)}
                onClick={onClick}
                {...props}
            />

            {isLoading &&
                <p style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }}>Loading...</p>
            }

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