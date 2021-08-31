import React from 'react';

import {
   Section,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
   <Section row noPadding>
      <LeftSection>
         <SectionTitle main center>
            Hello There, I'm
            <br />
            Mizanur Rahman
         </SectionTitle>
         <SectionText>
            I am a self-taught web developer with good knowledge of front-end
            techniques and as well as back-end. I love spending time fixing
            little details and optimizing codes.
         </SectionText>
         <Button
            onClick={() =>
               (window.location =
                  'https://drive.google.com/file/d/1bGH-7kDpVqVL_q3pFHAYfDIep6w3jpyH/view?usp=sharing')
            }
         >
         My Resume
         </Button>
      </LeftSection>
   </Section>
);

export default Hero;
