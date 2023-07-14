import styles from './inputStyles.module.scss';
import { ReactComponent as ExIcon } from '../../assets/svg/icons/close.svg';
import { useState } from 'react';

export interface IJdInputProps {
    id: string;
    placeholder: string;
    handleUpdate: (input: string) => void | Promise<void>;
    value: string;
    errorTxt?: string;
}

export function JdInput(props: IJdInputProps): React.JSX.Element {

    const [hasTyped, setHasTyped] = useState<boolean>(false);

    return (
        <div className={styles.mainContainer}>

            {/* INPUT */}
            <input
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!hasTyped) setHasTyped(true);
                    props.handleUpdate(e.target.value);
                }}
            />

            {/* ERROR */}
            {props.errorTxt && hasTyped &&
                <p className={styles.errorText}>{props.errorTxt}</p>
            }

            {/* CLEAR */}
            <div className={styles.closeBtnContainer}>
                <button
                    className={styles.closeBtn}
                    onClick={(e) => { e.preventDefault(); props.handleUpdate('') }}
                >
                    <ExIcon style={{ height: 12, width: 12 }} />
                </button>
            </div>

        </div>
    )
}