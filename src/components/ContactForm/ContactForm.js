import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';

import { Form } from './ContactForm.style';

const ContactForm = () => {
   return (
      <Box sx={{ maxWidth: '1040px', mx: 'auto', p: 1, my: 5 }}>
         <SectionDivider />
         <br />
         <SectionTitle>Contact Me</SectionTitle>
         <SectionText>I would love to hear from you!</SectionText>
         <Grid container justifyContent='center'>
            <Grid item xs={12} md={6}>
               <Form action='#'>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email' />
                  <textarea placeholder='Message' rows='6' />
                  <Button
                  type='submit'
                     variant='contained'
                     sx={{
                        bgcolor: '#212d45',
                        fontSize: '1.3rem',
                        borderRadius: 0,
                        p: '.7rem 2.5rem',
                        color: 'rgba(255,255,255,0.7)',
                     }}
                     type='submit'
                  >
                     Send
                  </Button>
               </Form>
            </Grid>
         </Grid>
      </Box>
   );
};

export default ContactForm;
