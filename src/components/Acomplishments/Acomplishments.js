import React from 'react';
import CountUp from 'react-countup';
import {
   Section,
   SectionDivider,
   SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
   { number: 15, text: 'Projects' },
   { number: 2, text: 'Years of Coding Experience' },
   { number: 15, text: 'Github Followers' },
   { number: 30, text: 'Github Stars' },
];

const Acomplishments = () => (
   <Section>
      <SectionTitle> Personal Accomplishments </SectionTitle>
      <Boxes>
         {data.map((card, i) => (
            <Box key={i}>
               <BoxNum> <CountUp end={+card.number} duration={5}  /> +</BoxNum>
               <BoxText>{card.text}</BoxText>
            </Box>
         ))}
      </Boxes>
   </Section>
);

export default Acomplishments;
