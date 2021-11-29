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
         <form action="#" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input  style={{padding: '.5rem 1rem', display: 'block', marginBottom: '1rem', width: '60%', minWidth: '25rem', margin: '0 auto', color: '#000'}} type="text" placeholder="Name" />
            <input style={{padding: '.5rem 1rem', margin: '1rem auto',display: 'block', marginBottom: '1rem', width: '60%', minWidth: '25rem', margin: '0 auto', color: '#000'}}  type="email" placeholder="Your email address" />
            <textarea rows='6' style={{padding: '.5rem 1rem', display: 'block', marginBottom: '1rem', width: '60%', minWidth: '25rem', margin: '0 auto', color: '#000'}}  type="email" placeholder="Your email address" />
            <button style={{margin: '1rem auto', padding: '1rem 3rem', color: '#fff', background: '#6b3030', outline: 'none', border: 0, borderRadius: '5px'}}>Send</button>
         </form>
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
