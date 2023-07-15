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
        ease: cubicBezier(0, 1, 0, 1),
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
    public longEaseOut: Transition = {
        ease: cubicBezier(1, 0, 1, 0),
        duration: 2.5,
    }

    public aniElementMount(delay?: number, isOut?: boolean): AnimationProps {
        return {
            initial: { translateY: isOut ? 0 : 100, opacity: 0 },
            animate: { translateY: isOut ? 100 : 0, opacity: 1 },
            transition: { ...isOut ? this.baseEaseOut : this.longEase, delay }
        }
    }

    public layoutPreserve: boolean | "position" | "size" | "preserve-aspect" | undefined = 'preserve-aspect';
}

const jdAniUtils = new JdAniUtils();
export default jdAniUtils;