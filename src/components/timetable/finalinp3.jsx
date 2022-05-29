import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState,useEffect } from "react";
import axios from 'axios';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {getFixClass,classs} from "../view/servies"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  pt:5
}));

const mdTheme = createTheme();

function DashboardContent() {
    const [value, setValue] = React.useState("");
    const [val, setval] = useState("")
    const [hrs, sethrs] = useState("")
    const [totaltextBox, setTotalTextBox] = React.useState([]);
    const [totaltextBox1, setTotalTextBox1] = React.useState([]);
    const [sample, setSample] = React.useState(Array(3).fill(""));
    const fetchdata = async()=>{
 
      var teacher = await axios.get("http://localhost:2000/teacher");
      var fixclass = await axios.get("http://localhost:2000/fixclass");
      var clas = await axios.get("http://localhost:2000/class");
      var cls = await axios.get("http://localhost:2000/cls");
      var classArr = ["1a","1b","2a","2b","3a","3b"]
      var ttg = [];
      var teach =[];
      classArr.map((va)=>{
   const timetable = getFixClass(fixclass.data,teacher.data,va)
     teach =  classs(clas.data,teacher.data,va,timetable,ttg,teach)
     console.log(cls.data,"tfs");
    })
    console.log("ttg",ttg);
    console.log("teach",teach);
    // for(let i =0; i<=ttg.length;i++){
      ttg.map((value,index)=>{
        let da ={
          class : classArr[index],
          timetable:value
        }
         axios.post("http://localhost:2000/timetabe",da)
    console.log(value,"value");
  }
  )
  axios.post("http://localhost:2000/staff",teach)
     var tt = await axios.get("http://localhost:2000/timetabe")
    console.log(tt.data,"yy");
    window.open("http://localhost:3000/tt/view_docket","_self")
  }
    var arrw3 = async () => {
      totaltextBox.push(hrs);
      totaltextBox1.push(sample);
      const arrayform3 = {
      
className:value,
subject:{
subjectName: val,
staffName: totaltextBox1},
fixHrs: totaltextBox 
      };
      console.log(arrayform3);
      let reg = await axios.post(
        "http://localhost:2000/fixclass",
        arrayform3
      );
      console.log(reg.data.err)
    if(reg.data.err==null){
      window.open('http://localhost:3000/tt/docket_inp3','_self')
    }
      
  };
   
    const handleChange = (e2, i2) => {
      const textData = [...totaltextBox];
      textData[i2] = e2.target.value;
      setTotalTextBox(textData);
    }; 
    const handleChange1 = (e2, i2) => {
      const textData1 = [...totaltextBox1];
      textData1[i2] = e2.target.value;
      setTotalTextBox1(textData1);
    }; 
    const handleSubmit = (e) => {
      e.preventDefault();
      window.open('http://localhost:3000/tt/create_docket2','_self')
       
    };
  
    let removeFormFields = (i) => {
      let newFormValues = [...totaltextBox];
      newFormValues.splice(i, 1);
      setTotalTextBox(newFormValues)
  }
  let removeFormFields1 = (i) => {
    let newFormValues1 = [...totaltextBox1];
    newFormValues1.splice(i, 1);
    setTotalTextBox1(newFormValues1)
}
  console.log(totaltextBox)
    const addField = () => {
      const textData = [...totaltextBox]
      textData.push("");
      setTotalTextBox(textData);
       
      const textData3 = [...totaltextBox];
      textData3.push("");
      setTotalTextBox(textData3);
    //   const arrayform3 = {
    //     arr: totaltextBox
    //   };
    //   console.log(arrayform3);
    //   let reg =  axios.post(
    //     "http://localhost:2000/class",
    //     arrayform3
    //   );
    };
    const addField1 = () => {
      const textData1 = [...totaltextBox1]
      textData1.push("");
      setTotalTextBox1(textData1);
       
      const textData4 = [...totaltextBox1];
      textData4.push("");
      setTotalTextBox1(textData4);
    //   const arrayform3 = {
    //     arr: totaltextBox
    //   };
    //   console.log(arrayform3);
    //   let reg =  axios.post(
    //     "http://localhost:2000/class",
    //     arrayform3
    //   );
    };
    
    useEffect(() => {
      
  // addField()
  }, []);
  
    console.log(sample);
    
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
       <ToastContainer />
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
            <Box sx={{pl:17}}>
            <IconButton onClick={()=>{window.open("http://localhost:3000/tt/docket_inp2", "_self")}}   >
              <KeyboardBackspaceIcon />
            </IconButton></Box>
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
          <Div sx={{pt:10,pl:7}}>{"Enter the details of allied papers."}</Div>
          <Container maxWidth="lg" sx={{ mt: 20, mb: 4,mr:20}}>
          < Box sx={{ display: 'flex',position:'relative',left:50}}>
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
          label="Name of the subject"
          onChange={(e)=>setval(e.target.value)}
          sx={{mb:3}}
        />
        </Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Name of the staff"
          onChange={(e)=>setSample(e.target.value)}
          sx={{mb:3}}
        />
        {totaltextBox1.map((item, index) => (
        <div> 
        <TextField  
        id="outlined-required"
        label="Name of the staff"
        required 
        // sx={{mt:3}}
       value={item} 
       onChange={(e) => handleChange1(e, index)} 
       sx={{mb:3}}   /> 
       {/* {index ?  */}
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields1(index)}
         style={{ position:'relative',left:'215px',  bottom:'70px', border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      {/* : null}  */}
       </div>
      ))}
      <Box sx={{pt:3,pl:10}}>
      <IconButton onClick={addField1}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>
        <AddBoxIcon />
      </IconButton>
</Box>   
        </Grid>
    
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Fixed hours"
          sx={{mb:3}}
          onChange={(e)=>sethrs(e.target.value)}
        />
        {totaltextBox.map((item, index) => (
        <div> 
        <TextField  
        id="outlined-required"
        label="Fixed Hours"
        required 
       value={item} onChange={(e) => handleChange(e, index)} sx={{mb:3}}   /> 
       {/* {index ?  */}
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'205px',  bottom:'75px', border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      {/* : null}  */}
       </div>
      ))}
       
      <Box sx={{pt:3,pl:10}}>
      <IconButton onClick={addField}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>
        <AddBoxIcon />
      </IconButton>
</Box>
        {/* </Grid> */}
       {/* <Grid item  xs={12} md={6} lg={3}> */}
          
        {/* </Grid>  */}
        {/* <Grid item  xs={12} md={6} lg={3}> */}
        
<Box sx={{pt:5}}>
<button          
           variant="contained" 
           color="primary" 
           type="submit" 
            href="http://localhost:3000/tt/create_docket2"
           style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'15px',fontWeight:'bold' }}   
           onClick={arrw3}
         >Submit and Add Subject</button>
 
</Box>
<Box sx={{pt:5, pl:0}}>
<button 
          variant="contained" 
          color="primary" 
          type="submit" 
           href="http://localhost:3000/tt/view_docket"
          style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'15px',fontWeight:'bold' }}         
          onClick={()=>{fetchdata()
            }}
        >Create Docket</button></Box>
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