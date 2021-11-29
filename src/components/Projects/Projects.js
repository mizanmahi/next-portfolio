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
   SeemoreButton,
} from './ProjectsStyles';
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
   <section noPadding id='projects' style={{padding: '1rem 1rem 0'}}>
      <SectionDivider />
      <SectionText>Projects</SectionText>
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
            }) => (
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
                     <ExternalLinks href={visit} target='_blank' >Visit Site</ExternalLinks>
                     <ExternalLinks href={source} target='_blank'>Client Code</ExternalLinks>
                     {serverCode && (
                        <ExternalLinks href={serverCode} target='_blank'>
                           Server Code
                        </ExternalLinks>
                     )}
                  </UtilityList>
               </BlogCard>
            )
         )}
      </GridContainer>
      <SeemoreButton href='https://github.com/mizanmahi'>
         See More On Github
      </SeemoreButton>
   </section>
);

export default Projects;
