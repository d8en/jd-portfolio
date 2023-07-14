import { AnimationProps, Transition, cubicBezier } from "framer-motion";

class JdAniUtils {

    public logoDelay: number = 600;
    public taglineDelay: number = 1200;
    public mountDelay: number = (300 + this.taglineDelay) / 1000;

    public springTransition: Transition = {
        type: "spring",
        // How bouncy
        stiffness: 120,
        // Lower = faster
        mass: .5,
        // Deceleration
        damping: 10,
    }

    public springTransitionExtra: Transition = {
        type: "spring",
        // How bouncy
        stiffness: 200,
        // Lower = faster
        mass: .5,
        // Deceleration
        damping: 10,
    }

    public baseEase: Transition = {
        ease: cubicBezier(0, .5, 0, 1),
        duration: .5,
    }
    public baseEaseOut: Transition = {
        ease: cubicBezier(1, 0, 1, 0),
        duration: .5,
    }

    public longEase: Transition = {
        ease: cubicBezier(0, 1, 0, 1),
        duration: 2,
    }

    public getMoveUp(delay?: number): AnimationProps {
        return {
            initial: { translateY: 100, opacity: 0 },
            animate: { translateY: 0, opacity: 1 },
            transition: { ...this.longEase, delay }
        }
    }
}

const jdAniUtils = new JdAniUtils();
export default jdAniUtils;