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

  const [slabHover, setSlabHover] = React.useState(0);

  useEffect(() => {
    console.log('slabHover:', slabHover)
  }, [slabHover])

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
              <span style={{
                display: slabHover == 0 ? 'inline-block' : 'none',
              }}>
                Full-Stack Developer
              </span>
              <span style={{
                display: slabHover == 1 ? 'inline-block' : 'none',
              }}>
                Front-End Developer
              </span>
              <span style={{
                display: slabHover == 2 ? 'inline-block' : 'none',
              }}>
                Back-End Developer
              </span>
              <span style={{
                display: slabHover == 3 ? 'inline-block' : 'none',
              }}>
                DevOps Engineer
              </span>
            </Typography>
            <Typography variant='h6' style={{
              color: theme.palette.text.primary,
              width: '550px',

            }}>
              Bro you would not believe how much I know and love to code. I be making those backends and I be making those frontends, and I be making the boats that they ship on.
            </Typography>
          </div>
          <div id='slab-stack' style={{
            zIndex: 1,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <style>
              {`
              @keyframes floatFrontend {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              
              @keyframes floatBackend {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
              
              @keyframes floatDevops {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              `}
            </style>
            <img src={slabHover === 1 ? '/activeBlueSlab.png' : '/inactiveBlueSlab.png'}
              id='frontend-slab'
              style={{
                width: '500px',
                animation: 'floatFrontend 6s ease-in-out infinite',
                position: 'relative',
                bottom: '-150px',
                zIndex: 3,
                clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
              }}
              onMouseEnter={() => setSlabHover(1)}
              onMouseLeave={() => setSlabHover(0)}
            />
            <img src={slabHover === 2 ? '/activeGreenSlab.png' : '/inactiveBlueSlab.png'}
              id='backend-slab'
              style={{
                width: '500px',
                animation: 'floatBackend 4s ease-in-out infinite',
                zIndex: 2,
                clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
              }}
              onMouseEnter={() => setSlabHover(2)}
              onMouseLeave={() => setSlabHover(0)}
            />
            <img src={slabHover === 3 ? '/activeRedSlab.png' : '/inactiveBlueSlab.png'}
              id='devops-slab'
              style={{
                width: '500px',
                animation: 'floatDevops 5s ease-in-out infinite',
                position: 'relative',
                top: '-150px',
                zIndex: 1,
                clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
              }}
              onMouseEnter={() => setSlabHover(3)}
              onMouseLeave={() => setSlabHover(0)}
            />
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
