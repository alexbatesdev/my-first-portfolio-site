import React, { useMemo } from 'react';
import MouseFollowEffect from './HexGlow';
import IndexTopBar from './IndexTopBar';
import { Typography, useTheme } from '@mui/material';
import ContactBadge from './ContactBadge';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useWindowSize } from '../utils/hooks'

const FrontScreen = () => {
    const theme = useTheme();
    const [slabHover, setSlabHover] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const screenWidth = useWindowSize();
    const breakpoint = 600;

    const techCardStyle = (position, active) => {
        const alt_breakpoint = 530;
        let style = {
            position: 'absolute',
            width: active ? '80px' : '40px',
            height: active ? '80px' : '40px',
            clipPath: !active ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'polygon(0 100%, 0 0, 0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 100%)',
            transition: 'all 0.3s ease',
            color: 'white',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            visibility: screenWidth > alt_breakpoint ? 'visible' : 'hidden',
        };
        style = { ...style, ...position };
        if (active) style['backgroundColor'] = theme.palette.background.alternate;
        return style;
    }

    React.useEffect(() => {
        const cycleIds = [0, 1, 2, 3];
        let index = slabHover;
        setSlabHover(cycleIds[index]);
        const intervalId = setInterval(() => {
            if (!isHovering) {
                index = (index + 1) % cycleIds.length;
                setSlabHover(cycleIds[index]);
            }
        }, 2500);

        return () => clearInterval(intervalId);
    }, [isHovering]);

    const handleMouseEnter = (id) => {
        setIsHovering(true);
        setSlabHover(id);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            id='top'
            style={{
                backgroundColor: "#160a62",
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img src="/hero-shapes.png" alt="From fly.io" style={{
                    width: '100%',
                    height: '100%',
                    opacity: 0.8,
                    transform: 'rotate(180deg)',
                }} />
            </div>
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
            <IndexTopBar />
            <div style={{
                flexGrow: 1,
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
            }}>
                <div style={techCardStyle({
                    top: '-40%',
                    left: '30%',
                    backgroundColor: theme.palette.tertiary.main,
                    animation: 'floatBackend 5s ease-in-out infinite'
                },
                    slabHover === 1 || slabHover == 3
                )}>
                    {(slabHover === 1 || slabHover == 3) && <img src='mysql.webp' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}

                </div>
                <div style={techCardStyle({
                    top: '0%',
                    right: '-5%',
                    backgroundColor: theme.palette.tertiary.main,
                    animation: 'floatBackend 5s ease-in-out infinite'
                },
                    slabHover === 1 || slabHover == 3
                )}>
                    {(slabHover === 1 || slabHover == 3) && <img src='dotnet-logo.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    top: '-10%',
                    left: '10%',
                    backgroundColor: theme.palette.primary.main,
                    animation: 'floatFrontend 8s ease-in-out infinite',
                },
                    slabHover === 0 || slabHover == 3
                )}>
                    {(slabHover === 0 || slabHover == 3) && <img src='node-js.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    top: '-10%',
                    right: '20%',
                    backgroundColor: theme.palette.secondary.main,
                    animation: 'floatDevops 6s ease-in-out infinite',
                },
                    slabHover === 2 || slabHover == 3
                )}>
                    {(slabHover === 2 || slabHover == 3) && <img src='aws.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    bottom: '-23%',
                    left: '5%',
                    backgroundColor: theme.palette.secondary.main,
                    animation: 'floatDevops 6s ease-in-out infinite',
                },
                    slabHover === 2 || slabHover == 3
                )}>
                    {(slabHover === 2 || slabHover == 3) && <img src='docker-mark-blue.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    bottom: '-50%',
                    right: '5%',
                    backgroundColor: theme.palette.secondary.main,
                    animation: 'floatDevops 6s ease-in-out infinite',
                },
                    slabHover === 2 || slabHover == 3
                )}>
                    {(slabHover === 2 || slabHover == 3) && <img src='k8s.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    bottom: '-60%',
                    left: '20%',
                    backgroundColor: theme.palette.tertiary.main,
                    animation: 'floatBackend 5s ease-in-out infinite'
                },
                    slabHover === 1 || slabHover == 3
                )}>
                    {(slabHover === 1 || slabHover == 3) && <img src='fastapi.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    bottom: '-70%',
                    right: '30%',
                    backgroundColor: theme.palette.tertiary.main,
                    animation: 'floatBackend 5s ease-in-out infinite'
                },
                    slabHover === 1 || slabHover == 3
                )}>
                    {(slabHover === 1 || slabHover == 3) && <img src='mongodb.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    bottom: '-40%',
                    right: '50%',
                    backgroundColor: theme.palette.primary.main,
                    animation: 'floatFrontend 8s ease-in-out infinite',
                },
                    slabHover === 0 || slabHover == 3
                )}>
                    {(slabHover === 0 || slabHover == 3) && <img src='next-js.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <div style={techCardStyle({
                    top: '-45%',
                    right: '5%',
                    backgroundColor: theme.palette.primary.main,
                    animation: 'floatFrontend 8s ease-in-out infinite',
                },
                    slabHover === 0 || slabHover == 3
                )}>
                    {(slabHover === 0 || slabHover == 3) && <img src='react.svg' style={{
                        width: '80%',
                        aspectRatio: '1/1',
                    }} />}
                </div>
                <Typography variant='h1' style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    lineHeight: '5.5rem',
                    minWidth: screenWidth > breakpoint ? '550px' : '0px',
                }}>
                    <span style={{ color: theme.palette.primary.main }}>
                        Alex Bates
                    </span> <br />
                    <span style={{
                        display: slabHover == 0 ? 'inline-block' : 'none',
                    }}>
                        Front-End Developer
                    </span>
                    <span style={{
                        display: slabHover == 1 ? 'inline-block' : 'none',
                    }}>
                        Software Engineer
                    </span>
                    <span style={{
                        display: slabHover == 2 ? 'inline-block' : 'none',
                    }}>
                        DevOps Engineer
                    </span>
                    <span style={{
                        display: slabHover == 3 ? 'inline-block' : 'none',
                    }}>
                        Full-Stack Developer
                    </span>
                    <span style={{ display: 'none' }}>
                        Back-End Developer
                    </span>
                </Typography>
                <Typography variant='h6' style={{
                    color: theme.palette.text.primary,
                    minWidth: screenWidth > breakpoint ? '550px' : '0px',
                }}>
                    I am a skilled fullstack developer with experience in frontend, backend, and devops. I have a passion for learning new technologies and solving complex problems.
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ContactBadge Icon={LinkedInIcon} text='AlexBatesDev' url='https://www.linkedin.com/in/alexbatesdev/' forceStatus={false} />
                    <ContactBadge Icon={EmailIcon} text='AlexBates.Dev@gmail.com' copyOnClick forceStatus={false} />
                    <ContactBadge Icon={GitHubIcon} text='AlexBatesDev' url='https://github.com/alexbatesdev' forceStatus={false} />
                </div>
            </div>
            {screenWidth > breakpoint && (
                <div id='slab-stack' style={{
                    zIndex: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                }}>
                    <div
                        style={{
                            width: '500px',
                            animation: 'floatFrontend 6s ease-in-out infinite',
                            position: 'relative',
                            bottom: '-150px',
                            zIndex: 3,
                            clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
                        }}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={'/activeBlueSlab.png'}
                            style={{
                                width: '500px',
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 0 || slabHover == 3 ? 1 : 0,
                            }}
                        />
                        <img src={'/inactiveBlueSlab.png'}
                            style={{
                                width: '500px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 0 || slabHover == 3 ? 0 : 1,
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: '500px',
                            animation: 'floatBackend 4s ease-in-out infinite',
                            zIndex: 2,
                            position: 'relative',
                            clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
                        }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={'/activeGreenSlab.png'}
                            style={{
                                width: '500px',
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 1 || slabHover == 3 ? 1 : 0,
                            }}
                        />
                        <img src={'/inactiveBlueSlab.png'}
                            style={{
                                width: '500px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 1 || slabHover == 3 ? 0 : 1,
                            }}
                        />
                    </div>
                    <div style={{
                        width: '500px',
                        animation: 'floatDevops 5s ease-in-out infinite',
                        position: 'relative',
                        top: '-150px',
                        zIndex: 1,
                        clipPath: 'polygon(45% 0, 55% 0, 100% 45%, 100% 60%, 55% 100%, 45% 100%, 0 60%, 0 45%)',
                    }}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={'/activeRedSlab.png'}
                            style={{
                                width: '500px',
                                zIndex: 1,
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 2 || slabHover == 3 ? 1 : 0,
                            }}
                        />
                        <img src={'/inactiveBlueSlab.png'}
                            style={{
                                width: '500px',
                                zIndex: 1,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: slabHover == 2 || slabHover == 3 ? 0 : 1,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FrontScreen;
