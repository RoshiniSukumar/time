import React from 'react';
import { useState,useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../timetable/listItems';
import Cards from './cards'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const rows = [
  createData('India', 'IN'),
  
  
];

const columns = [
  { id: 'S.no', label:'S.No.', minWidth: 250 },
  { id: 'Classname', label: 'Class Name',minWidth:100 },
  
];

function createData(StaffCode,StaffName) {

  return {StaffCode,StaffName };
}




function Copyright(props) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline="none">
      19BCM040, 19BCM041, 19BCM002     </Link>{' '}
     
    </Typography>
  );
}
const deletepost = ()=>{
  window.confirm("Are you sure you want to delete?")
  axios.delete( "http://localhost:2000/docket")
  axios.delete( "http://localhost:2000/core")
  axios.delete( "http://localhost:2000/cls")
  axios.delete( "http://localhost:2000/staff")
  axios.delete( "http://localhost:2000/fixed")
  axios.delete( "http://localhost:2000/allied")
window.alert("data hae been deleted")
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
  const [arroget, setarroget] = useState([])
  const [lastarray, setlastarray] = useState([])
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/teacher");
    var filtere = getarray.data;
    setarroget(filtere);
    console.log("filterew", arroget);
    // var final = arroget[arroget.length-1];
    // setlastarray(final.arr);
    // console.log(lastarray,"arr");
    // console.log(lastarray.arr,"last");
    
  }, []);
  var get1 = arroget.map((get) => (
    <div>
      <TableRow hover role="checkbox" tabIndex={-1}>
       
    <TableCell>{get.name}</TableCell>
    <TableCell>{get.hrs}</TableCell></TableRow></div>
    ));
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
              Dashboard
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
          <Container maxWidth="lg" sx={{ mt: 15, mb: 4 ,mr:5, fontSize:'25px' }}>

          <Paper sx={{ width: '60%', mr:25, fontSize:'25px' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} sx={{fontSize:'35px' }}>
                Class Details
              </TableCell>
              
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  // align='center'
                  sx={{fontSize:'25px' }}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           
          <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px' }}>1</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               I BSc CS  A
              </TableCell></TableRow>
              <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px'}}>2</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               I BSc CS  B
              </TableCell></TableRow>
              <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px'}}>3</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               II BSc CS  A
              </TableCell></TableRow>

              <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px'}}>4</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               II BSc CS  B
              </TableCell></TableRow>      
              <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px'}}>5</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               III BSc CS  A
              </TableCell></TableRow> 
              <TableRow>
             <TableCell   sx={{maxWidth:100,fontSize:'20px'}}>6</TableCell>
             <TableCell align='center' sx={{ maxWidth:100,fontSize:'20px'}}>
               III BSc CS  B
              </TableCell></TableRow>   </TableBody>
        </Table>
      </TableContainer>
     
    </Paper> 
           
            <Copyright sx={{ pt: 18 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}