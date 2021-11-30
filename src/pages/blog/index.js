import { Button, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link'

const index = () => {
   return (
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '3rem 0'}}>
         <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Blog Is Coming soon
         </Typography>
         <Link href='/'>
               <Button
                  variant='outlined'
                  sx={{ px: 4, py: 1.5, fontSize: '1rem', ml: 2, mt: 2 }}
               >
                  Go Home
               </Button>
            </Link>
      </div>
   );
};

export default index;
