import React from 'react';

// Styles --
import { Grid, ProjectContainer, ProjectTitle, ProjectImage, ProjectDescription, TechStackTitle, TechStack, LiveProjectLink, GitHubLink } from '../Components/Styles/Projects.Style';

// Images --
import tcsi from "../images/tcsi.jpg";
import wsg from "../images/wsg.jpg";
import ntp from "../images/ntp.jpg";
import cbp from "../images/cbp.jpg";
import gpd from "../images/gpd.jpg";
import ghr from "../images/ghr.jpg";

function Projects() {
    return (
        <Grid>
            <ProjectContainer>
                <ProjectTitle>Twin Cities Send It</ProjectTitle>
                <ProjectImage src={tcsi} />
                <ProjectDescription>Database of all grass hills in the Twin Cities and greater surrounding areas that are suitable to ride your bicycle down. Why? Because it's really fun. I built this project to familiarize myself with GraphQL. Complete with photos, videos and maps to each hill, this has become a favorite passion project of mine.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>Vanilla JS, GraphQL, Express, MySQL</TechStack>
                <LiveProjectLink href="http://www.twincitiessendit.com" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Twin-Cities-Send-It" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>What's Still Good?</ProjectTitle>
                <ProjectImage src={wsg} />
                <ProjectDescription>Full Stack Application for personal use listing the expiration dates of all the food in my kitchen so I may better plan my meals and reduce food waste.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>React, GraphQL, Express, MySQL, Day.js</TechStack>
                <LiveProjectLink href="http://whats-still-good.herokuapp.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/whats-good" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>Name That Part</ProjectTitle>
                <ProjectImage src={ntp} />
                <ProjectDescription>A game designed for bicycle nerds, by a bicycle nerd. Users are shown a small bicycle part and 4 options to choose from. Images are loaded in advance on each selection to keep the game play inturrupted. Users compete for a high score and the game gets very compettitive. Stats are collected at the end of each game and sent to the database. This was truely a fun game to design.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>React, GraphQL, Express, MySQL, Styled Components, React Router</TechStack>
                <LiveProjectLink href="http://www.namethatpart.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Bicycle-Mechanic-Game-v3" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>Coffee Brewing Profile App</ProjectTitle>
                <ProjectImage src={cbp} />
                <ProjectDescription>Proof of concept tool to help at home baristas to keep track of and maintain their coffee brewing techniques. Choose your preferred brewing method and the app frontloads your previous brew into the input fields to cut down on redundancies. I use this app almost every day. Feel free to sign up!</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>React JS, TypeScript, Express, Passport, BCrypt, MySQL, WebPack, React Router</TechStack>
                <LiveProjectLink href="https://coffee-brew-profiler.herokuapp.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Coffee-Brew-Profiler" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>Grams Per Dollar Calculator App</ProjectTitle>
                <ProjectImage src={gpd} />
                <ProjectDescription>Sometimes deciding to upgrade your bike can be a difficult decision. This calculator will give you the dollars per gram (or ounces) for a supplied component upgrade.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>Vanilla JS, Express</TechStack>
                <LiveProjectLink href="https://shaving-grams.herokuapp.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Grams-Per-Dollar" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>GitHub</ProjectTitle>
                <ProjectImage src={ghr} />
                <ProjectDescription>Just a link to my GitHub Profile. Plenty of small projects from school here. Poke around if you'd like.</ProjectDescription>
                <GitHubLink href="https://github.com/macemke4130?tab=repositories" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
        </Grid >
    );
}

export default Projects;