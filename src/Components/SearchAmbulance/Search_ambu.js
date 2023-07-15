import React from "react";
import "./Search_ambu.css";
import SearchBar from "./Search_ambu_bar";
import BookData from "./DemoData.json";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import Footer from '../Footer';



function Search() {
  return (
    <>

<Navbar/>
      <Box 
      sx={{
        // display:{xs:'none',md:'block'},
        width:'100%',
        pb:'15%',
        backgroundColor:'#eeeeee',
      }}>
        <Box>
          <Typography sx={{
            fontSize:25,
            pt:'5%',
          }}>
            Enter Your Location And Get Result as Nearest Hospitals and Its Contact Details...
          </Typography>
        </Box>
        <SearchBar placeholder="Enter City Name Here..." data={BookData} />
      </Box>


      {/* .................................................................. */}
      {/* ......................Mobile View................................. */}
      {/* .................................................................. */}

      {/* <Box 
      className="App"
      sx={{
        display:{xs:'block',md:'none'}
      }}>
        <Box>
          <Typography sx={{
            pt:'5%',
            fontWeight:'600',
          }}>
            Enter Your Location And Get Result as Nearest Hospitals and Its Contact Details
          </Typography>
        </Box>
        <SearchBar placeholder="Enter City Name" data={BookData} />
      </Box> */}

      <Box sx={{width:'100%'}}>
        <Footer/>
      </Box>
    </>
    
  );
}

export default Search;
