import React, { useEffect, useRef } from 'react'

import { Button, Collapse, Divider, Typography, useTheme } from '@mui/material'
import { Scrollbar } from 'react-scrollbars-custom'
import TechStackPanel from './components/TechStackPanel'
import ContactBadge from './components/ContactBadge'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FrontScreen from './components/FrontScreen'
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectList from './components/ProjectList'
import HexBackground from './components/HexBackground'
import ExperienceTimeline from './components/ExperienceTimeline'
import { useWindowSize } from './utils/hooks'

export default function Home() {
  const theme = useTheme()
  const screenWidth = useWindowSize();
  const breakpoint = 700;

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
          id="About"
          style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            outline: "solid 4px " + theme.palette.background.alternate,
            outlineOffset: "4px",
            backgroundColor: theme.palette.background.alternate,
            zIndex: 1,
            padding: '1rem 0',
          }}>
          <Typography variant='h3' style={{
            color: theme.palette.text.primary,
            fontFamily: 'Teko',
            textAlign: 'center',
          }}>
            About Me
          </Typography>
          <Typography variant='h5' style={{
            color: "#e0e0ff",
            textAlign: 'justify',
            width: screenWidth > breakpoint ? "50%" : "80%",
            fontSize: '1.25rem',
            marginBottom: '1rem',
          }}>
            I am a full-stack web developer with a love for everything computer science!
            My relationship with computers started when my Dad showed me the Nintendo 64 game Ocarina of Time
            running on his computer I was 9 years old, from that day on I have been enthralled by the world of computers.
            Ever since I have been learning everything I can about them, whether its emulating games, making websites, or
            programming a raspberry pi to be a voice assistant. Outside of programming I like to play video games,
            work on my car, and go hiking and rock climbing.
          </Typography>
        </div>
        <div
          id="TechStack"
          style={{
            backgroundColor: theme.palette.background.paper,
            width: "100%",
            outline: "solid 4px " + theme.palette.background.paper,
            outlineOffset: "4px",
            zIndex: 2,
          }}>
          <TechStackPanel />
        </div>
        <div
          id="Projects"
          style={{
            backgroundColor: theme.palette.background.alternate,
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex: 1,
            // padding: '1rem 0',
          }}>
          <HexBackground>
            <Typography variant='h3' style={{
              color: theme.palette.text.primary,
              fontFamily: 'Teko',
              textAlign: 'center',
              margin: '1rem 0 0.7rem 0',
            }}>
              Projects
            </Typography>
            <ProjectList />
          </HexBackground>
        </div>
        {/* <div id="experience" style={{
          width: "80%",
        }}>
          <Typography variant='h3' style={{
            color: theme.palette.text.primary,
            fontFamily: 'Teko',
            textAlign: 'center',
            margin: '1rem 0 0.7rem 0',
          }}>
            Experience
          </Typography>
          <ExperienceTimeline />
        </div> */}
        <div
          id='Footer'
          style={{
            backgroundColor: theme.palette.background.alternate,
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
          <ContactBadge forceStatus={screenWidth > breakpoint ? true : false} Icon={GitHubIcon} text='AlexBatesDev' url='https://github.com/alexbatesdev' />
          <ContactBadge forceStatus={screenWidth > breakpoint ? true : false} Icon={LinkedInIcon} text='AlexBatesDev' url='https://www.linkedin.com/in/alexbatesdev/' />
          <ContactBadge forceStatus={screenWidth > breakpoint ? true : false} Icon={EmailIcon} text='AlexBates.Dev@gmail.com' copyOnClick />
          <Typography variant='h5' color={theme.palette.primary.main} fontFamily={"Teko"} style={{
            marginLeft: 'auto',
            marginRight: '1rem',
          }}>
            Alex Bates &copy; {new Date().getFullYear()}
          </Typography>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Bounce
        style={{
          width: "fit-content",
        }}
      />
    </>
  )
}
