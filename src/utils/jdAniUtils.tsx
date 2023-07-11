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
        }
    }

    public get springTransitionExtra(): Transition {
        return {
            type: "spring",
            // How bouncy
            stiffness: 200,
            // Lower = faster
            mass: .5,
            // Deceleration
            damping: 10,
        }
    }

    public get baseEase(): Transition {
        return {
            ease: cubicBezier(.5, 1, 0, 1),
            duration: .375,
        }
    }
}

const jdAniUtils = new JdAniUtils();
export default jdAniUtils;