// This code was written by an AI assistant
import React, { useState, useEffect } from 'react';
import { useTheme, Typography } from '@mui/material';
import ContactBadge from './ContactBadge';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Custom hook for detecting window size
function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
}

const IndexTopBar = () => {
    const theme = useTheme();
    const screenWidth = useWindowSize();
    const breakpoint = 600; // Define your breakpoint for mobile screens

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0rem 2rem 1rem 2rem',
            width: 'calc(100% - 4rem)',
            height: '60px',
            position: 'fixed',
            top: 0,
            zIndex: 100,
            boxShadow: 'inset 0px 60px 40px -20px rgba(0,0,0,0.5)',
        }}>
            <div>
                <Typography variant='h4' style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    marginLeft: '1rem',
                    textWrap: 'nowrap',
                }}>
                    Alex Bates
                </Typography>
            </div>
            {screenWidth > breakpoint && (
                <div id="conditional" style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: theme.palette.text.primary,
                    gap: '2rem',
                }}>
                    <Typography variant='body2'
                        onClick={() => window.location.href = "#About"}
                        sx={{
                            color: theme.palette.text.primary,
                            cursor: 'pointer',
                            transition: '0.2s ease-in-out',
                            "&:hover": {
                                color: theme.palette.primary.main
                            }
                        }}>
                        About
                    </Typography>
                    <Typography variant='body2'
                        onClick={() => window.location.href = "#TechStack"}
                        sx={{
                            color: theme.palette.text.primary,
                            cursor: 'pointer',
                            transition: '0.2s ease-in-out',
                            "&:hover": {
                                color: theme.palette.primary.main
                            }
                        }}>
                        Skills
                    </Typography>
                    <Typography variant='body2'
                        onClick={() => window.location.href = "#Projects"}
                        sx={{
                            color: theme.palette.text.primary,
                            cursor: 'pointer',
                            transition: '0.2s ease-in-out',
                            "&:hover": {
                                color: theme.palette.primary.main
                            }
                        }}>
                        Projects
                    </Typography>
                </div>
            )}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <ContactBadge Icon={EmailIcon} text='AlexBates.Dev@gmail.com' copyOnClick forceStatus={screenWidth > breakpoint ? null : false} />
                <ContactBadge Icon={LinkedInIcon} text='AlexBatesDev' url='https://www.linkedin.com/in/alexbatesdev/' forceStatus={screenWidth > breakpoint ? null : false} />
                <ContactBadge Icon={GitHubIcon} text='AlexBatesDev' url='https://github.com/alexbatesdev' forceStatus={screenWidth > breakpoint ? null : false} />
            </div>
        </div>
    );
}

export default IndexTopBar;
// This code was written by an AI assistant