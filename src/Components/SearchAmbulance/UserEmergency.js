import React from "react";
import "./Search_ambu.css";
import SearchBar from "./Search_ambu_bar";
import BookData from "./DemoData.json";
import { Box, Typography } from "@mui/material";
import Navbar_user from "../Navbar_user"
import Footer from "../Footer";
function Search() {
  return (
    <>

<Navbar_user/>

      
      <Box 
      sx={{
        // display:{xs:'none',md:'block'},
        width:'100%',
        pb:'10%',
        backgroundColor:'#eeeeee'
      }}>
          <Typography sx={{
            pt:'7%',
            fontSize:25,
          }}>
            Enter Your Location And Get Result as Nearest Hospitals and Its Contact Details
          </Typography>

        <Box sx={{pt:"3%", mb:'10%'}}>
        <SearchBar placeholder="Enter Your Location Here..." data={BookData} />
        </Box>
       
      </Box>

      {/* .................................................................. */}
      {/* ......................Mobile View................................. */}
      {/* .................................................................. */}

      {/* <Box 
      className="App"
      sx={{
        display:{xs:'block',md:'none'},
        pt:'7%'
      }}>
        <Box>
          <Typography sx={{
            pt:'7%',
            fontSize:25,
          }}>
            Enter Your Location And Get Result as Nearest Hospitals and Its Contact Details
          </Typography>
        </Box>
        <SearchBar placeholder="Enter Your Location Name" data={BookData} />
      </Box> */}

      <Box sx={{width:'100%'}}>
        <Footer/>
      </Box>
    </>
    
  );
}

export default Search;
