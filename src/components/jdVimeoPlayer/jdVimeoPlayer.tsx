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
            allow="fullscreen;"
            allowFullScreen
            title="Returns App Pilot"
            className={`${styles.playerContainer} ${props.className}`}
            style={props.style}
        />
    )
}