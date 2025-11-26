import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MovingBorderButton = ({ 
    children, 
    onClick,
    className = "",
    containerStyle = {},
    buttonStyle = {},
    borderRadius = "1.75rem",
    duration = 3000,
    borderColor = "var(--color-accent)"
}) => {
    const pathRef = useRef(null);
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).x
    );
    const yBorder = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).y
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${yBorder}px) translateX(-50%) translateY(-50%)`;

    return (
        <div
            style={{
                position: 'relative',
                borderRadius: borderRadius,
                overflow: 'hidden',
                background: 'transparent',
                padding: '1px',
                display: 'inline-block',
                ...containerStyle
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0
                }}
                width="100%"
                height="100%"
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx="30%"
                    ry="30%"
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'inline-block',
                    transform
                }}
            >
                <div
                    style={{
                        height: '20px',
                        width: '20px',
                        opacity: 0.8,
                        background: `radial-gradient(${borderColor} 40%, transparent 60%)`
                    }}
                />
            </motion.div>
            <button
                onClick={onClick}
                className={`btn ${className}`}
                style={{
                    position: 'relative',
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                    width: '100%',
                    height: '100%',
                    ...buttonStyle
                }}
            >
                {children}
            </button>
        </div>
    );
};

export default MovingBorderButton;
