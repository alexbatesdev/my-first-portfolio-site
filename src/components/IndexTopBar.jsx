import React from "react";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import FooterContactBadge from './FooterContactBadge'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const IndexTopBar = () => {
    const theme = useTheme();


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
                <style>
                    {`
          @keyframes rotate-text {
            0% { transform: rotateY(0deg); }
            25% { transform: rotateY(90deg); }
            50% { transform: rotateY(180deg); }
            75% { transform: rotateY(270deg); }
            100% { transform: rotateY(360deg); }
          }
                `}
                </style>
                <Typography variant='h4' style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    marginLeft: '1rem',

                }}>
                    Alex Bates
                </Typography>
            </div>
            <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                color: theme.palette.text.primary,
                // fontSize: '2rem',
                gap: '2rem',
            }}>
                <Typography variant='body2'
                    onClick={() => window.location.href = "/editor/3"}
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
                    onClick={() => window.location.href = "/editor/3"}
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
                    onClick={() => window.location.href = "#TechStack"}
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

                <Typography variant='body2'
                    onClick={() => window.location.href = "#Templates"}
                    sx={{
                        color: theme.palette.text.primary,
                        cursor: 'pointer',
                        transition: '0.2s ease-in-out',
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }}>
                    Experience
                </Typography>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',

            }}>
                <FooterContactBadge Icon={EmailIcon} text='AlexBates.Dev@gmail.com' copyOnClick />
                <FooterContactBadge Icon={LinkedInIcon} text='AlexBatesDev' url='https://www.linkedin.com/in/alexbatesdev/' />
                <FooterContactBadge Icon={GitHubIcon} text='Mcbuzzerr' url='https://github.com/mcbuzzerr' />
            </div>

        </div>
    )
}

export default IndexTopBar;