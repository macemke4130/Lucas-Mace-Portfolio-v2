import React from 'react';

// Styles --
import { Grid, ProjectContainer, ProjectTitle, ProjectImage, ProjectDescription, TechStackTitle, TechStack, LiveProjectLink, GitHubLink, Review } from '../Components/Styles/Projects.Style';

// Images --
import tcsi from "../images/tcsi.jpg";
import wsg from "../images/wsg.jpg";
import ntp from "../images/ntp.jpg";
import cbp from "../images/cbp.jpg";
import gpd from "../images/gpd.jpg";
import ghr from "../images/ghr.jpg";
import dn from "../images/dn.jpg";

function Projects() {
    return (
        <Grid>
            <ProjectContainer>
                <ProjectTitle>Name That Part</ProjectTitle>
                <ProjectImage src={ntp} />
                <Review>"Name That Part is a fun, and surprisingly tough game." - <a href="https://bikerumor.com/think-youre-a-knowledgeable-bike-mechanic-prove-it-with-name-that-part-game/" target="_blank" rel="noreferrer">BikeRumor</a></Review>
                <Review>"Challenging." - <a href="https://theradavist.com/2022/03/radar-roundup-reeb-full-suspension-sustainable-cambium-giro-flat-latch-engin-cranks-and-colored-xc-iii/" target="_blank" rel="noreferrer">The Radavist</a></Review>
                <Review>"This one is pure sadism." - <a href="https://www.pinkbike.com/news/slack-randoms-moto-inspired-hooligan-ebike-fixed-gear-skateboard-bikes-jet-engine-go-karts-and-more.html" target="_blank" rel="noreferrer">PinkBike</a></Review>
                <ProjectDescription>A game designed for bicycle nerds, by a bicycle nerd. Users are shown a small bicycle part and 4 options to choose from. Images are loaded in advance on each selection to keep the game play inturrupted. Stats are collected at the end of each game and sent to the database.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>React, GraphQL, Express, MySQL, Styled Components, React Router</TechStack>
                <LiveProjectLink href="http://www.namethatpart.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Bicycle-Mechanic-Game-v3" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectTitle>Dynamic Navigation</ProjectTitle>
                <ProjectImage src={dn} />
                <ProjectDescription>A scaling and self routing navigation menu. JSON data is fed in, a fully dynamic navigation is displayed, complete with submenus.</ProjectDescription>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStack>React, React Router</TechStack>
                <LiveProjectLink href="https://dynamic-nav.herokuapp.com/" target="_blank">Live Project</LiveProjectLink>
                <GitHubLink href="https://github.com/macemke4130/Navigation-Menu" target="_blank">GitHub Repository</GitHubLink>
            </ProjectContainer>
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