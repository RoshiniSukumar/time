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
import Text from './text'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


function Copyright(props) {
  
  

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline='none'>
        19BCM040 19BCM041 19BCM002
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {/* {'.'} */}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const [ so, setso] = useState("")
  const [ se, setse] = useState("")
  const [ to, sette] = useState("")
  const [ tc, settc] = useState("")
  const [ he, sethe] = useState("")
  const [ ho, setho] = useState("")
  const [values, setvalues] = useState("")
  var arrw3 = async () => {
    // const arrayform3 = {
    //   firstname: firstname,
    //   lastname: lastname,
    //   username: username,
    //   password: password,
    // };
    // console.log(arrayform3);
    // let reg = await axios.post(
    //   "http://localhost:2000/register",
    //   arrayform3
    // );
    // console.log(reg.data.err)
    // if (reg.data.err == null) {
    // alert("Account Registerd!");
    //   window.open("http://localhost:3000/tt/", "_self");
    // }
    // else if(reg.data.err=="err"){
    //    alert("Please fill all the fields");
    // }
    
};

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
const checks = ()=>{
  if(values==="Tutor"){
   {<input/>
  }
  console.log("calks")  
  console.log(values)
  }

else{
  console.log("else")
}}
const calks = ()=>{
  <div>
    {/* {console.log("im in")} */}
    {/* <TextField
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="new-password"
    onChange={(e) => setpassword(e.target.value)}
    /> */}
    <Text/>
  </div>
}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            // marginLeft: 90,
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}> 
              <Grid item xs={12}>
              <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Designation</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Staff"
    name="radio-buttons-group"
  >
    {/* </Grid> */}
    {/* </Box> */}
    {/* <Grid container spacing={2}>  */}
              {/* <Grid item xs={12}> */}
    <FormControlLabel value="Staff" control={<Radio />} onChange={(e) => setvalues(e.target.value)} label="Staff" />
    {/* </Grid> */}
    <TextField
    // required
    fullWidth
    name="Staff hours(ODD SEM)"
    label="Staff hours(ODD SEM)"
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    sx={{mt:3}}
    />
    <TextField
    required
    // fullWidth
    name="Staff hours(EVEN SEM)"
    label="Staff hours(EVEN SEM)"
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    sx={{mt:3}}
    />
    {/* </Grid> */}
    {/* <Grid item xs={12}> */}
  <FormControlLabel value="Tutor" control={<Radio />}  onChange={(e) => setvalues(e.target.value)} label="Tutor" />
    {/* </Grid> */}
    {/* <Grid item xs={12}> */}
    <TextField
    // required
    fullWidth
    name="Staff hours(ODD SEM)"
    label="Staff hours(ODD SEM)"
    sx={{mt:3}}
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    />
    {/* </Grid> */}
     {/* <Grid item xs={12}> */}
    <TextField
    // required
    fullWidth
    name="Staff hours(EVEN SEM)"
    label="Staff hours(EVEN SEM)"
    sx={{mt:3}}
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    />
    {/* </Grid> */}
     {/* <Grid item xs={12}> */}
           <TextField
    // required
    fullWidth
    name="Tutoring Class"
    label="Tutoring Class"
    sx={{mt:3}}
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    />
    {/* </Grid> */}
    {/* <Grid item xs={12}> */}
    <FormControlLabel value="Head" control={<Radio />} onChange={(e) => setvalues(e.target.value)} label="Head" />
  {/* </Grid> */}
    {/* <Grid item xs={12}> */}
    <TextField
    // required
    fullWidth
    name="Staff hours(ODD SEM)"
    label="Staff hours(ODD SEM)"
    sx={{mt:3}}
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    />
     {/* </Grid>  */}
              {/* <Grid item xs={12}> */}
    <TextField
    // required
    fullWidth
    name="Staff hours(EVEN SEM)"
    label="Staff hours(EVEN SEM)"
    sx={{mt:3}}
    // type="password"
    // id="password"
    // autoComplete="new-password"
    // onChange={(e) => setpassword(e.target.value)}
    />
    {/* </Grid> */}
  </RadioGroup>
  {/* teachers =[
    {
      name:hema,
      class:[..],
      subject:[..],
      hrs:[],
    }
  ] 
  class=[
      {
        clasname:bs.ccs-A,
        subjec:[
          {
            subjectName:
            staffName:
          }
        ]
      }
    ]
    fixClass=[
      sub:[
        {
          className:..,
          staffNAme:..,
          fixHrs:[1..30]
        }
      ],
      }
    ]
  */}
  {/* {console.log(values)} */}
  {/* if(values==="Tutor"){ */}
    {/* // <input/> */}
  {/* // } */}
  {/* <Text/> */}
    {checks()}
  </FormControl>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={arrw3}
            >
              Sign Up
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 25 }} />
      </Container>
    </ThemeProvider>
  );
}