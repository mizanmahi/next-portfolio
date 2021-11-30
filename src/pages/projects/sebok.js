import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Link from 'next/link';

const sebok = () => {
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
                     src='https://i.ibb.co/rdMh2Cp/sebok1.png'
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
                     src='https://i.ibb.co/CK4Rq4f/sebok2.png'
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
                     src='https://i.ibb.co/M66zfNc/sebok3.png'
                     alt=''
                  />
               </Grid>
            </Grid>

            <Typography variant='h3' sx={{ mt: 5, mb: 1 }}>
               Sebok Medicare Web App (React)
            </Typography>
            <Button
               target='_blank'
               component='a'
               href='https://github.com/mizanmahi/Sebok-React'
               variant='contained'
               sx={{ px: 3 }}
            >
               Code
            </Button>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Developed this project to explore Firebase authentication and
               handling form by React hook form. Utilized Material UI for
               responsive and smooth design. . Users can create an account and
               login to their accounts.
            </Typography>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Used: &nbsp;
               {[
                  'React',
                  'React Hook Form',
                  'Firebase',
                  'Authentication',
                  'Material UI',
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
               href='https://sebok-2b3c9.web.app/'
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

export default sebok;
