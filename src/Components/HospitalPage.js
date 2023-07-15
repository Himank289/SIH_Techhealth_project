import React from 'react'
import HospitalNavbar from './HospNavBar';
import Footer from './Footer';
import { Box } from '@mui/system';
import Image from 'mui-image';
import { Button, Divider, Stack, Typography } from '@mui/material';
import HospImg1 from './Other_imgs/HospitalPage1.svg';
import HospImg2 from './Other_imgs/HospitalPage2.svg';
import HospImg3 from './Other_imgs/HospitalPage3.svg';
import { Link } from 'react-router-dom';
import index from '../index.css';

export default function UserPage() {
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
          <HospitalNavbar/>
        </Box>

        <Box sx={{display:'flex', my:'10%'}}>
          
              <Box flex={1} sx={{mb:'-2%'}}>
                <Image src={HospImg3} alt="img1" style={{borderRadius:5, width:'80vh',height:'60vh'}}></Image>
              </Box>

              <Box flex={1}>
                <Typography 
                sx={{
                    fontSize:23,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    mx:'2%',
                }}>
                  Through "SwasthyaOK" Hospital User Easily Add Doctor Details, For New Doctor Entry 
                </Typography>
                <Button 
                className="three"
                variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                  mt:'5%',


                }}> <Link to="/AddDoctor" variant="body2" style={{color: 'white'}}>
                    Add Doctor
                </Link>
                </Button>

                <Typography 
                sx={{
                    fontSize:23,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    my:'3%',
                    mx:'2%',
                }}>
                  Also Hospital User Can View<br/> List Of Doctors By Clicking Button Below
                </Typography>
                <Button className="three"
                 variant="contained" 
                
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:15,
                  marginTop:'15px'

                  }}><Link to="/ViewDoctorList" variant="body2" style={{color: 'white'}}>
                    View Doctor List
                    </Link>
                </Button>


              </Box>
        </Box>
        
        <Divider/>

        <Box>
            <Box>
            <Typography 
                      sx={{
                        fontSize:23,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:400,
                        mt:'5%'
                      }}>
                    Now By Using "SwasthyaOK"<br/>You Can Update Your Daily Hospital Data Easily
                </Typography>

                <Button className="three"
                variant="contained" 
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:8,
                      fontSize:18,
                      mt:'2%',
                      mb:'2%'
                      }}><Link to="/ViewDailyUpdates" variant="body2" style={{color: 'white'}}>
                      Daily Updates
                      </Link>
                      </Button>
            </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={HospImg1} alt='img3' style={{borderRadius:5, width:'20vw',height:'35vh'}}></Image>
            </Box>

        </Box>

        <Divider/>

        <Box display={'flex'}>

              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:27,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    mt:'8%',
                    font:'bold'
                    
                  }}>
                   <br/>
                    Congratulations

                  </Typography>
                      <Typography 
                  sx={{
                    fontSize:23,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    mt:'0%'
                  }}>
                   <br/>
                    Your Hospital Has Started a New Treatment<br/>
                    Do Resgister Your New Treatment On "SwasthyaOK"<br/>

                  </Typography>
                  <Typography 
                  sx={{
                    fontSize:25,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    marginTop:6

                  }}>
                    (For Registration and View List of Treatments Click On Buttton Below) 
                  </Typography>
                  <Button className="three"
                   variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:18,
                  mt:'4%'
                  }}><Link to="/ViewTreatment" variant="body2" style={{color: 'white'}}>
                    View Treatment
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
                  <Image src={HospImg2} alt="Hospitalimg2" style={{borderRadius:5, width:'36vw',height:'72vh'}}></Image>
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
          <HospitalNavbar/>
        </Box>

        <Box sx={{display:'flex', my:'10%'}}>
            
            <Stack direction={{ xs:'column' }}>

              <Box flex={1} sx={{pt:'5%'}}>
                <Image src={HospImg3} alt="img1" style={{borderRadius:5, width:'30vh',height:'21vh'}}></Image>
              </Box>

              <Box flex={1}>
                <Typography 
                sx={{
                    fontSize:25,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    my:'7%',
                    mx:'2%',
                }}>
                  Through "SwasthyaOK" Hospital User Easily Add Doctor Details, For New Doctor Entry 
                </Typography>
                <Button className='three'
                 variant="contained" 
                
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  my:'-3%'

                  }}><Link to="/AddDoctor" variant="body2" style={{color: 'white'}}>
                    Add Doctor
                    </Link>
                </Button>

                
                <Typography 
                sx={{
                    fontSize:25,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    my:'3%',
                    mx:'2%',
                }}>
                  Also Hospital User Can View<br/>List Of Doctors By Clicking Button Below
                </Typography>
                <Button variant="contained" 
                className='three'
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  }}><Link to="/ViewDoctorList" variant="body2" style={{color: 'white'}}>
                    View Doctor List
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
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'5%',
                        ml:3
                      }}>
                    Now By Using "SwasthyaOK"<br/>You Can Update<br/>Your Daily Hospital Data Easily
                </Typography>

                <Button 
                className='three'
                variant="contained" 
                
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:5,
                      fontSize:15,
                      mt:'2%',
                      mb:'2%'
                      }}><Link to="/ViewDailyUpdates" variant="body2" style={{color: 'white'}}>
                      Daily Updates
                      </Link>
                      </Button>
                  </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={HospImg1} alt='img3' style={{borderRadius:5, width:'50vw',height:'20vh'}}></Image>
            </Box>

        </Box>

        <Divider/>

        <Box display={'flex'}>
          <Stack direction={{ xs:'column' }}>
              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:25,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    mt:'10%'
                  }}>
                    Congratulations!<br/>
                    Your Hospital Has Started a New Treatment<br/>
                    Do Resgister Your New Tratement On "SwasthyaOK"<br/>

                  </Typography>
                  <Typography 
                  sx={{
                    fontSize:15,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,

                  }}>
                    (For Registration and View List of Treatments Click On Buttton Below) 
                  </Typography>
                  <Button className='three'
                  variant="contained" 

                  
                  sx={{
                  // backgroundColor:'blue',
                  color:'white',
                  backgroundImage: "linear-gradient(to right top, #6295e1, #5183e3, #4970e2, #4c5bde, #5841d6)",
                  textAlign:'center',
                  borderRadius:5,
                  fontSize:15,
                  mt:'4%'
                  }}><Link to="/ViewTreatment" variant="body2" style={{color: 'white'}}>
                    View Treatment
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
                  <Image src={HospImg2} alt="Hospitalimg2" style={{borderRadius:5, width:'60vw',height:'20vh'}}></Image>
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
