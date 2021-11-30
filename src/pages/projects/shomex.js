import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Link from 'next/link';

const shomex = () => {
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
                     src='https://i.ibb.co/FJwSr9V/shomex3.png'
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
                     src='https://i.ibb.co/5BdBmz5/shomex2.png'
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
                     src='https://i.ibb.co/9p5kFz8/shomex1.png'
                     alt=''
                  />
               </Grid>
            </Grid>

            <Typography variant='h3' sx={{ mt: 5, mb: 1 }}>
               Full-stack logistic application (MERN)
            </Typography>
            <Button
         target='_blank'

               component='a'
               href='https://github.com/mizanmahi/shomex-client'
               variant='contained'
               sx={{ px: 3 }}
            >
               Client Code
            </Button>
            <Button
         target='_blank'

               component='a'
               href='https://github.com/mizanmahi/shomex-server'
               variant='contained'
               sx={{ px: 3, ml: 1 }}
            >
               Server Code
            </Button>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Built this logistic application where users can buy services.
               Users can create an account and log in to their account and
               manage the orders. Users can also subscribe to our newsletter by
               email.
            </Typography>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Used: &nbsp;
               {[
                  'React',
                  'React Hook Form',
                  'Firebase',
                  'Nodejs',
                  'MongoDB',
                  'TailwindCss',
                  'React Router',
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
               href='https://shomex-bd.web.app/'
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

export default shomex;
