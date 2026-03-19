import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlurFade({
    children,
    className,
    variant = {
        hidden: { y: 6, opacity: 0, filter: "blur(6px)" },
        visible: { y: -6, opacity: 1, filter: "blur(0px)" },
    },
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    blur = "6px",
}) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: "-50px" });
    const isInView = !inView || inViewResult;
    const defaultVariants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(2px)` },
        visible: { y: 0, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = variant || defaultVariants;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
            variants={combinedVariants}
            transition={{
                delay: 0.04 + delay,
                duration,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
