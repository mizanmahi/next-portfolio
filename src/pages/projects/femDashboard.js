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
                     src='https://i.ibb.co/0fXWHLz/fem1.png'
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
                     src='https://i.ibb.co/hHwYzvp/fem2.png'
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
                     src='https://i.ibb.co/C6xwyfg/fem3.png'
                     alt=''
                  />
               </Grid>
            </Grid>

            <Typography variant='h3' sx={{ mt: 5, mb: 1 }}>
               Social Media Dashboard With Dark and Light Theme
            </Typography>
            <Button
         target='_blank'

               component='a'
               href='https://github.com/mizanmahi/fem-smdb-theme-toggler'
               variant='contained'
               sx={{ px: 3 }}
            >
               Code
            </Button>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               This was a challenge from the front-end mentor. This is a fully
               responsive dashboard with light and dark theme. User can switch
               to their preferred theme. Used CSS Grid nad FlexBox for layout.
               Used semantic tags for markups.
            </Typography>
            <Typography variant='h4' component='p' sx={{ my: 3 }}>
               Used: &nbsp;
               {['HTML', 'Semantic Markups', 'CSS3', 'SASS', 'Javascript'].map(
                  (techno, i) => (
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
                  )
               )}
            </Typography>
            <Button
         target='_blank'

               component='a'
               href='https://smdb-dark-light-theme.netlify.app/'
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
