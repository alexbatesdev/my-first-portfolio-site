import React, { useState, useRef, useEffect } from 'react';
import HexBackground from './HexBackground';

const MouseFollowEffect = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });
    const captureWindowRef = useRef(null);
    const [isGlowing, setIsGlowing] = useState(true);

    const handleMouseMove = (e) => {
        if (captureWindowRef.current) {
            const boundingRect = captureWindowRef.current.getBoundingClientRect();
            // Calculate mouse position relative to the container
            const x = e.pageX - boundingRect.left - window.scrollX;
            const y = e.pageY - boundingRect.top - window.scrollY;
            targetPosition.current = { x, y };
        }
    };

    useEffect(() => {
        const handleMove = () => {
            // Calculate the difference between the current and target positions
            const dx = targetPosition.current.x - mousePosition.x;
            const dy = targetPosition.current.y - mousePosition.y;

            // Set the new position, slowing down the movement as it approaches the cursor
            setMousePosition((prevPosition) => ({
                x: prevPosition.x + dx * 0.07, // Adjust the multiplier to control the speed
                y: prevPosition.y + dy * 0.07,
            }));
        };

        // Update the position at a regular interval
        const intervalId = setInterval(handleMove, 10); // Adjust the interval to control the smoothness

        return () => clearInterval(intervalId);
    }, [mousePosition]);

    const followStyle = {
        position: 'absolute',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        width: isGlowing ? '150px' : '0px',
        height: isGlowing ? '150px' : '0px',
        borderRadius: '50%',
        filter: 'blur(40px)',
        transition: 'width 0.5s, height 0.5s',
        animation: 'rotatoe 5s linear infinite',
    };

    return (
        <div
            ref={captureWindowRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={(event) => {
                setIsGlowing(true)
                setMousePosition({ x: event.pageX, y: event.pageY })
            }}
            onMouseLeave={() => setIsGlowing(false)}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
            {children}
            <HexBackground style={followStyle}>
            </HexBackground>
        </div>
    );
};

export default MouseFollowEffect;
