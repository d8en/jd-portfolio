import styles from './inputStyles.module.scss';
import ExIcon from '../../assets/svg/icons/close.svg?react';
import { HTMLInputTypeAttribute, useState } from 'react';
import { JdAutoCompleteType } from '../../models/JdAutoCompleteType';

export interface IJdInputProps {
    id: string;
    placeholder: string;
    handleUpdate: (input: string) => void | Promise<void>;
    value: string;
    errorTxt?: string;
    type: HTMLInputTypeAttribute;
    autoComplete: JdAutoCompleteType;
}

export function JdInput(props: IJdInputProps): React.JSX.Element {
    const [hasTyped, setHasTyped] = useState<boolean>(false);

    return (
        <div className={styles.mainContainer}>
            {/* INPUT */}
            <input
                type={props.type}
                id={props.id}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!hasTyped) setHasTyped(true);
                    props.handleUpdate(e.target.value);
                }}
            />

            {/* ERROR */}
            {props.errorTxt && hasTyped && <p className={styles.errorText}>{props.errorTxt}</p>}

            {/* CLEAR */}
            <div className={styles.closeBtnContainer}>
                <div
                    className={styles.closeBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        props.handleUpdate('');
                    }}
                >
                    <ExIcon
                        style={{ height: 12, width: 12 }}
                        className={styles.closeIcon}
                    />
                </div>
            </div>
        </div>
    );
}
