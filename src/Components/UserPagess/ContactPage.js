import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Paper } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      mobileNumber: data.get("mobileNumber"),
      otp: data.get("otp"),
    });
  };
  const [value, setValue] = useState();
  const paperStyle = { height: "auto", width: 650, margin: "10px auto" };
  const paperStyle1={};
  return (
    <>
    <Box sx={{ py: "5%", width:'100%', height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll", display:{xs:'none',md:'block'}}}>
      <Paper elevation={10} style={paperStyle}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                 py:"10%" 
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "info.main"}}>
                <ContactsOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Us
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
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
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      placeholder="Enter Your Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      InputProps={{ sx: { height: 100 } }}
                      margin="normal"
                      required
                      fullWidth
                      id="help"
                      label="How May We Help You?"
                      placeholder="Enter Your Problem/Suggestion"
                      name="help"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 2 }}
                >
                  Submit
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Grid item>
                      <Link to="/UserPage" variant="body2">
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
{/* ----------------------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------Mobile View--------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------- */}
    <Box sx={{ py: "5%", width:'100%', height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll",display:{xs:'block',md:'none'} }}>
      <Paper elevation={10} >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                 py:"10%" 
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "info.main"}}>
                <ContactsOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Us
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
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
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      placeholder="Enter Your Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      InputProps={{ sx: { height: 100 } }}
                      margin="normal"
                      required
                      fullWidth
                      id="help"
                      label="How May We Help You?"
                      placeholder="Enter Your Problem/Suggestion"
                      name="help"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 2 }}
                >
                  Submit
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Grid item>
                      <Link to="/UserPage" variant="body2">
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
