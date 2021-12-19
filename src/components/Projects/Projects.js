import React from 'react';
import Link from 'next/link';

import {
   BlogCard,
   CardInfo,
   ExternalLinks,
   GridContainer,
   HeaderThree,
   Hr,
   Tag,
   TagList,
   TitleContent,
   UtilityList,
   Img,
   SeemoreButton,
} from './ProjectsStyles';
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Button } from '@mui/material';

const Projects = () => (
   <section nopadding id='projects' style={{ padding: '1rem 1rem 0' }}>
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
         {projects.map(
            ({
               title,
               id,
               image,
               description,
               tags,
               source,
               visit,
               serverCode,
               route,
            }, i) => (
               <BlogCard key={id} >
                  <Img src={image} alt='Project Thumbnail' />
                  <TitleContent>
                     <HeaderThree title>{title}</HeaderThree>
                     <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  {/* <div>
                     <TitleContent>Stack</TitleContent>
                     <TagList>
                        {tags.map((tag, i) => (
                           <Tag key={i}>{tag}</Tag>
                        ))}
                     </TagList>
                  </div> */}
                  {/* <UtilityList>
                     <ExternalLinks href={visit} target='_blank'>
                        Visit Site
                     </ExternalLinks>
                     <ExternalLinks href={source} target='_blank'>
                        Client Code
                     </ExternalLinks>
                     {serverCode && (
                        <ExternalLinks href={serverCode} target='_blank'>
                           Server Code
                        </ExternalLinks>
                     )}
                  </UtilityList> */}
                  <Link href={`projects/${route}`}>
                     <Button
                        component='a'
                        variant='contained'
                        sx={{
                           bgcolor: '#212d45',
                           fontSize: '1.3rem',
                           borderRadius: 0,
                           p: '.7rem 2.5rem',
                           color: 'rgba(255,255,255,0.7)',
                           my: 2,
                        }}
                        type='submit'
                     >
                        Details
                     </Button>
                  </Link>
               </BlogCard>
            )
         )}
      </GridContainer>

      <Button
         component='a'
         variant='contained'
         href='https://github.com/mizanmahi'
         target='_blank'
         sx={{
            bgcolor: '#212d45',
            fontSize: '1.3rem',
            borderRadius: 0,
            p: '.7rem 2.5rem',
            color: 'rgba(255,255,255,0.7)',
            my: 2,
            mx: 'auto',
            display: 'block',
            width: '17.5rem',
         }}
         type='submit'
      >
         More On Github
      </Button>
   </section>
);

export default Projects;
