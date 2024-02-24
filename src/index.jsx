import React, { useEffect, useRef } from 'react'

import { Button, Collapse, Divider, Typography, useTheme } from '@mui/material'
import { Scrollbar } from 'react-scrollbars-custom'
import MockEditorWindow from './components/MockEditorWindow'
import TechStackPanel from './components/TechStackPanel'
import IndexTopBar from './components/IndexTopBar'
import FooterContactBadge from './components/FooterContactBadge'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  const theme = useTheme()

  const iconDivStyle = (isHovering = false) => {
    const hoverBG = (isHovering) => isHovering ? theme.palette.background.paper : theme.palette.background.default;
    return {
      minWidth: "50px",
      height: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.text.primary,
    }
  };

  const collapseStyle = (isHovering = false) => {
    const hoverBG = (isHovering) => isHovering ? theme.palette.background.paper : theme.palette.background.default;
    return {
      color: theme.palette.text.primary,
      height: '50px',
      position: "relative",
    }
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.default,
        overflowX: 'hidden',
      }}>

        <div
          id='top'
          style={{
            // backgroundColor: "#0000FF33",
            width: "100%",
            height: "100vh",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden',
          }}>
            <style>
              {`
                @keyframes rotate {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                `}
            </style>
            <div style={{
              position: 'absolute',
              left: "calc(50% - 125vw)",
              top: "calc(50% - 125vh)",
              width: '250vw',
              height: '250vh',
              backgroundImage: 'url(/spiderweb.svg)',
              backgroundSize: '110vw',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: theme.palette.background.default,
              animation: 'rotate 120s infinite linear',
            }}></div>
          </div>
          <IndexTopBar />
          <div style={{
            maxWidth: '50%',
            zIndex: 1,
          }}>
            <Typography variant='h1' style={{
              fontFamily: 'Teko',
              color: theme.palette.text.primary,
              lineHeight: '5.5rem',
              width: '550px'
            }}>
              <span style={{ color: theme.palette.primary.main }}>
                Alex Bates
              </span> <br />
              Full-Stack Developer, <br />
              Front-End Developer, <br />
              Back-End Developer, <br />
              DevOps Engineer, <br />
            </Typography>
            <Typography variant='h6' style={{
              color: theme.palette.text.primary,
              width: '550px',

            }}>
              Bro you would not believe how much I know and love to code. I be making those backends and I be making those frontends, and I be making the boats that they ship on.
            </Typography>
          </div>
        </div>
        <div
          id="Templates"
          style={{
            width: "100%",
            height: "25vh",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            outline: "solid 4px " + theme.palette.background.alternate,
            outlineOffset: "4px",
            backgroundColor: theme.palette.background.alternate,
            zIndex: 1
          }}>
          <Typography variant='h3' style={{
            color: theme.palette.text.primary,
            fontFamily: 'Teko',
            padding: '1rem',
            marginTop: "10px",
            textAlign: 'center',
          }}>
            About
          </Typography>
        </div>
        <div
          id="TechStack"
          style={{
            backgroundColor: theme.palette.background.paper,
            width: "100%",
            height: "70vh",
            outline: "solid 4px " + theme.palette.background.paper,
            outlineOffset: "4px",
            zIndex: 2,
          }}>
          <TechStackPanel />
        </div>

        <div
          id='Footer'
          style={{
            backgroundColor: "#130925",
            width: "100%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '1rem 2rem',
          }}>
          <Typography variant='h4' color={theme.palette.text.primary} fontFamily={"Teko"} sx={{ pr: 1, ml: 2 }}>
            Contact:
          </Typography>
          <FooterContactBadge alwaysOpen Icon={GitHubIcon} text='Mcbuzzerr' url='https://github.com/mcbuzzerr' />
          <FooterContactBadge alwaysOpen Icon={LinkedInIcon} text='AlexBatesDev' url='https://www.linkedin.com/in/alexbatesdev/' />
          <FooterContactBadge alwaysOpen Icon={EmailIcon} text='AlexBates.Dev@gmail.com' copyOnClick />
          <Typography variant='h5' color={theme.palette.primary.main} fontFamily={"Teko"} style={{
            marginLeft: 'auto',
            marginRight: '1rem',
          }}>
            Alex Bates &copy; {new Date().getFullYear()}
          </Typography>
        </div>
      </div>
    </>
  )
}
