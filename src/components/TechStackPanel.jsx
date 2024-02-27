import React, { useRef } from 'react'
import { useTheme } from '@emotion/react'
import { Typography, Link } from '@mui/material';


// React Icon
import DevicesIcon from '@mui/icons-material/Devices';
// Users Icon
import PeopleIcon from '@mui/icons-material/People';
// Fastapi Icon
import BoltIcon from '@mui/icons-material/Bolt';
// MongoDB Icon
import SpaIcon from '@mui/icons-material/Spa';
// External Resources Icon
import LanguageIcon from '@mui/icons-material/Language';

const TechStackPanel = () => {
    const theme = useTheme();


    return (<>
        <div
            style={{
                // width: "550px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: "100%",
                padding: '1rem 0',
            }}>
            <Typography variant='h2' style={{
                fontFamily: 'Teko',
                color: theme.palette.text.primary,
            }}>
                Skills
            </Typography>
            <Typography variant='h6' style={{
                color: theme.palette.text.primary,
                marginLeft: '1rem',
            }}>
                I have experience using the following technologies
            </Typography>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div style={{
                    padding: '1rem',
                }}>
                    <Typography variant='h4' style={{
                        fontFamily: 'Teko',
                        color: theme.palette.text.primary,
                    }}>
                        Frontend
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        HTML/CSS/JS
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://react.dev"} target='_blank' style={{
                            color: theme.palette.secondary.main,
                            textDecorationColor: theme.palette.secondary.main
                        }}>React</Link>
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://nextjs.org"} target='_blank' style={{
                            color: theme.palette.secondary.main,
                            textDecorationColor: theme.palette.secondary.main
                        }}>Next.JS</Link>
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://mui.com"} target='_blank' style={{
                            color: theme.palette.secondary.main,
                            textDecorationColor: theme.palette.secondary.main
                        }}>Material UI</Link> (remove?)
                    </Typography>
                    and more to be added!
                </div>
                <div style={{
                    padding: '1rem',
                }}>
                    <Typography variant='h4' style={{
                        fontFamily: 'Teko',
                        color: theme.palette.text.primary,
                    }}>
                        Backend
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://fastapi.tiangolo.com"} target='_blank' style={{
                            color: theme.palette.secondary.main,
                            textDecorationColor: theme.palette.secondary.main
                        }}>Fastapi</Link>
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        Docker
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        Kubernetes
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        AWS
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://www.mongodb.com"} target='_blank' style={{
                            color: theme.palette.secondary.main,
                            textDecorationColor: theme.palette.secondary.main
                        }}>MongoDB</Link>
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        MySQL
                    </Typography>
                </div>
            </div>
        </div >
    </>
    )
}

export default TechStackPanel