import React from 'react'


import { Box } from '@mui/system';
import Image from 'mui-image';
import { Button, Divider, Stack, Typography } from '@mui/material';

import UserPage4 from '../Other_imgs/userpage4.svg';
import Navbar_user from '../Navbar_user';
import { Link } from 'react-router-dom';



const OtherDetails = () => {
  return (
    <Box sx={{ width:"100%" }}>
        <Box>
            <Navbar_user/>
        </Box>



        <Box sx={{ 
        backgroundImage: "linear-gradient(to right top, #a7edff, #a4f2fa, #a6f6f3, #adf9ea, #b7fce0, #b7fce0, #b7fce0, #b7fce0, #adf9ea, #a6f6f3, #a4f2fa, #a7edff)",
        py:'3%',
        display:{xs:'none',md:'block'},
        }}>
            <Box display={"flex"}>
          
              <Box flex={3}>
                  <Typography 
                  sx={{
                    fontSize:30,
                    fontFamily:'serif',
                    fontWeight:500,
                    mt:'10%',
                    mb:'3%'

                  }}>
                    
                    You Can View Treatments below!<br/>
                    And Also other facilities like View Daily Updates

                  </Typography>

                  <Typography 
                  sx={{
                    fontSize:15,
                    fontFamily:'revert-layer',
                    fontWeight:500,

                  }}>
                    (For Registration and View List of Treatments Click On Butttons Below) 
                  </Typography>
                  <Button variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/Treatments" variant="body2" style={{color: 'white'}}>
                    View Treatment
                    </Link>
                  </Button><br/>

                  <Button variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/Updates" variant="body2" style={{color: 'white'}}>
                    Daily Updates
                    </Link>
                  </Button><br/>

                  

              </Box>
              <Box 
                  flex={1}
                  sx={{
                    my:'3%',
                    mr:'3%',
                    pt:'3%',
                    pb:'5%'
                  }}>
                  <Image src={UserPage4} alt="UserPage4" style={{borderRadius:5, width:'35vw',height:'57.3vh'}}></Image>
              </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default OtherDetails