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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Paper } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { StyleSheet ,Dimensions, } from '@emotion/utils';
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
  
  let navigate = useNavigate();

  const handleSignUp = async (e)=>{
    try {
      await axios.post("http://localhost:8800/api/users/register", { username: username, email: email, password: password, mobileNo: mobileNo, age: age, dob: dob, gender: gender, address: address } ).then(
        res => {
          console.log(res);
          navigate("/UserHome");
        })
      } catch (err) {}
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setGender(data.get('gender'))
  };
  const [dob, setValue] = useState()
  const [username, setName] = useState()
  const [mobileNo, setMobileNo] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [age, setAge] = useState()
  const [address, setAddress] = useState()
  const [gender, setGender] = useState()
  
  
  

  return (


<>
    <Box sx={{width:'100%', height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll",display:{xs:'none',md:'block'}}}>
        <Paper elevation={20} sx={{height:'auto',width:650, margin:'1% auto'}}>
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
            Sign up User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  autoFocus
                  onInput={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="mobileNumber"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  type="text"
                  onInput={e => setMobileNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  onInput={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="otp"
                  label="otp"
                  type="text"
                  id="otp"
                  autoComplete="otp"
                  onInput={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                  onInput={e => setAge(e.target.value)}
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
                  onInput={e => setAddress(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
               </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
              <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="female"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    
                  </RadioGroup>
                </FormControl>
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
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>Already have an account?</p>
                <Link to="/UserLogin" variant="body2">
                   <h5>Sign in</h5>
                </Link>
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





    <Box sx={{width:'100%', height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll",display:{xs:'block',md:'none'}}}>
        <Paper elevation={20} sx={{height:'auto',width:'auto', margin:'1% auto'}}>
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
            Sign up User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  autoFocus
                  onInput={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="mobileNumber"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  type="text"
                  onInput={e => setMobileNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  onInput={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="otp"
                  label="otp"
                  type="text"
                  id="otp"
                  autoComplete="otp"
                  onInput={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                  onInput={e => setAge(e.target.value)}
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
                  onInput={e => setAddress(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
               </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
              <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="female"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    
                  </RadioGroup>
                </FormControl>
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
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>Already have an account?</p>
                <Link to="/UserLogin" variant="body2">
                   <h5>Sign in</h5>
                </Link>
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

</>
    
  );
}