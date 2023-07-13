import { observer } from "mobx-react-lite";
import styles from './contactFormStyles.module.scss';
import { JdInput } from "../jdInput/jdInput";
import jdContactStore from "../../stores/jdContactStore";
import jdContactManager from "../../managers/jdContactManager";

export const JdContactForm = observer(() => {
    return (
        <div className={styles.contactFormContainer}>

            <div className={styles.contactContent}>

                {/* HEADLINE */}
                <h1>Let's talk!</h1>
                <p>I'm looking for fulltime employment but also open to contract gigs. Tell me what you're up to!</p>

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

                    {/* MESSAGE */}
                    <JdInput
                        id="message"
                        value={jdContactStore.contactInfo.message}
                        placeholder="What would you like to talk about?"
                        handleUpdate={(value: string) => jdContactManager.setContactProps({ message: value })}
                    />

                </form>

            </div>
        </div>
    );
})