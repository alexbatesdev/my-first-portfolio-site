import React from 'react';

const ExperienceItem = () => {
    return (
        <div style={{
            width: "calc(100% - 2rem)",
            height: "200px",
            backgroundColor: "purple",
            borderRadius: "10px",
            margin: "0.5rem 1rem",
        }}>

        </div>
    )
}

const ExperienceTimeline = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            width: "100%",
            minHeight: "500px",
            height: "100%",
            backgroundColor: "green",
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: "20%",
                backgroundColor: "darkred",
                borderRadius: "10px",
                padding: "1rem",
            }}>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: "80%",
                height: "100%",
                backgroundColor: "darkblue",
                borderRadius: "10px",
                // padding: "1rem",
            }}>
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </div>
    );
};

export default ExperienceTimeline;