import { Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../utils/hooks';

const Project = ({ projectName, projectDescription, techIcons, githubLink, projectLink = "" }) => {
    const theme = useTheme();
    const [buttonHover, setButtonHover] = React.useState(0);
    const screenWidth = useWindowSize();
    const breakpoint = 500;

    return (
        <div style={{
            backgroundColor: theme.palette.background.default,
            width: screenWidth > breakpoint ? "42%" : "85%",
            maxWidth: "650px",
            minWidth: screenWidth > breakpoint ? "400px" : "200px",
            border: "1px solid black",
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "left",
            padding: "1.5rem",
        }}>

            <Typography variant="h3" style={{
                color: "white",
                fontFamily: "Teko",
            }}>
                {projectName}
            </Typography>

            <Typography variant="h6" style={{
                color: "white",
                // padding: "1rem",
                textAlign: "justify"
            }}>
                {projectDescription}
            </Typography>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                minHeight: "50px",
                width: "100%",
                marginTop: "auto",
                flexWrap: "wrap"
            }}>
                {projectLink != "" &&
                    <Link to={projectLink}>
                        <Button variant="contained"
                            onMouseEnter={() => setButtonHover(1)}
                            onMouseLeave={() => setButtonHover(0)}
                            style={{
                                backgroundColor: "#6428d3",
                                color: "WHITE",
                                height: "50px",
                                borderRadius: "10px",
                                transform: buttonHover === 1 ? "scale(1.1)" : "scale(1)",
                                transition: "all 0.2s",
                            }}>
                            View Project
                        </Button>
                    </Link>
                }
                <Link to={githubLink}>
                    <Button variant="contained"
                        onMouseEnter={() => setButtonHover(2)}
                        onMouseLeave={() => setButtonHover(0)}
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            height: "50px",
                            borderRadius: "10px",
                            transform: buttonHover === 2 ? "scale(1.1)" : "scale(1)",
                            transition: "all 0.2s",
                        }}>
                        View Code
                        <img src="/github-mark-white.png" alt="GitHub Logo" style={{
                            height: "30px",
                            paddingLeft: "10px",
                        }} />
                    </Button>
                </Link>
                {screenWidth > breakpoint ? (
                    techIcons.map(img_source => {
                        return (<img src={img_source} id={img_source} style={{
                            height: "45px",
                            position: "relative",
                            top: "-0.3rem"
                        }} alt="Project Logo" />)
                    })
                ) : (
                    <span style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "1rem",
                        minHeight: "50px",
                        width: "100%",
                        marginTop: "auto",
                        flexWrap: "wrap"
                    }}>
                        {techIcons.map(img_source => {
                            return (<img src={img_source} id={img_source} style={{
                                height: "45px",
                                position: "relative",
                                top: "-0.3rem"
                            }} alt="Project Logo" />)
                        })}
                    </span>
                )}
            </div>
        </div >
    );

}


const ProjectList = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "1rem",
            paddingBottom: "3rem",
            flexWrap: "wrap",

        }}>
            <Project
                projectName='Webbie the Web IDE'
                projectDescription='Webbie is a web IDE that lets you develop and share web projects from your browser. Kickstart your projects anywhere by starting with one of several js framework templates. Iterate with speed using the live preview that runs a local dev server live in your browser!'
                projectLink='https://webbie-frontend.fly.dev'
                githubLink='https://github.com/alexbatesdev/Neumont-Capstone'
                techIcons={[
                    '/next-js.svg',
                    '/react.svg',
                    '/fastapi.svg',
                    '/docker-mark-blue.svg',
                    '/mongodb.svg'
                ]}
            />
            <Project
                projectName='Kubernetes + Helm Demo'
                projectDescription='This is a proof of concept kubernetes + helm cluster that runs and tests a dotnet framework api. Included is a readme that explains the entire process of setting up the cluster and running the tests.'
                projectLink=''
                githubLink='https://github.com/alexbatesdev/Kubernetes-Helm-Proof-of-Concept'
                techIcons={[
                    '/k8s.svg',
                    '/dotnet-logo.svg',
                    '/docker-mark-blue.svg',
                ]}
            />
            <Project
                projectName='Daily Checkers'
                projectDescription="Daily Checkers is a checkers service orchestrated with AWS python lambdas deployed with aws sam. With this project I also wanted to challenge myself to a retro style so I didn't use any frontend frameworks. I liked this idea enough that I have decided to keep working on it outside of school."
                projectLink='https://daily-checkers.nekoweb.org'
                githubLink='https://github.com/alexbatesdev/daily-checkers'
                techIcons={[
                    '/aws.svg',
                    '/python.svg',
                    '/html5-original.svg',
                    '/css.svg',
                    '/javascript.svg'
                ]}
            />
            <Project
                projectName='Stitch - Stuffed Animal Dating App'
                projectDescription='Stitch is a mock dating app targeted at stuffed animals. The backend follows a micro-service architecture comprised of fastapi and dotnet services. The frontend is a nextJS application that features realtime swiping and messaging using signalR.'
                projectLink=''
                githubLink='https://github.com/alexbatesdev/stuffed-animal-dating-app'
                techIcons={[
                    '/next-js.svg',
                    '/react.svg',
                    '/fastapi.svg',
                    '/dotnet-logo.svg',
                    '/docker-mark-blue.svg',
                    '/mongodb.svg'
                ]}
            />

        </div>
    );
};

export default ProjectList;