import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
   CompanyContainer,
   FooterWrapper,
   LinkColumn,
   LinkItem,
   LinkList,
   LinkTitle,
   Slogan,
   SocialContainer,
   SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
   
   return (
      <FooterWrapper id='contact'>
         
         <LinkList>
            <LinkColumn>
               <LinkTitle>Call</LinkTitle>
               <LinkItem href='tel:01620705755'>01620705755</LinkItem>
            </LinkColumn>
            <LinkColumn>
               <LinkTitle>Email</LinkTitle>
               <LinkItem href='mailto:mizanmahi24@gmail.com'>
                  mizanmahi24@gmail.com
               </LinkItem>
            </LinkColumn>
         </LinkList>

         <SocialIconsContainer>
            <CompanyContainer>
               <Slogan>
               © 2021 Mizanur Rahman
               </Slogan>
            </CompanyContainer>
            <SocialContainer>
               <SocialIcons href='https://github.com/mizanmahi'>
                  <AiFillGithub size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.linkedin.com/in/mizan-mahi/'>
                  <AiFillLinkedin size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.instagram.com/mizan_mahi/'>
                  <AiFillInstagram size='3rem' />
               </SocialIcons>
            </SocialContainer>
         </SocialIconsContainer>
      </FooterWrapper>
   );
};

export default Footer;
