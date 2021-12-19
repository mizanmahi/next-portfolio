import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';

import { Form } from './ContactForm.style';
import { toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_9n3u2rq',
            'template_greh0et',
            form.current,
            'user_rJiuSmIQ2SyREy6ygkEpy'
         )
         .then(
            (result) => {
               console.log(result.text);
               form.current.reset();
               toast.success(
                  'Message sent successfully! I will get back to you shortly.'
               );
            },
            (error) => {
               console.log(error.text);
               toast.warn('Message failed to send. Please try again.');
            }
         );
   };

   return (
      <Box sx={{ maxWidth: '1040px', mx: 'auto', p: 1, my: 5 }} id='contact'>
         <SectionDivider />
         <br />
         <SectionTitle>Contact Me</SectionTitle>
         <SectionText>I would love to hear from you!</SectionText>
         <Grid container justifyContent='center'>
            <Grid item xs={12} md={8}>
               <Form ref={form} onSubmit={sendEmail}>
                  <input type='text' name='name' placeholder='Name'   required />
                  <input type='email' placeholder='Email' name='email'  required  />
                  <textarea placeholder='Message' name='message' rows='6'  required  />
                  <Button
                     type='submit'
                     variant='contained'
                     sx={{
                        bgcolor: '#212d45',
                        fontSize: '1.3rem',
                        borderRadius: 0,
                        p: '1rem 3rem',
                        color: 'rgba(255,255,255,0.7)',
                     }}
                     type='submit'
                  >
                     Send
                  </Button>
               </Form>
            </Grid>
         </Grid>
         <ToastContainer
            position='top-left'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </Box>
   );
};

export default ContactForm;
