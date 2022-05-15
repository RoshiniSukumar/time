import  React,{useState} from 'react';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Cookies from "universal-cookie";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {makeStyles} from '@material-ui/core/styles'
import { padding } from '@mui/system';
import { blueGrey } from '@mui/material/colors';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" underline='none'>
        19BCM040 19BCM041 19BCM002
      </Link>{' '}
    
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const cookies = new Cookies();
  const [usr, setusr] = useState("");
  const [pass, setpass] = useState("");
  const [Login, setLogin] = useState(false);
  cookies.set("login", "false");
  cookies.set("user", "User");
  // var cookie = cookies.get("login");
  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  var arw2 = async (e) => {
    e.preventDefault();
    const arrayform2 = {
      username: username,
      password: password,
    };
    console.log(arrayform2);
    let Data = await axios.post(
      "http://localhost:2000/login",
      arrayform2
    );
    if (Data.data.err == "Username Not Exists") {
      alert("Username not exists");
    }
    if (Data.data.err == "Password Incorrect") {
      alert("Password Incorrect");
      console.log(Data.data.err);
    }
    if (Data.data.err == null) {
      alert(" Welcomes you!!!");
      // window.open("http://localhost:3000/tt/", "_self");
      console.log(Data.data.err);
    }
    console.log(Data.data.err);
    console.log(Data);
    if (Data.status == 204) {
      setLogin(true);
      cookies.set("user", username);
      cookies.set("login", "true");
      var admincheck = cookies.get("user") === "Admin" ? "http://localhost:3000/tt/admin" : "http://localhost:3000/tt/view_user";
      window.open(admincheck, "_self");
      console.log(admincheck);
    }
   
  };
// {  console.log(admincheck,cookies.get("user"))}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  
  return (
  
 

    <ThemeProvider theme={theme}>
      {/* <Card maxWidth="x"> */}
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              // id="email"
              label="Username"
              // name="email"
              // autoComplete="email"
              autoFocus
              onChange={(e) => setusername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setpassword(e.target.value)}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={arw2}
            >
              Sign In
            </Button>
            {/* <Grid container spacing={4}> */}
             {/* <Grid item></Grid> */}
              {/* <Grid item xs>
                <Link href="http://localhost:3000/tt/register" variant="body2" underline='none'>
                Sign Up
                </Link> */}
              {/* </Grid> */}
            {/* </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 25, mb: 4 }} />
      </Container>
      {/* </Card> */}
    </ThemeProvider>
  );
}