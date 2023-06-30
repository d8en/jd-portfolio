import styles from './vimeoPlayerStyles.module.scss';

export interface IJdVimeoPlayerProps {
    src: string;
    style?: React.CSSProperties;
    className?: string;
}

export function JdVimeoPlayer(props: IJdVimeoPlayerProps): React.JSX.Element {
    return (
        <iframe
            src={props.src}
            width="100%"
            // height="1408"
            allow="fullscreen;"
            allowFullScreen
            title="Returns App Pilot"
            className={`${styles.playerContainer} ${props.className}`}
            style={props.style}
        />
    )
}