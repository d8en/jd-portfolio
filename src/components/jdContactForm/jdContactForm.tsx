import { observer } from "mobx-react-lite";
import styles from './contactFormStyles.module.scss';
import { JdInput } from "../jdInput/jdInput";
import jdContactStore from "../../stores/jdContactStore";
import jdContactManager from "../../managers/jdContactManager";
import { AnimatePresence, motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";
import { JdClose } from "../jdClose/jdClose";
import { JdButton } from "../jdButton/jdButton";
import { useState } from "react";

export const JdContactForm = observer(() => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const onSubmit = async (e?: React.FormEvent<HTMLFormElement>): Promise<void> => {
        if (e) e.preventDefault();
        if (await jdContactManager.sendForm()) {
            setIsSuccess(true);
            return;
        }
        setIsSuccess(false);
    }

    return (
        <AnimatePresence>
            {jdContactManager.store.isOpen &&
                <motion.div
                    initial={{ bottom: '-100vh', opacity: 0 }}
                    animate={{ bottom: 0, opacity: 1 }}
                    exit={{ bottom: '-100vh', opacity: 0 }}
                    transition={jdAniUtils.baseEase}
                    className={styles.contactFormContainer}
                >

                    {/* CLOSE */}
                    <JdClose
                        onClick={() => jdContactManager.setStateAsync({ isOpen: false })}
                        isBottom
                    />

                    <div className={styles.contactContent}>

                        {/* HEADLINE */}
                        <h1>Let's talk!</h1>
                        <p>I'm looking for fulltime employment but also open to contract gigs.</p>
                        <p>Let me know what you're thinkin' and I'll reach out to setup a meeting</p>

                        <form
                            className={styles.contactForm}
                            onSubmit={onSubmit}
                        >

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

                            {jdContactManager.store.isDisabled &&
                                <motion.p
                                    {...jdAniUtils.getMoveUp()}
                                    className={styles.contactRequiredText}>All fields are required.
                                </motion.p>
                            }

                            <JdButton
                                id='sendIt'
                                isDisabled={jdContactManager.store.isDisabled || isSuccess}
                                text={isSuccess ? 'Message sent!' : 'Send it!'}
                                onClick={() => { }}
                                style={{ marginTop: 24 }}
                            />


                        </form>


                    </div>
                </motion.div>
            }
        </AnimatePresence>
    );
})