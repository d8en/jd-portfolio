import { useEffect, useRef, useState } from "react"
import styles from './imgStyles.module.scss';
import { JdClose } from "../jdClose/jdClose";
import { JdSkelly } from "../jdSkelly/jdSkelly";

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const imgRefFullscreen = useRef<HTMLImageElement | null>(null);
    const [imgDims, setImgDims] = useState<DOMRect>();
    const [imgDimsFullscreen, setImgDimsFullscreen] = useState<DOMRect>();


    // Open/close fullscreen
    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    // Mount
    useEffect(() => {
        if (imgRef.current) setImgDims(imgRef.current.getBoundingClientRect());
    }, []);


    // Set skelly loader dims when fullscreen
    useEffect(() => {
        if (!isFullscreen || !imgRefFullscreen.current) return;
        setImgDimsFullscreen(imgRefFullscreen.current.getBoundingClientRect());
    }, [isFullscreen])

    return (
        <>
            <img
                ref={imgRef}
                onClick={onClick} {...props}
            />

            {/* Skelly */}
            <JdSkelly
                {...props}
                style={{
                    height: imgDims?.height,
                    width: imgDims?.width,
                }}
            />

            {/* OPENED */}
            {isFullscreen &&
                <div
                    className={styles.fullscreenContainer}
                    onClick={onClick}
                >
                    {/* IMAGE SCALED */}
                    <img
                        ref={imgRefFullscreen}
                        {...props}
                        className={`${props.className} ${styles.imageFullscreen}`}
                        style={{ boxShadow: 'unset' }}
                    />

                    {/* Skelly */}
                    <JdSkelly
                        {...props}
                        style={{
                            height: imgDimsFullscreen?.height,
                            width: imgDimsFullscreen?.width,
                        }}
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