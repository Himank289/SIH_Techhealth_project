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
import { Paper } from "@mui/material";
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
  return (
    <Box sx={{ py: "5%", width:'100%', height:'100%',backgroundColor: "#e0f7fa",overflow:"scroll" }}>
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
                Warning Or Changes Page
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      
                      name="HospitalID"
                      required
                      fullWidth
                      id="HospitalID"
                      label="Hospital ID"
                      type="text"
                      placeholder="Enter Valid Hospital ID"
                      autoFocus
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      
                      name="HospiatalName"
                      required
                      fullWidth
                      id="HospiatalName"
                      label="Hospiatal Name"
                      type="text"
                      autoFocus
                    />
                  </Grid>

                 
                  <Grid item xs={12}>
                  <TextField
                      InputProps={{ sx: { height: 100 } }}
                      margin="normal"
                      required
                      fullWidth
                      id="Warning"
                      label="Warning/Changes"
                      placeholder="Warning or Changes to be done"
                      name="Warning"
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
                      <Link to="/AdminHome" variant="body2">
                        <h4> Back</h4>
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
