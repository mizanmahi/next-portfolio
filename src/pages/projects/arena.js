import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Link from 'next/link';

const arena = () => {
   return (
      <Box
         sx={{
            maxWidth: '1200px',
            mx: 'auto',
            p: 1,
            my: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <div>
            <Grid container spacing={2} justifyContent='center'>
               <Grid item lg={4} md={12} xs={12}>
                  <img
                     style={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        display: 'block',
                     }}
                     src='https://i.ibb.co/wY9X6f9/arena1.png'
                     alt=''
                  />
               </Grid>
               <Grid item lg={4} md={12} xs={12}>
                  <img
                     style={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        display: 'block',
                     }}
                     src='https://i.ibb.co/F8t282Z/arena3.png'
                     alt=''
                  />
               </Grid>
               <Grid item lg={4} md={12} xs={12}>
                  <img
                     style={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        display: 'block',
                     }}
                     src='https://i.ibb.co/2k1TMyX/arena2.png'
                     alt=''
                  />
               </Grid>
            </Grid>

            <Typography variant='h3' sx={{ mt: 5, mb: 1 }}>
            Full stack e-commerce application (MERN)
            </Typography>
            <Button
         target='_blank'

               component='a'
               href='https://github.com/mizanmahi/shomin-arena'
               variant='contained'
               sx={{ px: 3 }}
            >
               Client Code
            </Button>
            <Button
         target='_blank'

               component='a'
               href='https://github.com/mizanmahi/shomin-arena-backend'
               variant='contained'
               sx={{ px: 3, ml: 1 }}
            >
               Server Code
            </Button>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               I've Developed this eCommerce application using MERN
               technologies. Users can create accounts and order products also
               can manage the orders from the dashboard. I Implemented role-
               based UI and functionality. Utilized Firebase for authentication.
            </Typography>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Used: &nbsp;
               {[
                  'React',
                  'React Hook Form',
                  'Firebase',
                  'Nodejs',
                  'MongoDB',
                  'Material UI',
                  'React Router'
               ].map((techno, i) => (
                  <Chip
                     key={i}
                     label={techno}
                     variant='outlined'
                     sx={{
                        color: 'rgba(255,255,255, 0.7)',
                        fontSize: '1.5rem',
                        m: 1,
                     }}
                  />
               ))}
            </Typography>
            <Button
         target='_blank'

               component='a'
               href='https://shomin-arena.web.app/'
               variant='contained'
               sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
               Visit Site
            </Button>

            <Link href='/'>
               <Button
                  variant='outlined'
                  sx={{ px: 4, py: 1.5, fontSize: '1rem', ml: 2 }}
               >
                  Go Home
               </Button>
            </Link>
         </div>
      </Box>
   );
};

export default arena;
