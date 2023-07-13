import { useState } from 'react';
import styles from './inputStyles.module.scss';

export interface IJdInputProps {
    id: string;
    placeholder: string;
    handleUpdate: (input: string) => void | Promise<void>;
    value: string;
}

export function JdInput(props: IJdInputProps): React.JSX.Element {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className={styles.mainContainer}>
            <input
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleUpdate(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}