import  React,{useEffect, useState} from 'react';
// import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Viewhead from './viewhead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';
import Cookies from 'universal-cookie';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getFixClass,classs} from "./servies"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
// import Ttviewusr from './ttviewusr';
// import Viewhead from "./viewhead"
// import Viewhead1 from "./viewhead1"
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Cookies from 'universal-cookie';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { mainListItems, secondaryListItems } from '../timetable/listItems';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/" underline="none">
        19BCM040, 19BCM041, 19BCM002, 19BCM020     </Link>{' '}
         
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein,j) {
  return { name, calories, fat, carbs, protein,j };
}





export default function Ttviewusr() {
    const cookies = new Cookies();
    const [open, setOpen] = React.useState(true);
    const [tt1, settt1] = useState(null)

    const toggleDrawer = () => {
      setOpen(!open);
    };
    var logouts = () => {
      cookies.set("login", "false");
      cookies.set("user", "User");
      window.open('http://localhost:3000/tt/','_self')
    };
  
  const [tt, settt] = useState(null)
//   const cookies = new Cookies();
var role =  cookies.get("role");
console.log(role,"role");
useEffect(async() => {
var tt1 =await axios.get("http://localhost:2000/cls")
console.log("tt1",tt1.data); 
settt1(tt1.data) 
var tt =await axios.get("http://localhost:2000/timetabe")
console.log("tt",tt.data); 
settt(tt.data) 

}, [])
const [cls, setcls] = React.useState('1a');
var usr =  cookies.get("user");
console.log(usr,"usr");
const handleChange = (event) => {
  setcls(event.target.value);
};


if(tt === null)
{
  return <h1>loading....</h1>
}
 
// const rows = [
//   createData('I', 'ST', ' ','R', 'DS',' '),
//   createData('II','ST', 'DS', ' ', 'R',' '),
//   createData('III', 'ST', 'ST','ST', 'DS','ST'),
//   createData('IV','R','R','R', 'ML','R'),
//   createData('V','ML','ML', 'ML','ML','ML'),
//   createData('VI','ST', 'ST','ST', 'ST','ST'),
// ];

  let ro =["I","II","III","IV","V","VI"]
  let ii=1;let jj=1;
  let aa=[];
  let a=[];
  a.push(ro[0])
var clse = tt1.filter((val)=>val.tutorName === usr)
console.log("teach",clse);
var cl = clse[0].className
    console.log('====================================');
    console.log(cl,"cl");
    console.log('===================================='); 
  // console.log("time",tt[cls].timetable.timetable.length);
  let ttt = tt.filter((val)=> val.timetable.class === cl)

 for(let i=0;i<36;i++)
 {
   if(a.length == 6)
   {
      aa.push(a)
      console.log("a",aa);
      a=[]
      a.push(ro[ii]);
      ii++ ;
   }
   else{
      a.push(ttt[0].timetable.timetable[jj].subject);
      jj++;
   }
 }
 const rows=aa.map((val)=> createData(val[0],val[1],val[2],val[3],val[4],val[5]))
 console.log(aa,"aa");
  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" >
        <Toolbar
          sx={{
            pr: '0px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '0px',
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
            View
          </Typography>
          <Button size="large" variant="contained" color="success" onClick={logouts} >
      Logout
    </Button>

        </Toolbar>
      </AppBar>
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
        <Container maxWidth="lg" sx={{ mt: 15, mb: 4 }}>
           
        <div>
        
       
    <TableContainer align="center">
       <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        Class- {cl}
        </Typography>
      <Table sx={{ maxWidth: 900 , minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Day Order/Hour</StyledTableCell>
            <StyledTableCell align="center">I</StyledTableCell>
            <StyledTableCell align="center">II</StyledTableCell>
            <StyledTableCell align="center">III</StyledTableCell>
            <StyledTableCell align="center">IV</StyledTableCell>
            <StyledTableCell align="center">V</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.j}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

        
  
          <Copyright sx={{ pt: 10}} />
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
    
      );
}
