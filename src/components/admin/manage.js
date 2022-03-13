import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/PersonAdd';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../timetable/listItems';
import Tables from "./tables"
// yyy
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline="none">
      19BCM040, 19BCM041, 19BCM002     </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {/* {'.'} */}
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
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

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
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
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
              Manage Accounts
            </Typography>
            <IconButton color="inherit" sx={{display:'flex'}} component='a' href='http://localhost:3000/tt/register'>
            {/* <Box> */}
            {/* <Button variant="outlined" startIcon={<AddIcon />}> */}
  {/* Add Account */}
<AddIcon />
{/* </Button> */}
{/* </Box> */}
{/* <Button>Primary</Button> */}
</IconButton>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
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
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ pr: 0 }} >
            {mainListItems}
            <Divider  />
            {/* {secondaryListItems} */}
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
           <Container maxWidth="lg" sx={{ mt: 5, mb: 4}}>
             <Tables/>
           {/* <Grid container spacing={3}>
              Chart 
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 70,
                  }}
                >
           <Chart /> 
           <Box sx={{ display: 'flex', px: 5,pl:6, fontFamily:'default',fontSize:27}}>
           <Box sx={{ display: 'flex', px: 5}}>
           S.No 
          </Box>
          <Box sx={{ display: 'flex', px: 5}}>
           NAME </Box>
           <Box sx={{ display: 'flex',px:5}}>
           DEPARTMENT </Box>
           <Box sx={{ display: 'flex',px:5}}>
           MOBILE </Box>
          <Box sx={{display: 'flex',pr:50}}>        
          <Box sx={{display: 'flex', pl:20, fontFamily:'default',fontSize:27}}>
             DELETE 
         </Box></Box>
          </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 70,
                  }}
                >
           <Chart /> 
           <Box sx={{ display: 'flex', px: 5,fontFamily:'default'}}>
           <Box sx={{ display: 'flex', px: 5,fontSize:25,pl:8}}>
           01
          </Box>
          <Box sx={{ display: 'flex', px: 5, fontSize:25,pl:7,fontFamily:'default'}}>
          <Box sx={{  }}>
           Mohana Priya</Box>
          <Box sx={{ display: 'flex', px: 5, fontSize:25,fontFamily:'default'}}>
          <Box sx={{  }}>
           B.Sc(CS)</Box>
           <Box sx={{ display: 'flex', pl: 10, fontSize:25,fontFamily:'default'}}>
          <Box sx={{  }}>
           1234567890</Box>
          <Box sx={{display: 'flex',pr:50}}>        
          <Box sx={{display: 'flex', pl:25}}>
          <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <CancelIcon />
              </Badge>
            </IconButton>
            <h4>DELETE</h4>
         </Box></Box>
          </Paper>
              </Grid> */}
            
           {/* Recent Deposits  */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <Deposits /> 
                </Paper>
              </Grid>
             Recent Orders 
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                   <Orders /> 
                </Paper> */}
              {/* </Grid> */}
            {/* </Grid>  */}
            
            <Copyright sx={{position:"relative", mt:10 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}