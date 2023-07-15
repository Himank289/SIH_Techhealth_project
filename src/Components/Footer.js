import React from 'react'
import { Box, Divider, Link, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Footer() {
  return (


    <Box>
            {/* for md and greater devices this footer is visible */}
            <Box
                sx={{
                    // this is a responsive property
                    mt:'-0.5%',
                    mb:'-2%',
                    display:{xs:'none',md:'block'},
                    backgroundColor:'#edf2f4',
                    color:'black',
                    minWidth:'100%',
                    minHeight:'100%',
                  }}>
                    
                    <Box 
                          sx={{
                              display: 'flex',
                              textAlign:'center',
                              justifyContent:'space-evenly',
                            }}>
                            {/* contact box  */}
                            <Box 
                            sx={{
                              textAlign:'left',
                            }}>
                              <Typography
                                  sx={{
                                    fontSize:25,
                                    fontWeight:'',
                                    mt:'10%',
                                    paddingTop:1,
                                   
                                  }}>
                              Contact</Typography>

                              <Typography
                                  sx={{
                                    fontSize:19,
                                    fontWeight:'',
                                    mt:'10%',
                                  }}>
                              Address:</Typography>
                              <Typography style={{fontSize:"12px"}}>AISSMS IOIT<br/>  Place-Pune</Typography>

                              <Typography
                                  sx={{
                                    fontSize:18,
                                    fontWeight:'',
                                    paddingTop:1
                                  }}>
                              Toll-free-number:</Typography>
                              <Typography style={{fontSize:"12px"}}>0000000000</Typography>

                              <Typography
                                  sx={{
                                    fontSize:18,
                                    fontWeight:'',
                                    paddingTop:1
                                  }}>
                                Email:</Typography>
                              <Typography >swasthyaoksih.com</Typography>  
                            </Box>
                            
                            {/* Important link box  */}
                            <Box 
                            sx={{
                                textAlign:'left',
                            }}>
                              <Typography
                                  sx={{
                                    fontSize:25,
                                    fontWeight:'',
                                    mt:'10%',

                                    
                                  }}>
                              Important Links</Typography>

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:'',
                                    mt:'10%',
                                  }}>
                              <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Ministry of Health and Family Welfare</Link></Typography>
                          

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:''
                                  }}>
                                  <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Ayushman Bharat Health Account<br/>(ABHA)</Link>
                              </Typography>
                            

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:''
                                  }}>
                                  <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Healthcare Professionals Registry<br/>(HPR)</Link>
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Health Facility Registry<br/>(HFR)</Link>
                              </Typography>

                            <Typography
                              sx={{
                                fontSize:15,
                                fontWeight:''
                              }}>
                              <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Grievance Portal</Link>
                            </Typography>   
                            </Box>
                            

                            {/* policies box  */}
                            <Box 
                            sx={{
                              textAlign:'left',
                            }}>
                              <Typography
                                  sx={{
                                    fontSize:25,
                                    fontWeight:'',
                                    mt:'10%',
                                  }}>
                              Policies</Typography>

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:'',
                                    mt:'10%',
                                  }}>
                              <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Terms and Conditions</Link>
                              </Typography>

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:''
                                  }}>
                              <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Website Policy</Link>
                              </Typography>

                              <Typography
                                  sx={{
                                    fontSize:15,
                                    fontWeight:''
                                  }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Data Privacy Policy</Link>
                                </Typography>


                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                              <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Health Data Management Policy</Link>
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>ABDM Health Records(PHR)<br/>Mobile App Privacy Policy</Link>
                                </Typography>
                            </Box>
                            



                            {/* help and support box  */}
                            <Box 
                            sx={{
                              textAlign:'left',
                            }}>
                              <Typography
                                sx={{
                                  fontSize:25,
                                  fontWeight:'', 
                                  mt:'10%',
                                }}>
                               Help And Support
                              </Typography>
                              
                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:'',
                                  mt:'10%',
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Help</Link>
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Feedback</Link>
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Terms & Conditions</Link>
                              </Typography>
                       
                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Contact Us</Link>
                              </Typography>

                              <Typography
                              sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Site Map</Link>
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Weekly Newsletter</Link>
                              </Typography>
                       
                              <Typography
                                sx={{
                                  fontSize:15,
                                  fontWeight:''
                                }}>
                                <Link sx={{color:'black',cursor:'pointer',textDecoration:'none'}}>Web Information Manager</Link>
                              </Typography> 
                            </Box>
                    
                    </Box>

                    
                    <Box 
                    sx={{
                          textAlign:'center',
                          backgroundColor:'#edf2f4'
                    }}>
                      <hr/>
                      <Box>
                        <FacebookIcon sx={{fontSize:50, mx:'2%'}}/>
                        <TwitterIcon sx={{fontSize:50, mx:'2%'}}/>
                        <WhatsappIcon sx={{fontSize:50, mx:'2%'}}/>
                        <InstagramIcon sx={{fontSize:50, mx:'2%'}}/>
                      </Box>
                      <Typography
                      sx={{
                        mt:'2%',
                      }}>
                      SwasthyaOk &copy; {new Date().getFullYear()}
                      </Typography>
                      <Typography>
                            
                      </Typography>
                      
                    </Box>
            
            
            </Box>
            
            {/* for lower than md devices this footer is visible */}
            <Box
                sx={{
                  display:{xs:'block',md:'none'},
                }}>

                <Box>
                      <Box 
                          sx={{
                            backgroundColor:'snow',
                            color:'black',
                            display:'flex',
                            textAlign:'center',
                            justifyContent:'space-evenly',
                            mb:'-2%',
                            mt:'-1%',
                            py:'5%',

                          }}>

                            <Typography>
                            <Link sx={{fontSize:25,mxy:'3%',fontWeight:'', color:'black',cursor:'pointer',textDecoration:'none'}}>Contact</Link>
                            </Typography>


                            <Typography>
                            <Link sx={{fontSize:25,mxy:'3%', fontWeight:'', color:'black',cursor:'pointer',textDecoration:'none'}}>Links</Link>
                            </Typography>


                            <Typography>
                            <Link sx={{fontSize:25,mxy:'3%', fontWeight:'', color:'black',cursor:'pointer',textDecoration:'none'}}>Policies</Link>
                            </Typography>


                            <Typography>
                            <Link sx={{fontSize:25,mxy:'3%', fontWeight:'', color:'black',cursor:'pointer',textDecoration:'none'}}>Help</Link>
                            </Typography>
   
                      </Box>

                        
                        { /* footer bottom */}
                      <Box 
                      sx={{
                        textAlign:'center',
                        backgroundColor:'snow',
                        color:'black'
                      }}>
                      <Divider/>
                      <Box sx={{mt:'3%'}} >
                        <FacebookIcon sx={{fontSize:40, mx:'2%'}}/>
                        <TwitterIcon sx={{fontSize:40, mx:'2%'}}/>
                        <WhatsappIcon sx={{fontSize:40, mx:'2%'}}/>
                        <InstagramIcon sx={{fontSize:40, mx:'2%'}}/>
                      </Box>
                        <Typography sx={{mt:'3%'}}>
                      SwasthyaOk &copy; {new Date().getFullYear()}
                      </Typography>

                      </Box>
                      
                </Box>

            </Box>

    </Box>   


  )
}


