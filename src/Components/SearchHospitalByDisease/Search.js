import React from "react";
import "./search.css";
import SearchBar from "./SearchBar";
import BookData from "./demodata.json";
import { Box, Typography } from "@mui/material";
import Navbar_user from "../Navbar_user"
import Footer from '../Footer'

function Search() {
  return (
    <>
    <Navbar_user/>
        <Box 
        className="App"
        sx={{
          display:{xs:'none',md:'block'},
          width:'100%',
          pb:'15%',
          backgroundColor:'#eeeeee'

        }}>
          <Box>
                <Typography
                sx={{
                  fontSize:25,
                  fontWeight:600,
                  pt:'8%',
                  // color:'brown',
                }}>
                  Enter Disease Name Here...And Get Result
                  As A Respective Hospital.
                </Typography>
                </Box>
          <SearchBar placeholder="Enter Disease Name Here..." data={BookData} />
        </Box>
{/* ........................................................................................................ */}
{/* ........................................Mobile View....................................................... */}
{/* ........................................................................................................ */}
        <Box 
        className="MobileApp"
        sx={{
          display:{xs:'block', md:'none'}
        }}>
          <Box sc={{width:'100vw'}}>

                <Typography
                sx={{
                  fontSize:20,
                  fontWeight:600,
                  py:'20%',
                  color:'brown',
                }}>
                  Enter Disease Name Here...And Get Result
                  As A Respective Hospitals Where You Can 
                  Take Treatments To Cure Disease 
                </Typography>
                </Box>
          <SearchBar placeholder="Enter Disease Name Here..." data={BookData} />
        </Box>

        <Box sx={{width:'100%'}}>
          <Footer/>
        </Box>
    </>
  );
}

export default Search;
