import React, { useEffect, useRef } from 'react'
import { useTheme } from '@emotion/react'
import { Typography, Link } from '@mui/material';
import TechBadge from './TechBadge';

const TechStackPanel = () => {
    const theme = useTheme();
    const [whichDomainIsHovered, setWhichDomainIsHovered] = React.useState(0);
    const [selectedDomain, setSelectedDomain] = React.useState(0);

    const handleMouseEnter = (domain) => {
        setWhichDomainIsHovered(domain);
        if (domain !== selectedDomain) {
            setSelectedDomain(0);
        }
    }

    return (<>
        <div
            style={{
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
                Technology and Tools
            </Typography>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                paddingBottom: '1rem',
            }}>
                <Typography variant='h5'
                    onClick={() => setSelectedDomain(1)}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => setWhichDomainIsHovered(0)}
                    style={{
                        color: theme.palette.text.primary,
                        backgroundColor: whichDomainIsHovered === 1 ? "#486ee269" : "#a5a5a533",
                        borderRadius: "10px",
                        padding: '0.25rem 0.75rem',
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                        boxShadow: "0px 0px 7px -3px black",
                    }}>
                    Front-End
                </Typography>
                <Typography variant='h5'
                    onClick={() => setSelectedDomain(2)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => setWhichDomainIsHovered(0)}
                    style={{
                        color: theme.palette.text.primary,
                        backgroundColor: whichDomainIsHovered === 2 ? "#2bd01373" : "#a5a5a533",
                        borderRadius: "10px",
                        padding: '0.25rem 0.75rem',
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                        boxShadow: "0px 0px 7px -3px black",
                    }}>
                    Back-End
                </Typography>
                <Typography variant='h5'
                    onClick={() => setSelectedDomain(3)}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => setWhichDomainIsHovered(0)}
                    style={{
                        color: theme.palette.text.primary,
                        backgroundColor: whichDomainIsHovered === 3 ? "#a8171778" : "#a5a5a533",
                        borderRadius: "10px",
                        padding: '0.25rem 0.75rem',
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                        boxShadow: "0px 0px 7px -3px black",
                    }}>
                    DevOps
                </Typography>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                gap: '1rem',
                width: "60%",
                flexWrap: 'wrap',
            }}>
                <TechBadge label='React' icon='/react.svg'
                    source_name={'State of JS'}
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" : null} />
                <TechBadge label='Next.JS' icon='/next-js.svg'
                    source_name={'State of JS'}
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" :
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='AWS' icon='/aws.svg'
                    source_name={"Statista"}
                    highlight_color={
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" :
                            whichDomainIsHovered == 3 || selectedDomain == 3 ? "#a8171778" : null} />
                <TechBadge label='Docker' icon='/docker-mark-blue.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" :
                        whichDomainIsHovered == 3 || selectedDomain == 3 ? "#a8171778" : null} />
                <TechBadge label='Kubernetes' icon='/k8s.svg'
                    highlight_color={whichDomainIsHovered == 3 || selectedDomain == 3 ? "#a8171778" : null} />
                <TechBadge label='.NET' icon='/dotnet-logo.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='Fastapi' icon='/fastapi.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='MongoDB' icon='/mongodb.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='CSS' icon='/css.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" : null} />
                <TechBadge label='Postman' icon='/getpostman-icon.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='Git' icon='/git-plain.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" :
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" :
                            whichDomainIsHovered == 3 || selectedDomain == 3 ? "#a8171778" : null} />
                <TechBadge label='HTML' icon='/html5-original.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" : null} />
                <TechBadge label='JavaScript' icon='/javascript.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" :
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='TypeScript' icon='/typescript.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" :
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='Angular' icon='/angular.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" : null} />
                <TechBadge label='Python' icon='/python.svg'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='MySQL' icon='/mysql.webp'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='node-js' icon='/node-js.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" :
                        whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='Redis' icon='/redis.webp'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
                <TechBadge label='Vite' icon='/vite.svg'
                    highlight_color={whichDomainIsHovered == 1 || selectedDomain == 1 ? "#486ee269" : null} />
                <TechBadge label='SQL' icon='/sql.webp'
                    highlight_color={whichDomainIsHovered == 2 || selectedDomain == 2 ? "#2bd01373" : null} />
            </div>
        </div >
    </>
    )
}

export default TechStackPanel