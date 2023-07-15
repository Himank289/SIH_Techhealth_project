import React from 'react'
// import HospitalNavbar from './HospNavBar';
import Navbar from './Navbar_Admin';
// import Footer from './Footer';
import Footer from '../Footer';
import { Box } from '@mui/system';
import Image from 'mui-image';
import { Button, Divider, Stack, Typography } from '@mui/material';
import admin1 from '../Other_imgs/admin1.svg';
import admin2 from '../Other_imgs/admin2.svg';
import admin3 from '../Other_imgs/admin3.svg';
import admin33 from '../Other_imgs/AdminPage3.svg';
import admin22 from '../Other_imgs/AdminPage2.svg';
import admin11 from '../Other_imgs/AdminPage1.svg';


import { Link } from 'react-router-dom';

export default function AdminHomePage() {
  return (
    <>
    <Box 
    sx={{ 
      backgroundColor:'#e3f2fd',
      py:'3%',
      display:{xs:'none',md:'block'},
      }}>

        <Box sx={{width:'100vw',mb:'3%'}}>
          {/* ......................Importing NavBar Of User Here................... */}
          <Navbar/>
        </Box>

        {/* Shubham admin home page code */}

        <Box sx={{display:'flex', my:'10%'}}>
          
          <Box flex={1} sx={{mb:'-2%'}}>
            <Image src={admin33} alt="img1" style={{borderRadius:5, width:'80vh',height:'66vh'}}></Image>
          </Box>

          <Box flex={1}>
            <Typography 
            sx={{
                fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",
                textAlign:'center',
                mx:'2%',
            }}>
              Now Admin can Easily Monitor New Hospital Entry and Existing hospital data 
            </Typography>
            <Typography 
            sx={{
                fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",
                textAlign:'center',
                mx:'2%',
                paddingTop:'80px',
            }}>
             Personalized Google services for Admin 
            </Typography>
            <Button variant="contained" 
            sx={{
              backgroundColor:'blue',
              color:'white',
              textAlign:'center',
              borderRadius:8,
              fontSize:15,
              mt:'2%'

            }}> <Link to="/GoogleHandles" variant="body2" style={{color: 'white'}}>
                Google
            </Link>
            </Button>

            <Typography 
            sx={{
                fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",
                textAlign:'center',
              
                my:'3%',
                mx:'2%',
            }}>
              SwasthyaOk is now available on all social platforms
            </Typography>
            
            <Button variant="contained" 
            sx={{
              backgroundColor:'blue',
              color:'white',
              textAlign:'center',
              borderRadius:8,
              fontSize:15,

              }}><Link to="/SocialHandles" variant="body2" style={{color: 'white'}}>
                 links....
                </Link>
            </Button>


          </Box>
    </Box>
    <Divider/>
    {/* 2nd svg code */}
    <Box>
            <Box>
            <Typography 
                      sx={{
                        fontSize:22,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'5%'
                      }}>
                    Now By Using "SwasthyaOK"<br/>You Can Easily
                    share all new updates with SwasthyaOk community 
                </Typography>

                     <Button variant="contained" 
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:8,
                      fontSize:15,
                      mt:'2%',
                      mb:'2%',
                      }}><Link to="/DailyUpdates" variant="body2" style={{color: 'white'}}>
                      Share Updates
                      </Link>
                      </Button>

            </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={admin11} alt='img3' style={{borderRadius:5, width:'20vw',height:'35vh'}}></Image>
            </Box>

        </Box>

        <Divider/>

        <Box display={'flex'}>

              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:22,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    paddingTop:12,
                    mt:'10%'
                  }}>
                    
                    Chart support provided for admin<br/>

                  Track statistics of queries generated and queries resolved<br/>
                    Monitoring now made easier
                      <br/>

                  </Typography>
                  <Typography 
                  sx={{
                    fontSize:25,
                    fontFamily:'revert-layer',
                    fontWeight:500,

                  }}>
                    {/*   (For Registration and View List of Treatments Click On Buttton Below)  */}
                  </Typography>
                  <Button variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/ChartView" variant="body2" style={{color: 'white'}}>
                    Chart view
                    </Link>
                  </Button>

              </Box>

              <Box 
                  flex={1}
                  sx={{
                  }}>
                  <Image src={admin22} alt="Hospitalimg2" style={{borderRadius:5, width:'45vw',height:'72vh'}}></Image>
              </Box>

        </Box>

        <Divider/>

        {/* divider */}

        <Box sx={{display:'flex', my:'10%'}}>
          
              <Box flex={1} sx={{mb:'-2%'}}>
                <Image src={admin3} alt="img1" style={{borderRadius:5, width:'300px',height:'450px'}}></Image>
              </Box>

              <Box flex={1}>
                <Typography 
                sx={{
                  fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    mx:'1%',
                    marginTop:'40px'
                }}>
                  In SwasthyaOk Admin Have a Right <br/> To Accept Hospital Registration Request or Deny Request
                </Typography>
                <Typography 
                sx={{
                    fontSize:20,
                    fontFamily:"serif",
                    textAlign:'center',
                    mx:'2%',
                    paddingTop:'80px',
                }}>
                 (For Accept or Deny Request Click on Button Below)
                </Typography>
                <Button variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                  marginTop:3

                  

                  }}>
                    <Link to="/HospitalAuthentcation" variant="body2" style={{color: 'white'}}>
                     Regestration Request
                    </Link>
                </Button>
              


              </Box>
        </Box>
        
        <Divider/>

        <Box>
            <Box>
            <Typography 
                      sx={{
                        fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'5%'
                      }}>
                    Now By Using "SwasthyaOK"<br/>Admin can View Users Query and Revert Respective Email To User
                </Typography>

                <Button variant="contained" 
                      sx={{
                        backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                      mt:'2%',
                      mb:'2%'
                      }}><Link to="/Query" variant="body2" style={{color: 'white'}}>
                      View user queries
                      </Link>
                      </Button>
            </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={admin1} alt='img3' style={{borderRadius:5, width:'35vw',height:'45vh'}}></Image>
            </Box>

        </Box>

        <Divider/>

        <Box display={'flex'}>

              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:22,
                fontFamily:"Arial, Helvetica, sans-serif",  
                    fontWeight:500,
                    mt:'20%',
                    marginTop:'200px'
                  }}>
                   If any Hospital Update there Facility or Treatments <br/> 
                   Then Admin Will be Able To View That Updates<br/>
                   And Approve or Disapprove Appropriately 

                  </Typography>

                  <Button variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/Authorization" variant="body2" style={{color: 'white'}}>
                    Hospital Updates
                    </Link>
                  </Button>

              </Box>

              <Box 
                  flex={1}
                  sx={{
                    my:'3%',
                    mr:'3%',
                    pt:'3%',
                    pb:'5%'
                  }}>
                  <Image src={admin2} alt="Hospitalimg2" style={{borderRadius:5, width:'57vw',height:'74vh'}}></Image>
              </Box>

        </Box>

        <Divider/>
       

        <Box sx={{width:'100vw'}}>
          {/* ........................importing Footer Here........................... */}
          <Footer/>
        </Box>
    </Box>

    {/* .................................................................................... */}
    {/*............................Mobile View....................................*/}
    {/*....................................................................................  */}
    
    <Box 
      sx={{ 
      backgroundColor:'#e3f2fd',
      py:'3%',
      display:{xs:'block',md:'none'}
      }}>

        <Box sx={{width:'100vw',mb:'3%'}}>
          {/* ......................Importing NavBar Of User Here................... */}
          <Navbar/>
        </Box>

        <Box sx={{display:'flex', my:'10%'}}>
            
            <Stack direction={{ xs:'column' }}>

              <Box flex={1} sx={{pt:'5%'}}>
                <Image src={admin3} alt="img1" style={{borderRadius:5, width:'40vh',height:'30vh'}}></Image>
              </Box>

              <Box flex={1}>
                <Typography 
                sx={{
                    fontSize:25,
                    fontFamily:'monospace',
                    textAlign:'center',
                    my:'7%',
                    mx:'2%',
                  
                }}>
                  In SwasthyaOk Admin Have a Right <br/> To Accept Hospital Registration Request or Deny Request
                </Typography>
                <Typography 
                sx={{
                    fontSize:20,
                    fontFamily:"serif",
                    textAlign:'center',
                    mx:'2%',
                    paddingTop:'80px',
                }}>
                 (For Accept or Deny Request Click on Button Below)
                </Typography>
                <Button variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,

                  }}>
                    <Link to="/HospitalAuthentcation" variant="body2" style={{color: 'white'}}>
                     Regestration Request
                    </Link>
                </Button>

                
                <Typography 
                sx={{
                    fontSize:25,
                    fontFamily:'monospace',
                    textAlign:'center',
                    my:'3%',
                    mx:'2%',
                }}>
                  Now By Using "SwasthyaOK"<br/>Admin can View Users Query and Revert Respective Email To User
                </Typography>
                <Button variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  }}><Link to="/Query" variant="body2" style={{color: 'white'}}>
                    View Users Query
                    </Link>
                </Button>

              </Box>
            </Stack>
        </Box>
        
        <Divider/>

        <Box>
            <Box>
            <Typography 
                      sx={{
                        fontSize:30,
                        fontFamily:'serif',
                        fontWeight:500,
                        mt:'5%',
                        ml:3
                      }}>
                    Now By Using "SwasthyaOK"<br/>You Can Update<br/>Your Daily Hospital Data Easily
                </Typography>

                <Button variant="contained" 
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:5,
                      fontSize:15,
                      mt:'2%',
                      mb:'2%'
                      }}><Link to="/View-DailyUpdates" variant="body2" style={{color: 'white'}}>
                      Daily Updates
                      </Link>
                      </Button>
                  </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={admin1} alt='img3' style={{borderRadius:5, width:'50vw',height:'25vh'}}></Image>
            </Box>

        </Box>

        <Divider/>

        <Box display={'flex'}>
          <Stack direction={{ xs:'column' }}>
              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:25,
                    fontFamily:'serif',
                    fontWeight:500,
                    mt:'10%'
                  }}>
                  If any Hospital Update there Facility or Treatments <br/> 
                   Then Admin Will be Able To View That Updates<br/>
                   And Approve or Disapprove Appropriately 

                  </Typography>
                  
                  <Button variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/Authorization" variant="body2" style={{color: 'white'}}>
                    Hospital Updates
                    </Link>
                  </Button>
              </Box>
              <Box 
                  flex={1}
                  sx={{
                    my:'3%',
                    mr:'3%',
                    pt:'3%',
                    pb:'5%'
                  }}>
                  <Image src={admin2} alt="Hospitalimg2" style={{borderRadius:5, width:'60vw',height:'30vh'}}></Image>
              </Box>
            </Stack>
        </Box>

        <Divider/>
       

        <Box sx={{width:'100vw'}}>
          {/* ........................importing Footer Here........................... */}
          <Footer/>
        </Box>
    </Box>

    </>
  )
}
