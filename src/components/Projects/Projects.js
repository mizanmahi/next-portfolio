import React from 'react';

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
   SeemoreButton
} from './ProjectsStyles';
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
   <section nopadding id='projects'>
      <SectionDivider />
      <SectionText main>Projects</SectionText>
      <GridContainer>
         {projects.map(
            ({ title, id, image, description, tags, source, visit }) => (
               <BlogCard key={id}>
                  <Img src={image} alt='Project Thumbnail' />
                  <TitleContent>
                     <HeaderThree title>{title}</HeaderThree>
                     <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                     <TitleContent>Stack</TitleContent>
                     <TagList>
                        {tags.map((tag, i) => (
                           <Tag key={i}>{tag}</Tag>
                        ))}
                     </TagList>
                  </div>
                  <UtilityList>
                     <ExternalLinks href={visit}>
                        Visit Site
                     </ExternalLinks>
                     <ExternalLinks href={source}>
                        Source Code
                     </ExternalLinks>
                  </UtilityList>
               </BlogCard>
            )
         )}
      </GridContainer>
      <SeemoreButton href='https://github.com/mizanmahi'>
      See Full List..
   </SeemoreButton>
   </section>
);

export default Projects;
