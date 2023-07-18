import { observer } from "mobx-react-lite";
import styles from './contactFormStyles.module.scss';
import { JdInput } from "../jdInput/jdInput";
import jdContactStore from "../../stores/jdContactStore";
import jdContactManager from "../../managers/jdContactManager";
import { AnimatePresence, motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";
import { JdClose } from "../jdClose/jdClose";
import { JdButton } from "../jdButton/jdButton";
import { JdAutoCompleteType } from "../../models/JdAutoCompleteType";
import { useEffect } from "react";
import { ReactComponent as LinkedInIcon } from '../../assets/svg/brands/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/svg/brands/github.svg';

export const JdContactForm = observer(() => {

    // Effect for showing contact form
    useEffect(() => {
        if (jdContactManager.store.isFloatingShowing) jdContactManager.setStateAsync({ hasFloatShown: true });
    }, [jdContactManager.store.isOpen]);


    // Submit form
    const onSubmit = async (e?: React.FormEvent<HTMLFormElement>): Promise<void> => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        jdContactManager.sendForm();
        await jdContactManager.setStateAsync({ isSuccess: true });
        setTimeout(async () => {
            await jdContactManager.setStateAsync({ isOpen: false }, true);
            await jdContactManager.resetForm();
        }, 200);
    }

    return (
        <AnimatePresence>
            {jdContactManager.store.isOpen &&
                <motion.div
                    exit={{ translateY: 40, opacity: 0, transition: jdAniUtils.baseEaseOut }}
                    {...jdAniUtils.aniElementMount()}
                    className={styles.contactFormContainer}
                >

                    {/* CLOSE */}
                    <JdClose
                        onClick={() => jdContactManager.setStateAsync({ isOpen: false })}
                        isBottom
                    />

                    <div className={styles.contactContent}>

                        {/* HEADLINE */}
                        <h1>Reach out!</h1>
                        <p className={styles.contactFormText}>I'm open to <strong>fulltime and contract gigs</strong>, let me know what you're up to!</p>

                        <form
                            className={styles.contactForm}
                            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => await onSubmit(e)}
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        >

                            {/* ROW */}
                            <div className={styles.contactRow}>

                                {/* FIRST NAME */}
                                <JdInput
                                    type="text"
                                    id="firstName"
                                    value={jdContactStore.contactInfo.firstName}
                                    placeholder="First name"
                                    handleUpdate={(value: string) => jdContactManager.setContactProps({ firstName: value })}
                                    autoComplete={JdAutoCompleteType.firstName}
                                />

                                {/* LAST NAME */}
                                <JdInput
                                    type="text"
                                    id="lastName"
                                    value={jdContactStore.contactInfo.lastName}
                                    placeholder="Last name"
                                    handleUpdate={(value: string) => jdContactManager.setContactProps({ lastName: value })}
                                    autoComplete={JdAutoCompleteType.lastName}
                                />
                            </div>

                            {/* EMAIL */}
                            <JdInput
                                type="email"
                                id="email"
                                value={jdContactStore.contactInfo.email}
                                placeholder="Email"
                                handleUpdate={(value: string) => jdContactManager.setContactProps({ email: value })}
                                errorTxt={jdContactManager.store.isValidEmail ? '' : 'Make sure your email is valid (ex: email@site.com).'}
                                autoComplete={JdAutoCompleteType.email}
                            />

                            {/* MESSAGE */}
                            <JdInput
                                type="text"
                                id="message"
                                value={jdContactStore.contactInfo.message}
                                placeholder="What can I help you build?"
                                handleUpdate={(value: string) => jdContactManager.setContactProps({ message: value })}
                                autoComplete={JdAutoCompleteType.off}
                            />

                            <JdButton
                                type="submit"
                                id='sendIt'
                                isDisabled={jdContactManager.store.isDisabled}
                                text={
                                    jdContactManager.store.isSuccess ?
                                        'Message sent!'
                                        :
                                        jdContactManager.store.isDisabled ?
                                            'Fill out all fields above'
                                            :
                                            'Send it!'
                                }
                                onClick={async () => await onSubmit()}
                            />

                            {/* LINKEDIN / GITHUB */}
                            <div className={styles.contactLinkContainer}>
                                <LinkedInIcon className={styles.contactIcons} />
                                <GitHubIcon className={styles.contactIcons} />
                            </div>



                        </form>


                    </div>
                </motion.div>
            }
        </AnimatePresence>
    );
})