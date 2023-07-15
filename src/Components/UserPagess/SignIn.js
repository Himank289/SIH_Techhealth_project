import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import { padding } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
     
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobileNumber: data.get('mobileNumber'),
      otp: data.get('otp'),
    });
  };

  let navigate = useNavigate()

  const handleLogin = async (e)=>{
    try {
      await axios.post("http://localhost:8800/api/users/login", {
        "email" : email,
        "password" : password,
    } ).then(
        res => {
        console.log(res);
        console.log(res.data);
        navigate("/UserHome")
      })
      
    } catch (err) {}
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const paperStyle={padding:20,height:'auto',width:500,margin:'20px auto',paddingTop:'25px'}
  const paperStyle1={}//padding:20,height:'auto',width:500,margin:'20px auto',paddingTop:'25px'}

  return (
    <>
    <Box sx={{width:'100%', height:'100%',py:"5%",backgroundColor: "#e0f7fa",overflow:"scroll", display:{xs:'none', md:'block'}}} >
        <Paper elevation={10} style={paperStyle}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to SwastyaOk🙏 
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Email"
              name="mobileNumber"
              type="text"
              onInput={e => setEmail(e.target.value)}
              autoFocus
            />
                {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white"}}
              onClick={handleLogin}
            ><Link to="/UserPage" variant="body2" style={{color: 'white'}}>
              SEND OTP
              </Link>
            </Button> */}

            <TextField
              margin="normal"
              required
              fullWidth
              name="otp"
              label="Password"
              type="text"
              id="otp"
              placeholder="Enter Password"
              onInput={e => setPassword(e.target.value)}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white"}}
              onClick={handleLogin}
            >
              Sign In
            
            </Button>
           

            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>Don't have an account? </p>
                <Link to="/SignUp" variant="body2" >
                   <h5>Sign Up</h5>
                </Link>
                <Grid item>
                <Link to="/" variant="body2" >
                  <h5> Back</h5>
                </Link>
              </Grid>
              </Grid>
             
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </Paper>
    </Box>




    <Box sx={{width:'100%', height:'100%',py:"5%",backgroundColor: "#e0f7fa",overflow:"scroll", display:{xs:'block', md:'none'}}} >
        <Paper elevation={10} style={paperStyle1}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to SwastyaOk🙏 
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Email"
              name="mobileNumber"
              type="text"
              onInput={e => setEmail(e.target.value)}
              autoFocus
            />
                {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white"}}
              onClick={handleLogin}
            ><Link to="/UserPage" variant="body2" style={{color: 'white'}}>
              SEND OTP
              </Link>
            </Button> */}

            <TextField
              margin="normal"
              required
              fullWidth
              name="otp"
              label="Password"
              type="text"
              id="otp"
              placeholder="Enter Password"
              onInput={e => setPassword(e.target.value)}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white"}}
              onClick={handleLogin}
            >
              Sign In
            
            </Button>
           

            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>Don't have an account? </p>
                <Link to="/SignUp" variant="body2" >
                   <h5>Sign Up</h5>
                </Link>
                <Grid item>
                <Link to="/" variant="body2" >
                  <h5> Back</h5>
                </Link>
              </Grid>
              </Grid>
             
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </Paper>
    </Box>
    


    </>
  );
}
