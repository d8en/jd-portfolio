import styles from './vimeoPlayerStyles.module.scss';

export interface IJdVimeoPlayerProps {
    src: string;
    style?: React.CSSProperties;
    className?: string;
}

export function JdVimeoPlayer(props: IJdVimeoPlayerProps): React.JSX.Element {
    return (
        // <div
        //     style={{ ...props.style, borderRadius: 20, backgroundColor: 'red', padding: 0, margin: 0, overflow: 'hidden' }}
        //     className={`${styles.playerContainer} ${props.className}`}
        // >
        <iframe
            src={props.src}
            allow="fullscreen;"
            allowFullScreen
            title="Returns App Pilot"
            className={`${styles.playerContainer} ${props.className}`}
            style={props.style}
        />
        // </div>
    );
}
