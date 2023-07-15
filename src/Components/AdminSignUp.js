import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Backdrop, ButtonBase, Paper } from '@mui/material';
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

export default function SignInHospital() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const paperStyle={padding:20,height:'auto',width:500,margin:'40px auto',paddingTop:'25px' }

  let navigate = useNavigate()

  const handleLogin = async (e)=>{
    try {
      await axios.post("http://localhost:8800/api/admin/login", {
        "email" : email,
        "password" : password,
    } ).then(
        res => {
        console.log(res);
        console.log(res.data);
        navigate("/AdminHome")
      })
      
    } catch (err) {}
  }
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    
    <Box sx={{ width:'100%',height:'100%', backgroundColor:"#e0f7fa"}}>
    <Grid >
      <Box sx={{pt:'5%', width:'100%',height:'100%', backgroundColor: "#e0f7fa" ,overflow:"scroll"}}>
        <Paper elevation={10} style={paperStyle}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" padding='5px'>
            Sign To Admin Portal
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              placeholder='Enter Authorized Admin Email Address'
              name="email"
              autoComplete="email"
              autoFocus
              onInput={e => setEmail(e.target.value)}
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
              onInput={e => setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In Admin
            </Button>



            <Grid container justifyContent="flex-end">
              <Grid item sx={{pb:"4vh"}}>
                <Grid item>
                <Link to="/" variant="body2">
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
    </Grid>
    </Box>
    
  );
}