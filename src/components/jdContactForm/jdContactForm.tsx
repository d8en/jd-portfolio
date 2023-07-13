import { observer } from "mobx-react-lite";
import styles from './contactFormStyles.module.scss';
import { JdInput } from "../jdInput/jdInput";
import jdContactStore from "../../stores/jdContactStore";
import jdContactManager from "../../managers/jdContactManager";

export const JdContactForm = observer(() => {
    return (
        <div className={styles.contactFormContainer}>

            <form className={styles.contactForm}>


                {/* ROW */}
                <div className={styles.contactRow}>

                    {/* FIRST NAME */}
                    <JdInput
                        id="firstName"
                        value={jdContactStore.contactInfo.firstName}
                        placeholder="First name"
                        handleUpdate={(value: string) => jdContactManager.setContactProps({ firstName: value })}
                    />

                    {/* LAST NAME */}
                    <JdInput
                        id="lastName"
                        value={jdContactStore.contactInfo.lastName}
                        placeholder="Last name"
                        handleUpdate={(value: string) => jdContactManager.setContactProps({ lastName: value })}
                    />
                </div>

                {/* EMAIL */}
                <JdInput
                    id="email"
                    value={jdContactStore.contactInfo.email}
                    placeholder="Email"
                    handleUpdate={(value: string) => jdContactManager.setContactProps({ email: value })}
                />

            </form>
        </div>
    );
})