import React from 'react';
import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// https://i.ibb.co/tZgGNCp/exploree.png
// https://i.ibb.co/pJHgjdg/dashboardd.png
// https://i.ibb.co/xzNd1Rj/main.png

const ProjectBox = styled(Box)(({ theme }) => {
   return {
      maxWidth: '1200px',
      margin: ' 0 auto',
      padding: theme.spacing(1),
      marginTop: theme.spacing(10),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   };
});

const arena = () => {
   return (
      <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{duration: .5}}>
         <ProjectBox>
            <div>
               <Grid container spacing={2} justifyContent='center'>
                  <Grid item lg={4} md={12} xs={12}>
                     <Zoom>
                        <img
                           style={{
                              maxWidth: '100%',
                              margin: '0 auto',
                              display: 'block',
                           }}
                           src='https://i.ibb.co/xzNd1Rj/main.png'
                           alt=''
                        />
                     </Zoom>
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                     <Zoom>
                        <img
                           style={{
                              maxWidth: '100%',
                              margin: '0 auto',
                              display: 'block',
                           }}
                           src='https://i.ibb.co/tZgGNCp/exploree.png'
                           alt=''
                        />
                     </Zoom>
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                     <Zoom>
                        <img
                           style={{
                              maxWidth: '100%',
                              margin: '0 auto',
                              display: 'block',
                           }}
                           src='https://i.ibb.co/pJHgjdg/dashboardd.png'
                           alt=''
                        />
                     </Zoom>
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
                  technologies. Users can create accounts and order products
                  also can manage the orders from the dashboard. I Implemented
                  role- based UI and functionality. Utilized Firebase for
                  authentication.
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
         </ProjectBox>
      </motion.div>
   );
};

export default arena;
