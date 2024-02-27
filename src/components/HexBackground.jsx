// AI: Start of HexBackground React component

import React, { useEffect, useRef } from 'react';
import './hexBackground.css';

const HexBackground = ({ children, style }) => {
    const ref = useRef(null);

    const syncBackgrounds = () => {
        const backgroundWidth = 300;
        const backgroundHeight = 280;
        const element = ref.current;
        if (element) {
            const elementRect = element.getBoundingClientRect();
            element.style.backgroundPositionX = `-${elementRect.x}px`;
            element.style.backgroundPositionY = `-${elementRect.y}px`;
            element.style.setProperty("--background-size", `${backgroundWidth}px ${backgroundHeight}px`);
            element.style.setProperty("--starting-position", `${elementRect.x}px ${elementRect.y}px`);
            element.style.setProperty("--ending-position", `${elementRect.x + backgroundWidth}px ${elementRect.y + backgroundHeight}px`);
            element.style.animation = "background-scroll 15s linear infinite";
        }
    };

    useEffect(() => {
        syncBackgrounds(); // Initial sync
        window.addEventListener("resize", syncBackgrounds); // Sync on resize

        return () => window.removeEventListener("resize", syncBackgrounds); // Cleanup
    }, []);

    return <div ref={ref} className="hexBackground" style={style}>{children}</div>;
};

export default HexBackground;

// AI: End of HexBackground React component
