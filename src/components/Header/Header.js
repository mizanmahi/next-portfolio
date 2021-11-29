import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { AiTwotoneThunderbolt, AiFillFacebook } from 'react-icons/ai';

import {
   Container,
   Div1,
   Div2,
   Div3,
   NavLink,
   SocialIcons,
   Span,
} from './HeaderStyles';

const Header = () => (
   <Container>
      <Div1>
         <Link href='/'>
            <a
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'white',
                  marginBottom: 20,
               }}
            >
               <AiTwotoneThunderbolt size='3rem' /> <Span>mizanmahi</Span>
            </a>
         </Link>
      </Div1>
      <Div2>
         <li>
            <Link href='#projects'>
               <NavLink>Projects</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#tech'>
               <NavLink>Technologies</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#about'>
               <NavLink>About</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#contact'>
               <NavLink>Contact</NavLink>
            </Link>
         </li>
      </Div2>
      <Div3>
         <SocialIcons href='https://github.com/mizanmahi' target='_blank'>
            <AiFillGithub size='3rem' />
         </SocialIcons>
         <SocialIcons
            href='https://www.linkedin.com/in/mizan-mahi/'
            target='_blank'
         >
            <AiFillLinkedin size='3rem' />
         </SocialIcons>
         <SocialIcons
            href='https://www.facebook.com/mizanmahi.10/'
            target='_blank'
         >
            <AiFillFacebook size='3rem' />
         </SocialIcons>
      </Div3>
   </Container>
);

export default Header;
