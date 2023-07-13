import styles from './inputStyles.module.scss';
import { ReactComponent as ExIcon } from '../../assets/svg/icons/close.svg';

export interface IJdInputProps {
    id: string;
    placeholder: string;
    handleUpdate: (input: string) => void | Promise<void>;
    value: string;
}

export function JdInput(props: IJdInputProps): React.JSX.Element {

    return (
        <div className={styles.mainContainer}>
            <input
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleUpdate(e.target.value)}
            />

            <button
                className={styles.closeBtn}
                onClick={(e) => { e.preventDefault(); props.handleUpdate('') }}
            >
                <ExIcon style={{ height: 12, width: 12 }} />
            </button>

        </div>
    )
}