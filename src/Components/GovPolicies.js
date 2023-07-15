import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar_user';
import Footer from './Footer'
import { backdropClasses, Typography } from '@mui/material';
import Policies from './Policies_Description';


export default function GovPolicies() {
  return (
    <>
{/* ----------------------------------------------------------------------------------------------- */}
{/* ..........................Large Screen Devices.................................. */}
{/* ----------------------------------------------------------------------------------------------- */}


    <Box sx={{backgroundColor:'#e3f2fd',display:{xs:'none',md:'block'}}}>
        {/* ...............................Navbar here............................ */}
        <Box sx={{width:'100vw'}}>
            <Navbar/>
        </Box>

        <Box sx={{width:'100%',my:'7%',}}>
            
            <Typography sx={{fontFamily:'serif',fontWeight:'500',fontSize:45,}}>
            
            15 Types Of Government<br/>Health Insurance Schemes In<br/>"INDIA"
            
            </Typography>
            <Policies/>
        </Box>

        {/* ..............................Footer Here................................ */}
        <Box sx={{width:'100vw',pt:'5%'}}>
            <Footer/>
        </Box>
    </Box> 

{/* ----------------------------------------------------------------------------------------------- */}
{/* ..........................Mobile Devices.................................. */}
{/* ----------------------------------------------------------------------------------------------- */}


    <Box sx={{display:{xs:'block',md:'none'}}}>
        {/* ............................Navbar here............................. */}
        <Box sx={{width:'100vw'}}>
            <Navbar/>
        </Box>

        <Box
        sx={{
            width:'100%',
            mt:'15%',
            mb:'5%',
        }}>
            <Typography
            sx={{
                fontFamily:'sans-serif',
                fontWeight:'700',
                fontSize:30,
                
            }}>
            15 Types Of Government Health Insurance Schemes In "INDIA"
            </Typography>
            <Policies/>
        </Box>
        {/* ..........................Footer here.........................  */}
        <Box sx={{width:'100vw',pt:'5%'}}>
            <Footer/>
        </Box>
        
    </Box>  
    </>
  )
}
