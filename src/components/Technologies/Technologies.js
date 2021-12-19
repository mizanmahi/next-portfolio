import React from 'react';
import { DiCode, DiFirebase, DiNetbeans, DiReact, DiStackoverflow, DiZend } from 'react-icons/di';
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import {
   List,
   ListContainer,
   ListItem,
   ListParagraph,
   ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
   <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
         I've worked with a range of technologies in the web development world.
         From design to backend.
      </SectionText>
      <List>
         <ListItem>
            <DiReact size='3rem' />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  Html, Css, Sass, Bootstrap, TailwindCss, Javascript, ReactJS, React-router, MaterialUI, Redux etc.
               </ListParagraph>
            </ListContainer>
         </ListItem>

         <ListItem>
            <DiFirebase size='3rem' />
            <ListContainer>
               <ListTitle>Backend</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  Node.js, MongoDb, Mongoose, Firebase, JWT etc.
               </ListParagraph>
            </ListContainer>
         </ListItem>

         <ListItem>
            <DiZend size='3rem' />
            <ListContainer>
               <ListTitle>Design</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  Tools like Figma, Adobe PhotoShop, Adobe XD etc.
               </ListParagraph>
            </ListContainer>
         </ListItem>

         <ListItem>
            <DiCode size='3rem' />
            <ListContainer>
               <ListTitle>Fullstack</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  The React framework for production NextJS
               </ListParagraph>
            </ListContainer>
         </ListItem>

         <ListItem>
            <DiNetbeans size='3rem' />
            <ListContainer>
               <ListTitle>Tools</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  Tools like Axios, Heroku, Netlify, Firebase, Git, Github, Gitlab, Jira, Slack etc.
               </ListParagraph>
            </ListContainer>
         </ListItem>

         <ListItem>
            <DiStackoverflow size='3rem' />
            <ListContainer>
               <ListTitle>Still Learning</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  GraphQL, Gatsby, Apollo, Golang, MySql, React Native
               </ListParagraph>
            </ListContainer>
         </ListItem>
      </List>
   
   </Section>
);

export default Technologies;
