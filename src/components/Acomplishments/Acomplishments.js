import React from 'react';

import {
   Section,
   SectionDivider,
   SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
   { number: 15, text: 'Practise Projects' },
   { number: 2, text: 'Years of Coding Experience' },
   { number: 10, text: 'Github Followers' },
   { number: 30, text: 'Github Stars' },
];

const Acomplishments = () => (
   <Section>
      <SectionTitle> Personal Acomplishments </SectionTitle>
      <Boxes>
         {data.map((card, i) => (
            <Box key={i}>
               <BoxNum>{card.number} +</BoxNum>
               <BoxText>{card.text}</BoxText>
            </Box>
         ))}
      </Boxes>
   </Section>
);

export default Acomplishments;
