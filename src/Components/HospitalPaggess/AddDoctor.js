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
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputLabel, MenuItem, Paper } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Specialization from "./Specialization"

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
  const [prefix, setPrefix] = React.useState("");

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  const [post, setPost] = React.useState("");

  const handleChange1 = (event) => {
    setPost(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage:"linear-gradient(to right top, #a1c7ff, #c1d3ff, #dae0ff, #efeffe, #ffffff)",
        overflow: "scroll",
      }}
    >
      <Grid>
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
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: "info.main"}}>
                <LocalHospitalIcon/>
              </Avatar> */}

                <Typography component="h1" variant="h5" sx={{ pt: "1%" }}>
                  Add Doctor Information
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Prefix/Title
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={prefix}
                          label="Prefix"
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Dr.</MenuItem>
                          <MenuItem value={20}>Prof.</MenuItem>
                          <MenuItem value={30}>Mr.</MenuItem>
                          <MenuItem value={40}>Mrs.</MenuItem>
                          <MenuItem value={50}>Ms.</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        autoComplete="given-name"
                        name="fullName"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        type="text"
                        placeholder="Enter Full Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="License"
                        label="License"
                        name="License"
                        autoComplete="License"
                        type="text"
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
                        placeholder="Enter Doctor's Age"
                      />
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue="female"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={4} paddingTop={"5em"}>
                      <FormLabel>Qualification</FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Qualification
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={post}
                          label="Qualigication"
                          onChange={handleChange1}
                        >
                          <MenuItem value={10}>MBBS</MenuItem>
                          <MenuItem value={20}>MD</MenuItem>
                          <MenuItem value={30}>BAMS</MenuItem>
                          <MenuItem value={40}>BPT</MenuItem>
                          <MenuItem value={70}>Others </MenuItem>
                        </Select>
                        <TextField
                          id="standard-basic"
                          label="others"
                          variant="standard"
                          placeholder="If other post then mention"
                        />
                      </FormControl>
                    </Grid>


                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="experience"
                        label="Experience"
                        type="text"
                        id="experience"
                        placeholder="Enter Experience"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormLabel >
                      Speacialist:
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Specialization/>
                    </Grid>


                    <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="charges"
                      label="Doctor charges"
                      type="number"
                      id="charges"
                      placeholder="Enter Charges"
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="availablity"
                      label="Availablity"
                      type="text"
                      id="availablity"
                      placeholder="Enter Doctor's availablity"
                    />
                    </Grid>

                    
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                  >
                    Add Doctor Information
                  </Button>

                  <Grid container justifyContent="flex-end">
                    <Grid item sx={{ pb: "4vh" }}>
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
      </Grid>
    </Box>
  );
}
