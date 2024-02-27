import React, { useEffect, useRef } from 'react'

import { Button, Collapse, Divider, Typography, useTheme } from '@mui/material'
import { Scrollbar } from 'react-scrollbars-custom'
import TechStackPanel from './components/TechStackPanel'
import FooterContactBadge from './components/FooterContactBadge'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FrontScreen from './components/FrontScreen'


export default function Home() {
  const theme = useTheme()



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
        <FrontScreen />
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
