import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/" underline="none">
      19BCM040, 19BCM041, 19BCM002, 19BCM020     </Link>{' '}
       
    </Typography>
  );
}
export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
 
      }}
    >
      <CssBaseline />
  
       
      <Box
        component="footer"
        sx={{
          py: 5,
          px: 0,
          pb:3,
          mt: 0,position:"relative",
          top:0,
          maxWidth:"100%",
       
        
        bgcolor:'primary.main'
      }}
      >
       <Box sx={{pl:10, fontWeight:'bold'}}>
          <Typography variant="body1" sx={{ fontWeight:'bold'}}>
            PSG College of Arts & Science
          </Typography>
          <Typography variant="body1">
            Avinashi Road, Civil Aerodrome Post,
            Coimbatore - 641 014.
          </Typography>
          <Copyright sx={{alignItems: 'flex-end'}} /></Box>
        
      </Box>
    </Box>
  );
}