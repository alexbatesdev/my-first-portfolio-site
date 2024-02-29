import React, { useState } from 'react';
import { Collapse, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { toast } from 'react-toastify';

const ContactBadge = ({ Icon, text, url, copyOnClick = false, forceStatus = null }) => {
    const theme = useTheme();

    const [hover, setHover] = useState(false);

    const iconDivStyle = {
        minWidth: "50px",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,
        transform: hover && forceStatus === false ? "scale(1.3)" : "scale(1)",
        transition: "transform 0.2s ease-in-out"
    };

    const collapseStyle = {
        color: theme.palette.text.primary,
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };

    const handleClick = () => {
        if (copyOnClick) {
            navigator.clipboard.writeText(text);
            toast(`📋 ${text} copied to clipboard`);
        } else {
            window.open(url, "_blank")
        }
    }

    return (<>
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            style={iconDivStyle}
        >
            <Icon />
        </div>
        <Collapse
            in={forceStatus !== null ? forceStatus : hover}
            orientation='horizontal'
            style={collapseStyle}
        >
            <Typography
                variant='body2'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
                style={{
                    userSelect: "none",
                    textWrap: "nowrap",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                }}>
                {text}
            </Typography>
        </Collapse>
    </>)
}

export default ContactBadge;