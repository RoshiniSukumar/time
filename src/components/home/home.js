import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import logo from '../../assets/logo.fw.png'
import Box from '@mui/material/Box';
import psgcas from '../../assets/PSG-College-of-Arts-Science.jpg'
import { Button, CardActionArea, CardActions } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Button } from '@mui/material';
// import { mainListItems, secondaryListItems } from './listItems';
// import Creates from './creates'
// import Text from './text'
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
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '2px', // keep right padding when drawer closed
            }}
          >
            {/* <IconButton
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
            </IconButton>*/}
            {/* <Typography 
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Create  Docket 
            </Typography> */}
            <card sx={{ maxWidth: 500 }}><CardMedia
        component="img"
        sx={{ width: 351 }}
        image={logo}
        alt="Logo"
      />
      </card><Box sx={{pl:150}}><card ><CardActions>
      <Button size="large" color="error">
        Login
      </Button>
    </CardActions></card></Box>
    
      {/* <Button>Login</Button> */}
            {/* <img src={logo}  nowrap sx={{width: 0}}/> */}
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        {/* <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}> */}
              {/* <ChevronLeftIcon /> */}
            {/* </IconButton> */} 
          {/* </Toolbar> */}
          {/* <Divider /> */}
          {/* <List component="nav" sx={{ pr: 0 }} > */}
            {/* {mainListItems} */}
            {/* <Divider  /> */}
            {/* {secondaryListItems} */}
          {/* </List> */}
        {/* </Drawer> */}
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
          {/* <Toolbar /> */}
          <Container maxWidth="lg" sx={{ mt: 15, mb: 4 }}>
          <Box>
    <card sx={{pl:0, ml:0, position:'relative',left:0}}><CardMedia
        component="img"
        sx={{ width: 1501 }}
        image={psgcas}
        alt="Psgcas"
      />
      </card>
    </Box>
            {/* <Grid container spacing={3}>
              {/* Chart *
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                
                  {/* <Chart /> *
                </Paper>
              </Grid>
              {/* Recent Deposits *
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> *
                </Paper>
              </Grid>
              {/* Recent Orders *
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> 
                </Paper>
              </Grid>
            </Grid> */}
            {/* <Text />    */}
            <Copyright sx={{ pt: 10}} />
          </Container>
        </Box>
        {/* <Dynamic/> */}
      </Box>
      {/* <Dynamic/> */}
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}