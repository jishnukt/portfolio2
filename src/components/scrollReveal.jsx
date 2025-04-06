import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, delay = 0, x = -50, y = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x, y }}
            animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
