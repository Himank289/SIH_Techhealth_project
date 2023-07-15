import * as React from 'react';
import { useState } from 'react';
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
import { Paper } from '@mui/material';
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

export default function SignUp() {

  let navigate = useNavigate()

  const handleSignUp = async (e)=>{
    try {
      await axios.post("http://localhost:8800/api/hospital/addhospital", { hospitalName, email, password, address, contact } ).then(
        res => {
          console.log(res);
          navigate("/HospitalHome");
        })
      } catch (err) {}
    }


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [hospitalName, setHospitalName] = useState("Default")
  const [email, setEmail] = useState("Default")
  const [password, setPassword] = useState("Default")
  const [address, setAddress] = useState("Default")
  const [contact, setContact] = useState("Default")
  

  const paperStyle={height:'auto',width:650,margin:'5px auto'}
  return (
    <Box sx={{width:'100%',height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll"}}>
    <Grid className='Paprstyle'>
        <Paper  elevation={10} style={paperStyle}>
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
          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h6">
          Create your Healthcare Professional ID
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="HospitalName"
                  required
                  fullWidth
                  id="HospitalName"
                  label="Hospital Name"
                  placeholder='Enter Hospital Name'
                  type="text"
                  autoFocus
                  onInput={e => setHospitalName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  placeholder='Enter Valid Hospital Email Address'
                  autoComplete="email"
                  autoFocus
                  onInput={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ContactNumber"
                  label="ContactNumber"
                  name="ContactNumber"
                  autoComplete="ContactNumber"
                  placeholder='Enter Authorized Hospital Contact Number'
                  type="text"
                  onInput={e => setContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onInput={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="Address"
                  id="Address"
                  autoComplete="Address"
                  onInput={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                
                  required
                  fullWidth
                  name="PINCODE"
                  label="Pincode"
                  type="number"
                  id="PINCODE"
                  autoComplete="PINCODE"
                />
              </Grid>
              
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2 }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            
          
            <Grid container justifyContent="flex-end" >
              <Grid item>
                <p>Already have an account?</p>
                <Link to="/HospitalLogin" variant="body2">
                   <h5>Sign in</h5>
                </Link>
                <Grid item sx={{pb:"4vh",fontSize:-500}}>
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
        </Grid>
        </Box>
    
    
  );
}