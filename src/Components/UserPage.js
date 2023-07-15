import React from 'react'
import UserNavbar from './Navbar_user';
import Footer from './Footer';
// import SearchByDisease from './SearchHospitalByDisease/Search'
import { Box } from '@mui/system';
import Image from 'mui-image';
import Img1 from './Other_imgs/userpage1.svg';
import Img2 from './Other_imgs/userpage2.svg';
import Img3 from './Other_imgs/userpage3.svg';
import { Button, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function UserPage() {
  return (
    <>
    <Box sx={{ backgroundColor:'#e3f2fd', width:'100%', display:{xs:'none', md:'block'}}}>
      {/* ......................Importing NavBar Of User Here................... */}
      <UserNavbar/>

      <Divider/>

        <Box sx={{display:'flex'}}>
              <Box flex={1} sx={{ml:'10%', mt:'13%', mb:'9%'}}>
                <Image src={Img1} alt="img1" style={{borderRadius:5, width:'70vh',height:'50vh'}}></Image>
              </Box>

              <Box flex={2}>
                <Typography 
                sx={{
                    fontSize:27,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    mt:'27%',
                }}>
                  Now By Using "SwasthyaOK"<br/>It Is Easy To Search 'Hospital' As Per Your 'Disease'  
                </Typography>
                <Button className="four"
                variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:17,
                  mt:5
                  }}><Link style={{color: 'white'}} variant="body2" to="/SearchByDis">
                    Search Hospital By Disease
                    </Link>
                </Button>
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
                    mt:'5%'
                  }}>
                      "SwasthyaOK" Provides All Information About
                      <br/>"Government Medical Schemes" <br/> & <br/>"Government Health Polices" 
                  </Typography>
                  <Typography 
                  sx={{
                    fontSize:21,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,

                  }}>
                    (For More Information Click On Button Below) 
                  </Typography>
                  <Button className="four"
                  variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:17,
                  mt:'4%'
                  }}>
                  <Link to="/PolicyDescription" variant="body2" style={{color: 'white'}}>
                  Policies-Description
                  </Link>
                  </Button>

              </Box>

              <Box 
                  flex={1}
                  sx={{
                    mt:'3%',
                    mb:'1%'
                  }}>
                  <Image src={Img2} alt="img2" style={{borderRadius:5, width:'30vw',height:'80vh'}}></Image>
              </Box>

        </Box>

        <Divider/>

        <Box>
            
            <Box>
            <Typography 
                      sx={{
                        fontSize:25,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'5%'
                      }}>
                          "SwasthyaOK's" User Faces Any Problem Related To Any Medical Service<br/>At Any Hospital In India,
                          Then We Provide Platform To User<br/>TO Raise Querry Against That Hospital Easily
                </Typography>
                <Typography 
                      sx={{
                        fontSize:21,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'2%'
                      }}>
                        (For Raising Querry Against Hospital Click Button Below) 
                </Typography>

                <Button 
                className="four"
                variant="contained" 
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:8,
                      fontSize:17,
                      mt:'2%'
                      }}><Link style={{color: 'white'}} variant="body2" to="/RaiseQuery">
                      Raise Query
                      </Link>
                      </Button>
            </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={Img3} alt='img3' style={{marginTop:26,borderRadius:5, width:'30vw',height:'45vh'}}></Image>
            </Box>

        </Box>

        <Divider/>
          {/* ........................importing Footer Here........................... */}
        <Footer/>

    </Box>

{/* ________________________________________________________________________________________________________________ */}
{/* ________________________________________________________________________________________________________________ */}
{/* __________________________________________MOBILE VIEW___________________________________________________________ */}
{/* ________________________________________________________________________________________________________________ */}


    <Box sx={{ backgroundColor:'#e3f2fd', width:'100%',display:{xs:'block', md:'none'}}}>
      {/* ......................Importing NavBar Of User Here................... */}
      <UserNavbar/>

      <Divider/>

        <Box sx={{display:'column'}}>
              <Box flex={1} sx={{ mt:'20%', mb:'9%'}}>
                <Image src={Img1} alt="img1" style={{borderRadius:5, width:'40vh',height:'30vh'}}></Image>
              </Box>

              <Box>
                <Typography 
                sx={{
                    fontSize:27,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    textAlign:'center',
                    mt:'10%',
                }}>
                  Now By Using "SwasthyaOK"<br/>It Is Easy To Search 'Hospital' As Per Your 'Disease'  
                </Typography>
                <Button className="four"
                variant="contained" 
                sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:17,
                  mt:5
                  }}><Link style={{color: 'white'}} variant="body2" to="/SearchByDis">
                    Search Hospital By Disease
                    </Link>
                </Button>
              </Box>
        </Box>

        <Divider/>
        <Divider/>

        <Box>
              <Box flex={2}>
                  <Typography 
                  sx={{
                    fontSize:27,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,
                    mt:'15%'
                  }}>
                      "SwasthyaOK" Provides All Information About
                      <br/>"Government Medical Schemes" <br/> & <br/>"Government Health Polices" 
                  </Typography>
                  <Typography 
                  sx={{
                    fontSize:21,
                    fontFamily:"Arial, Helvetica, sans-serif",
                    fontWeight:500,

                  }}>
                    (For More Information Click On Button Below) 
                  </Typography>
                  <Button className="four"
                  variant="contained" 
                  sx={{
                  backgroundColor:'blue',
                  color:'white',
                  textAlign:'center',
                  borderRadius:8,
                  fontSize:17,
                  mt:'4%'
                  }}>
                  <Link to="/PolicyDescription" variant="body2" style={{color: 'white'}}>
                  Policies-Description
                  </Link>
                  </Button>

              </Box>

              <Box 
                  flex={1}
                  sx={{
                    mt:'10%',
                    mb:'10%'
                  }}>
                  <Image src={Img2} alt="img2" style={{borderRadius:5, width:'75vw',height:'42vh'}}></Image>
              </Box>

        </Box>

        <Divider/>
        <Divider/>

        <Box>
            
            <Box>
            <Typography 
                      sx={{
                        fontSize:25,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'5%'
                      }}>
                          "SwasthyaOK's" User Faces Any Problem Related To Any Medical Service<br/>At Any Hospital In India,
                          Then We Provide Platform To User<br/>TO Raise Querry Against That Hospital Easily
                </Typography>
                <Typography 
                      sx={{
                        fontSize:21,
                        fontFamily:"Arial, Helvetica, sans-serif",
                        fontWeight:500,
                        mt:'2%'
                      }}>
                        (For Raising Querry Against Hospital Click Button Below) 
                </Typography>

                <Button 
                className="four"
                variant="contained" 
                      sx={{
                      backgroundColor:'blue',
                      color:'white',
                      textAlign:'center',
                      borderRadius:8,
                      fontSize:17,
                      mt:'2%'
                      }}><Link style={{color: 'white'}} variant="body2" to="/RaiseQuery">
                      Raise Query
                      </Link>
                      </Button>
            </Box>

            <Box sx={{ pb:'2%'}}>
              <Image src={Img3} alt='img3' style={{marginTop:26, width:'85vw',height:'35vh'}}></Image>
            </Box>

        </Box>

        <Divider/>
        <Divider/>


          {/* ........................importing Footer Here........................... */}
        <Footer/>

    </Box>
    
    </>
  )}
  