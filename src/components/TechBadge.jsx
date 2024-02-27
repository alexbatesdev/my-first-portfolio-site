import { Typography, useTheme } from '@mui/material';
import React from 'react';

const TechBadge = ({ label, icon, style, source, source_name, highlight_color }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = React.useState(false);
    const [isLabelHovered, setIsLabelHovered] = React.useState(false);
    let elementStyle = {
        backgroundColor: highlight_color ? highlight_color : (isHovered ? "#a5a5a577" : "#a5a5a533"),
        width: "80px",
        height: "80px",
        padding: '1rem',
        borderRadius: "10px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        outline: source ? "2px solid yellow" : "none",
        boxShadow: highlight_color ? (source ? "0px 0px 17px 0px yellow" : "0px 0px 10px -3px black") : (source ? "0px 0px 10px 0px yellow" : "0px 0px 7px -3px black"),
        position: "relative",
        transition: "all 0.3s ease-in-out",
        transform: highlight_color ? "scale(1.1)" : (isHovered ? "scale(1.1)" : "scale(1)"),
    };

    elementStyle = { ...elementStyle, ...style };

    return (
        <div
            style={elementStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {source &&
                <Typography variant='subtitle'
                    onMouseEnter={() => setIsLabelHovered(true)}
                    onMouseLeave={() => setIsLabelHovered(false)}
                    style={{
                        backgroundColor: 'yellow',
                        borderRadius: "3px",
                        textWrap: "nowrap",
                        padding: '3px',
                        position: "absolute",
                        top: "-10%",
                        right: "50%",
                        transform: isHovered ? "translate(50%, -75%) scale(1.2)" : "translate(50%, 0%) scale(1)",
                        transition: "all 0.3s ease-in-out",
                        zIndex: isHovered ? 3 : 1,
                    }}>
                    <a href={source} target="_blank" rel="noreferrer" style={{
                        color: "black",
                        textDecoration: "none",
                    }}>
                        {isLabelHovered ? ("According to " + source_name) : "High Demand"}
                    </a>
                </Typography>
            }
            <img src={icon} alt={label} style={{
                width: "85%",
                aspectRatio: "1/1",
            }} />
            <Typography variant='body1' style={{
                color: theme.palette.text.primary,
                textAlign: 'center',
            }}>
                {label}
            </Typography>
        </div>
    );
};

export default TechBadge;
