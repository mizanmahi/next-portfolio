import React from 'react';

import {
   Section,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Hello There, I'm
            <br />
            Mizanur Rahman
         </SectionTitle>
         <SectionText>
            I'm a full-stack JavaScript developer with a passion for developing
            scalable web applications and working across the full stack. I've
            built some web apps from the ground up using ReactJs, NodeJs, and
            MongoDB.
         </SectionText>
         <Button
            onClick={() =>
               (window.location =
                  'https://drive.google.com/uc?export=download&id=1bGH-7kDpVqVL_q3pFHAYfDIep6w3jpyH')
            }
         >
            My Resume
         </Button>
      </LeftSection>
   </Section>
);

export default Hero;
