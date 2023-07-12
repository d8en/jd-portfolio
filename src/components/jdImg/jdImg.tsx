import { useState } from "react"
import styles from './imgStyles.module.scss';
import { JdClose } from "../jdClose/jdClose";
import { JdSkelly } from "../jdSkelly/jdSkelly";

export function JdImg(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <img onClick={onClick} {...props} />

            <JdSkelly {...props} />

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