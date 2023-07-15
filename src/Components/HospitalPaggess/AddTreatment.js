import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import { padding } from '@mui/system';
import Specialization from './Specialization';
import MedicationIcon from '@mui/icons-material/Medication';




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
  const paperStyle={padding:20,height:'auto',width:500,margin:'20px auto',paddingTop:'25px'}

  

  return (
    
    <Box sx={{py:"7.15%",height:'100%',width:"100%" ,backgroundImage:"linear-gradient(to right top, #a1c7ff, #c1d3ff, #dae0ff, #efeffe, #ffffff)",overflow:"scroll"}} >
        <Paper elevation={10} style={paperStyle}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "info.main"}}>
                <MedicationIcon />
              </Avatar>
          <Typography component="h1" variant="h5">
             Add Your Treatment Below
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Drname"
              label="Doctor name"
              name="Drname"
              type="text"
              placeholder='Enter Doctor Name'
              
              autoFocus
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="Tfees"
              label="Treatment Fees"
              type="text"
              id="Tfees"
              placeholder='Enter Treatment Fees'
              
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Specialization"
              label="Specialization"
              name="Specialization"
              type="text"
              placeholder='Enter Specialization'
              
              autoFocus
            />
            </Grid>
        
           
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white"}}
            >
              Add Treatment
            </Button>
           

            <Grid container justifyContent="flex-end">
              <Grid item sx={{pb:"4vh"}}>
                <Grid item>
                <Link to="/HospitalPage" variant="body2">
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
    
  );
        }