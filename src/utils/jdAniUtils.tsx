import { AnimationProps, Transition, cubicBezier } from 'framer-motion';

class JdAniUtils {
    public logoDelay: number = 700;
    public taglineDelay: number = 1400;
    public mountDelay: number = (300 + this.taglineDelay) / 1000;
    private easeDuration: number = 0.4;

    public springTransition: Transition = {
        type: 'spring',
        // How bouncy
        stiffness: 120,
        // Lower = faster
        mass: 0.5,
        // Deceleration
        damping: 10,
    };

    public springTransitionExtra: Transition = {
        type: 'spring',
        // How bouncy
        stiffness: 200,
        // Lower = faster
        mass: 0.5,
        // Deceleration
        damping: 10,
    };

    public baseEase: Transition = {
        ease: cubicBezier(0, 1, 0, 1),
        duration: this.easeDuration,
    };

    public baseEaseOut: Transition = {
        ease: cubicBezier(0.5, 0, 1, 0),
        duration: this.easeDuration,
    };

    public longEase: Transition = {
        ease: cubicBezier(0, 1, 0, 1),
        duration: 1,
    };

    public longEaseOut: Transition = {
        ease: cubicBezier(1, 0, 1, 0),
        duration: 1,
    };

    public longestEase: Transition = {
        ease: cubicBezier(0.5, 1, 0, 1),
        duration: 6,
    };

    public aniElementMount(delay?: number, isOut?: boolean): AnimationProps {
        return {
            initial: { translateY: isOut ? 0 : 100, opacity: 0 },
            animate: { translateY: isOut ? 100 : 0, opacity: 1 },
            transition: { ...(isOut ? this.longEaseOut : this.longEase), delay },
        };
    }

    public layoutPreserve: boolean | 'position' | 'size' | 'preserve-aspect' | undefined = 'preserve-aspect';
}

const jdAniUtils = new JdAniUtils();
export default jdAniUtils;
