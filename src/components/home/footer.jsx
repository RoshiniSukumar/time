import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" >
      {'Copyright © '}
      <Link color="inherit" >
      19BCM002 19BCM040 19BCM041
      </Link>
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
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
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === 'Light'
        //       ? theme.palette.grey[200]
        //       : theme.palette.grey[800]
        
        bgcolor:'primary.main'
      }}
      >
        {/* <Container> */}<Box sx={{pl:10, fontWeight:'bold'}}>
          <Typography variant="body1" sx={{ fontWeight:'bold'}}>
            PSG College of Arts & Science
          </Typography>
          <Typography variant="body1">
            Avinashi Road, Civil Aerodrome Post,
            Coimbatore - 641 014.
          </Typography>
          <Copyright sx={{alignItems: 'flex-end'}} /></Box>
        {/* </Container> */}
      </Box>
    </Box>
  );
}