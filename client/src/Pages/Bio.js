import React from 'react';

// Styles --
import { Paragraph, Anchor } from '../Components/Styles/Bio.Style';

function Bio() {
    return (
        <>
            <Paragraph>Hello! My name is Lucas.</Paragraph>
            <Paragraph>I have over 6 years of professional development experience.
                I am a Full Stack Web Developer who currently works as the Lead Front End Web, React and UX/UI Developer
                for <Anchor href="https://www.eriksbikeshop.com" target="_blank" rel="noreferrer">Erik's Bike Shop</Anchor>, one of the largest bicycle and Winter sports shops in America.
            </Paragraph>
            <Paragraph>My favorite tech stack currently is React, GraphQL, Express and MySQL. If you're a bicycle nerd,
                you may enjoy my <Anchor href="http://www.namethatpart.com/" target="_blank" rel="noreferrer">Name That Part</Anchor> game
                that utilizes those technologies.
            </Paragraph>
            <Paragraph>Previous to my developer career I worked as a bicycle mechanic for 10 years. In my free time, I still
                enjoy fixing bicycles, but they're much more fun to ride. I also love coffee, hiking, camping, skateboarding,
                photography and live music.
            </Paragraph>
            <Paragraph>I should also mention that I know how to center a div.</Paragraph>
        </>
    );
}

export default Bio;