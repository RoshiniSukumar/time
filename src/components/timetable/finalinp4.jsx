import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState,useEffect } from "react";
import axios from 'axios';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

// import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
 
import { mainListItems, secondaryListItems } from './listItems';
 
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline="none">
      19BCM040, 19BCM041, 19BCM002     </Link>{' '}
       
    </Typography>
  );
}
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  pt:5
}));
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
    const [value, setValue] = React.useState("");
    const [val, setval] = useState("")
    const [totaltextBox, setTotalTextBox] = React.useState([]);
    const [sample, setSample] = React.useState(Array(3).fill(""));
    var arrw3 = async () => {
      const arrayform3 = {
        // className:value,
        // subject:
        //   {
            className:value,
            tutorName:val
        //   }
        
      };
      console.log(arrayform3);
      let reg = await axios.post(
        "http://localhost:2000/cls",
        arrayform3
      );
      console.log(reg.data.err)
    if(reg.data.err==null){
      
      window.open('http://localhost:3000/tt/docket_inp2','_self')
    }
      
  };
   
    
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',  
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Create  Docket 
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
            {/* <Box sx={{pl:17}}>
            <IconButton  >
              <KeyboardBackspaceIcon />
            </IconButton></Box> */}
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ pr: 0 }} >
            {mainListItems}
            <Divider  />
            
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Div sx={{pt:10,pl:7}}>{"Enter the class details."}</Div>
          <Container maxWidth="lg" sx={{ mt: 20, mb: 4,mr:20}}>
          < Box sx={{ display: 'flex',position:'relative',left:160}}>
      <Grid container spacing={3} SX={{bgcolor: 'primary.main'}}>
      <Grid item  xs={12} md={6} lg={3}>
<TextField
          required
          id="outlined-required"
          label="Name of the class"
           
          onChange={(e) => setValue(e.target.value)} 
        />      
        </Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Name of the Tutor"
          onChange={(e)=>setval(e.target.value)}
        />
        {/* </Grid> */}
        {/* <Grid item  xs={12} md={6} lg={3}> */}
       
<Box sx={{pt:5}}>
<button
           
           variant="contained" 
           color="primary" 
           type="submit" 
            href="http://localhost:3000/tt/create_inp"
           style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'15px',fontWeight:'bold' }}
          
           onClick={arrw3}
           
         >Submit and Add Subject</button>
 
</Box>
<Box sx={{pt:5, pl:0}}>
<button
           
          variant="contained" 
          color="primary" 
          type="submit" 
           href="http://localhost:3000/tt/create_docket2"
          style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'15px',fontWeight:'bold' }}   
          onClick={()=>{window.open("http://localhost:3000/tt/docket_inp","_self")}}
          
        >Next</button></Box>
        
        </Grid>

        </Grid>
        
        </Box>
            
           
            <Copyright sx={{ pt: 10}} />
          </Container>
        </Box>
         
      </Box>
     
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}