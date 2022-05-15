import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import logo from '../../assets/logo.fw.png';
import Cookies from "universal-cookie";
import Box from '@mui/material/Box';
import psgcas from '../../assets/4DBD31C9-B384-4B16-9E31-5B753C2E5955 (1).PNG'
import { Button, CardActionArea, CardActions } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from './footer';

import blue from '@mui/material/colors/blue';


function Copyright(props) {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline="none">
      19BCM040, 19BCM041, 19BCM002     </Link>{' '}
    </Typography>
  );
}

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
          width: theme.spacing(8),
        },
      }),
    },
  }),
); 
const cookies = new Cookies();
  var cookie = cookies.get("login");
  var admincheck = cookies.get("user") === "Admin" ? "/admin" : "/view_docker";

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '2px', // keep right padding when drawer closed
            }}
          >
          <card sx={{ maxWidth: 500 }}><CardMedia
        component="img"
        sx={{ width: 351 }}
        image={logo}
        alt="Logo"/>
      </card><Box sx={{pl:150}}><card ><CardActions>
      <Button size="large" variant="contained" color="secondary" href='http://localhost:3000/tt/signin'>
        Login
      </Button>
    </CardActions></card></Box>
    
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            m:0,
            bgcolor: 'text.disabled',
           
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >

          <Box maxWidth="lg"  sx={{mt:0, bgcolor: 'warning.main', color: 'warning.contrastText',}}>
    <card><CardMedia
        component="img"
        sx={{ width:1685,mt:5}}
        image={psgcas}
        alt="Psgcas"
             />
      </card>
    </Box>
            

         
          <Box sx={{mt:0}}>
            <Footer />
            </Box>
         
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default DashboardContent ;