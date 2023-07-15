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
  const paperStyle={padding:20,height:'auto',width:550,margin:'20px auto',paddingTop:'20px'}

  

  return (
    
    <Box sx={{py:"1%",height:'100%',width:"100%", backgroundImage:"linear-gradient(to right top, #a1c7ff, #c1d3ff, #dae0ff, #efeffe, #ffffff)",overflow:"scroll"}} >
        <Paper elevation={10} style={paperStyle}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "info.main"}}>
                <MedicationIcon />
              </Avatar>
          <Typography component="h1" variant="h5">
             Update Treatment Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="TrtName"
              label="Treatment name"
              type="text"
              id="TrtName"
              placeholder='Enter Treatment Name'
            />
            </Grid>
            <Grid item xs={12} sx={{width:400}}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="OldFees"
              label="Old Fees"
              type="number"
              id="AvBeds"
              placeholder='Enter Old Fees'
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="NewFees"
              label="New Fees"
              type="number"
              id="NewFees"
              placeholder='Enter New Fees'
            />
            </Grid>
            <Grid item xs={12}>
                  <TextField
                      InputProps={{ sx: { height: 100 } }}
                      margin="normal"
                      required
                      fullWidth
                      id="Reason"
                      label="Reason of Updation"
                      placeholder="Enter Reason Why you Need Requiremment"
                      name="Reason"
                      type="text"
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
              Update Treatment
            </Button>
           

            <Grid container justifyContent="flex-end">
              <Grid item sx={{pb:"4vh"}}>
                <Grid item>
                <Link to="/HospitalPage" variant="body2">
                  <h3> Back</h3>
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