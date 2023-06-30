import { Transition, cubicBezier } from "framer-motion";

class JdAniUtils {

    public get springTransition(): Transition {
        return {
            type: "spring",
            // How bouncy
            stiffness: 120,
            // Lower = faster
            mass: .5,
            // Deceleration
            damping: 10,
            delay: .2,
        }
    }

    public get baseEase(): Transition {
        return {
            ease: cubicBezier(0, 1, 0, 1),
            duration: .2,
        }
    }
}

const jdAniUtils = new JdAniUtils();
export default jdAniUtils;