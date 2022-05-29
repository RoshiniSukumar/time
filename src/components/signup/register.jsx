import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Text from './text'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/" underline="none">
      19BCM040, 19BCM041, 19BCM002    </Link>{' '}
       
    </Typography>
  );
}
const theme = createTheme();

export default function Register() {
  const [ firstname, setfirstname] = useState("")
  const [ lastname, setlastname] = useState("")
  const [ username, setusername] = useState("")
  const [ password, setpassword] = useState("")
  const [role, setrole] = useState("")
  var arrw3 = async () => {
    const arrayform3 = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      role:role
    };
    console.log(arrayform3,"arrr");
    let reg = await axios.post(
      "http://localhost:2000/register",
      arrayform3
    );
    console.log(reg.data.err)
    
toast.sucess("Account Registerd!");
    window.open("http://localhost:3000/tt/manage_account", "_self");
    
  //  console.log(arrayform3,"arrr") 
};

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
   
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

// const calks = ()=>{
//   <div>
   
//     <Text/>
//   </div>
// }
  return (
    <ThemeProvider theme={theme}>
       <ToastContainer />
      <Box >
            <IconButton onClick={()=>{window.open("http://localhost:3000/tt/manage_account", "_self")}}    >
              <KeyboardBackspaceIcon onClick={()=>{window.open("http://localhost:3000/tt/manage_account", "_self")}} />
            </IconButton></Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  onChange={(e) => setusername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Head" onChange={(e) => setrole(e.target.value)} control={<Radio />} label="Head" />
        <FormControlLabel value="Staff" onChange={(e) => setrole(e.target.value)} control={<Radio />} label="Staff" />
        
      </RadioGroup>
    </FormControl>
    </Grid>
              {/* <FormControl> */}
  {/* <FormLabel id="demo-radio-buttons-group-label">Designation</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Staff"
    name="radio-buttons-group"
  >
    <FormControlLabel value="Staff" control={<Radio />} onChange={(e) => setvalues(e.target.value)} label="Staff" />
    <FormControlLabel value="Tutor" control={<Radio />}  onChange={(e) => setvalues(e.target.value)} label="Tutor" />
    <FormControlLabel value="Head" control={<Radio />} onChange={(e) => setvalues(e.target.value)} label="Head" />
  </RadioGroup>
  
    {checks()}
  </FormControl> */}
              {/* </Grid> */}
              <Grid item xs={12}>
               
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={arrw3}
            >
              Submit
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 15 }} />
      </Container>
    </ThemeProvider>
  );
}