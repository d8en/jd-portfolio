import styles from './buttonStyles.module.scss';

export interface IJdButtonProps {
    id: string;
    text: string;
    isDisabled: boolean;
    onClick: () => void | Promise<void>;
}

export function JdButton(props: IJdButtonProps): React.JSX.Element {
    return (
        <button
            id={props.id}
            className={styles.buttonContainer}
            onClick={async () => await props.onClick()}
            disabled={props.isDisabled}
        >
            {props.text}
        </button>
    )
}