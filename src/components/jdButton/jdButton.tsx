import styles from './buttonStyles.module.scss';

export interface IJdButtonProps {
    id: string;
    text: string;
    isDisabled: boolean;
    onClick: () => void | Promise<void>;

    style?: React.CSSProperties;
    className?: string;
}

export function JdButton(props: IJdButtonProps): React.JSX.Element {
    return (
        <button
            id={props.id}
            className={`${styles.buttonContainer} ${props.className}`}
            onClick={async () => await props.onClick()}
            disabled={props.isDisabled}
            style={props.style}
        >
            {props.text}
        </button>
    )
}