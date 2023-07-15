import React from 'react'
import Navbar from './Navbar'
// import Slider from './Slider/Slider';
import Footer from './Footer';
import {Avatar, Box, Button, Divider, Stack, Typography} from '@mui/material';
import Front_Image from './Other_imgs/Logoimage/logo.jpg';
import Image from 'mui-image';
import medical_avatar from './Other_imgs/medical.jpg';
import Slider from './Slider';
import Reg_img from '../Components/Other_imgs/hospital.png';
import { Link } from 'react-router-dom';
import Header from './Header'
// import UserChart from './UserCharts'


export default function Homepage() {


  return (
  <>
    <Box>
    {/*---------- importing navbar here------------ */}
    <Navbar/>
    <Box>
      <Header/>
    </Box>

    {/* ---------------------------------image and welcome text box start------------------------- */}
    <Box style={{backgroundColor:'#eeeeee'}} >
      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, md: 2 }}
        justifyContent='space-between'
      >
          <Box flex={1}
            sx={{
              display:{xs:'none',md:'block'},
              // p:'2px',
              py:'8%',
              ml:'9%'
            }}>
          <Image src={Front_Image} alt='home-page-logo' sx={{borderRadius:'15px'}} height={'65vh'} width={'65vh'} />
          </Box>

          <Box 
              flex={2}
              sx={{
                display:{xs:'block'},
                // direction:'column'
              }}>
                {/* logo image insertion */}
              <Avatar src={medical_avatar} alt="medical represent" 
                sx={{
                  width:{xs:'25vw' ,md:'10vw'},
                  height:{xs:'15vh' ,md:'22vh'},
                  marginLeft:{xs:'38%' ,md:'41%'},
                  marginTop:{xs:'10%' ,md:'10%'},
                  marginBottom:{xs:'15%' ,md:'5%'}
                }}>
              </Avatar>


                {/* welcome... text start */}
          
            <Typography 
            sx={{
            fontSize:{xs:20, md:30 },
            alignContent:'center',
        
            fontFamily:'Arial, Helvetica, sans-serif',
            color:'black',
            }}>
            Welcome to SwasthyaOk <br/>
            India's No.1 Health Portal
      
            </Typography>
            
   
            <Typography 
            sx={{
            fontSize:{xs:20, md:22 },
            alignContent:'center',
        
            fontFamily:'Arial, Helvetica, sans-serif',
            color:'black',
            }}>
           
            we provide one stop  solution for users and hospitals
            </Typography>

            <Typography 
            marginTop={7}
            sx={{
            fontSize:{xs:20, md:17 },
            alignContent:'center',
        
            fontFamily:'Arial, Helvetica, sans-serif',
            color:'#263238',
            }}>
           
            Emergency service access for critical situation
            <br/>
            Policies offered by Private and Government sectors
            <br/>
            Regulated prices by Government

            </Typography>
            <Link style={{color: 'white'}} to="/SignUp" variant="body2">
              <Button variant="contained"
            sx={{
                borderRadius:8,
                p:'1.5%',
                mt:'3%',
                mb:'10%',
            }}>
            Registeration</Button></Link>
          </Box>

          
          {/* here welcome.. text end */}
      </Stack>

    </Box>
{/* -------------------------------------------------------------------------------------------- */}
{/* ----------------------------------Slider---------------------------------------------------- */}
{/* -------------------------------------------------------------------------------------------- */}


{/* <Box sx={{ backgroundColor:'#eeeeee',width:'100%',pb:'-5%'}}>
    <Slider/> 
    </Box> */}


    {/* ------------------------------welcome and image box end----------------------------------- */}
    <Divider/>
    {/* ------------------------------4simple steps Box star--------------------------------------- */}
    <Box sx={{ backgroundColor:'#eeeeee',width:'100vw'}}>
          <Box>
              <Typography
              sx={{
                width:'100%',
                color:'black',
                mb:'5%',
                mt:-1,
                pt:'5%',
                fontFamily:"Arial, Helvetica, sans-serif",
 
                fontSize:{xs:20, md:30},
                lineHeight:0,
                alignItems:'center',
                fontWeight:'600'
              }}>
                4 Simple Steps Of User-Registeration
              </Typography>
          </Box>
        <Box>
          <Stack 
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 2 }}
                justifyContent='space-evenly'
              >
              <Box flex={1} >
              <Avatar 
              className='one'
              variant='square' 
              sx={{
                borderRadius: 10,
                bgcolor:'#cc2b5e',
                marginLeft:{xs:'45%',md:'40%'},
                width:{xs:'10vw',md:'5vw'},
                height:{xs:'5vh',md:'10vh'},
                my:{xs:'3%',md:'10%'},
              }}>
              1</Avatar>
              <Typography 
              sx={{
                  fontSize:{xs:20,md:20},
                  fontFamily:'Arial, Helvetica, sans-serif',
                  color:'black',
              }}>
              Click On Login Button <br/>Then<br/>Enter Your Mobile Number</Typography>
              </Box>

              <Box flex={1}>
              <Avatar 
              className='one'
              variant='square' 
              sx={{
                borderRadius: 10,
                bgcolor:'black',
                marginLeft:{xs:'45%',md:'40%'},
                width:{xs:'10vw',md:'5vw'},
                height:{xs:'5vh',md:'10vh'},
                my:{xs:'3%',md:'10%'},
              }}>
              2</Avatar>
              <Typography
              sx={{
                    fontSize:{xs:20,md:20},
                    fontFamily:'Arial, Helvetica, sans-serif',
                    color:'black',
                }}>
              We Send You An OTP<br/>Enter That OTP<br/>For Verification</Typography>
              </Box>
              
              <Box flex={1}>
              <Avatar 
              className='one'
              variant='square' 
              sx={{
                borderRadius: 10,
                bgcolor:'black',
                marginLeft:{xs:'45%',md:'40%'},
                width:{xs:'10vw',md:'5vw'},
                height:{xs:'5vh',md:'10vh'},
                my:{xs:'3%',md:'10%'},
              }}>
              3</Avatar>
              <Typography 
              sx={{
                    fontSize:{xs:20,md:20},
                    fontFamily:'Arial, Helvetica, sans-serif',
                    color:'black',
                }}>
              After Verification<br/>Fill Your Other<br/>Basic Information</Typography>
              </Box>

              <Box flex={1}>
              <Avatar 
              className='one'
              variant='square' 
              sx={{
                borderRadius: 10,
                bgcolor:'black',
                marginLeft:{xs:'45%',md:'40%'},
                width:{xs:'10vw',md:'5vw'},
                height:{xs:'5vh',md:'10vh'},
                my:{xs:'3%',md:'10%'},
              }}>
              4</Avatar> 
              <Typography
              sx={{
                    fontSize:{xs:20,md:20},
                    fontFamily:'Arial, Helvetica, sans-serif',
                    color:'black',
                    mb:{xs:'10%', md:'20%'}
                  }}>
              ! Congratulations !<br/>Now You Can Easily<br/>Access Our Services</Typography>
              </Box> 

          </Stack>
        </Box>
    </Box>

    <Divider/>

    {/* <UserChart/> */}

    {/* ---------------------------------------4simple steps box end--------------------------------------- */}
    <Divider/>
    {/* ---------------------------------------slider start here--------------------------------------- */}
    {/* <Box sx={{ backgroundColor:'#eeeeee',width:'100%',pb:'5%'}}>
    <Slider/> 
    </Box>
    {/* ---------------------------------------Slider End here--------------------------------------- */}
    <Divider/> 
    {/* ---------------------------------------Hospital registration Process start--------------------------------------- */}
    <Box sx={{ backgroundColor:'#eeeeee'}}>
      {/* ..........tag line......... */}
      <Box style={{marginLeft:'130px'}}>
      <Typography 
            sx={{ 
              backgroundColor:'',
              fontSize:{xs:20, md:26},
              textAlign:'center',
              fontFamily:'Arial, Helvetica, sans-serif',
              color:'black',
              pt:{xs:"0%",md:'4%'},
              pb:{xs:"0%",md:'1%'},
              // mr:{xs:'10%'}
              pr:{xs:'40%'},
              fontWeight:{xs:'600'}
            }}>
            Now It's Very Easy To Register Your Hospital On "SwasthyaOK"
            </Typography>
      </Box>
      {/* ......................image and steps...................... */}
      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        justifyContent='space-between'
        backgroundColor={''}
        >
          {/* <------------------------Left side box <--------------------- */}
          <Box flex={1} style={{marginTop:'10px'}}>
            <Typography 
            sx={{ 
                  fontSize:{xs:18, md:18 },
                  textAlign:'center',
                  mt:{md:'10%'},
                  fontWeight:'6', 
                  fontFamily:'Arial, Helvetica, sans-serif',
                  color:'black',
                  marginTop:{md:'-3%'}
                }}> 

            <Avatar  className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064',}}>1</Avatar>            
            Enter Hospital Registration Button<br/>
            Fill All Details Of Your Hospital And Submit.
            
            <Avatar className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064'}}>2</Avatar>            
            After Successful Registration<br/>
            You Get An Email with Login Crediantials
            
            <Avatar className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064'}}>3</Avatar>
            Enter Login Crediantials<br/>
            Congratulations!...<br/>Now Your Hospital Is Registered Successfully
            
            </Typography>
                {/*--------- hospital Reg. button-------- */}
           
            <Link style={{color: 'white'}} to="/HospitalSignUp" variant="body2">
            <Button variant="contained" 
            className="two"
            sx={{
                
                borderRadius:8,
                p:'1.5%',
                mt:'3%',
                mb:'3%',
               marginTop:'30px',
               
                backgroundColor:'#006064',
            }}>
            Hospital Registration</Button></Link>
          </Box>

          {/* ----------> Righttside Box-------> */}

          <Box flex={1}
                  sx={{
                    display:{md:'block'},
                    // p:'2px',
                    pt:'3%',
                    pb:'5%',
                    
                  }}>
                <Box style={{paddingRight:"30px"}}>
                      <Image src={Reg_img} alt='registration-hospital-image'
                        sx={{
                          borderRadius:8,
                        }}/>
                </Box>    
          </Box>

      </Stack>
    </Box>
    {/* ---------------------------------------Hospital registration Process End--------------------------------------- */}
    <Divider/>
    {/* -----------------importing footer here------------ */}
    <Footer/>
    </Box>
  </>

)}






// import React from 'react'
// import Navbar from './Navbar'
// // import Slider from './Slider/Slider';
// import Footer from './Footer';
// import {Avatar, Box, Button, Divider, Stack, Typography} from '@mui/material';
// import Front_Image from './Other_imgs/Logoimage/logo.jpg';
// import Image from 'mui-image';
// import medical_avatar from './Other_imgs/medical.jpg';
// import Slider from './Slider';
// import Reg_img from '../Components/Other_imgs/hospital.png';
// import { Link } from 'react-router-dom';
// import Header from './Header';



// export default function Homepage() {


//   return (
//   <>
//     <Box sx={{backgroundColor:''}}>
//     {/*---------- importing navbar here------------ */}
//     <Navbar/>
//     <Header/>



//     {/* ---------------------------------image and welcome text box start------------------------- */}
//     <Box style={{backgroundColor:'#eeeeee'}} >
//       <Stack 
//         direction={{ xs: 'column', md: 'row' }}
//         spacing={{ xs: 1, sm: 2 }}
//         justifyContent='space-between'
//       >
//           <Box flex={1}
//             sx={{
//               display:{xs:'none',md:'block'},
//               // p:'2px',
//               py:'6%',
//               ml:'9%',
//             }}>
//           <Image src={Front_Image} alt='home-page-logo' sx={{borderRadius:'15px'}} height={'55vh'} width={'55vh'}  />
//           </Box>

//           <Box 
//               flex={3}
//               sx={{
//                 display:{xs:'block'},
//                 // direction:'column'
//               }}>
//                 {/* logo image insertion */}
//               <Avatar src={medical_avatar} alt="medical represent" 
//                 sx={{
//                   width:{xs:'25vw' ,md:'10vw'},
//                   height:{xs:'15vh' ,md:'22vh'},
//                   marginLeft:{xs:'38%' ,md:'41%'},
//                   marginTop:{xs:'15%' ,md:'3%'},
//                   marginBottom:{xs:'15%' ,md:'3%'}
//                 }}>
//               </Avatar>
//                 {/* welcome... text start */}
          
      

//             <Typography 
//             sx={{
//             fontSize:{xs:30, md:30 },
//             alignContent:'center',
        
//             fontFamily:'Arial, Helvetica, sans-serif',
//             color:'black',
//             }}>
//             Welcome to SwasthyaOk 
//             India's No.1 Health Portal<br/>
      
//             </Typography>
            
   
//             <Typography 
//             sx={{
//             fontSize:{xs:30, md:22 },
//             alignContent:'center',
        
//             fontFamily:'Arial, Helvetica, sans-serif',
//             color:'black',
//             }}>
           
//             we provide one stop  solution for users and hospitals
//             </Typography>

//             <Typography 
//             marginTop={4}
//             sx={{
//             fontSize:{xs:30, md:17 },
//             alignContent:'center',
        
//             fontFamily:'Arial, Helvetica, sans-serif',
//             color:'#263238',
//             }}>
           
//             Emergency service access for critical situation
//             <br/>
//             Policies offered by Private and Government sectors
//             <br/>
//             Regulated prices by Government

//             </Typography>
//             <Link style={{color: 'white'}} to="/SignUp" variant="body2">
//               <Button variant="contained"
//             sx={{
//                 borderRadius:8,
//                 p:'1.5%',
//                 mt:'2%',
//                 mb:'10%',
//             }}>
//             Registeration</Button></Link>
//           </Box>

          
//           {/* here welcome.. text end */}
//       </Stack>

//     </Box>
//     {/* ------------------------------welcome and image box end----------------------------------- */}
//     <Divider/>
//     {/* ------------------------------4simple steps Box star--------------------------------------- */}
//     <Box sx={{ backgroundColor:'#eeeeee',width:'100vw'}}>
//           <Box>
//               <Typography
//               sx={{
//                 width:'100%',
//                 color:'black',
//                 mb:'5%',
//                 mt:-1,
//                 pt:'5%',
//                 fontFamily:"Arial, Helvetica, sans-serif",
 
//                 fontSize:{xs:30, md:30},
//                 lineHeight:0,
//                 alignItems:'center',
//               }}>
//                 4 Simple Steps Of User-Registeration
//               </Typography>
//           </Box>
//         <Box>
//           <Stack 
//                 direction={{ xs: 'column', md: 'row' }}
//                 spacing={{ xs: 1, md: 2 }}
//                 justifyContent='space-evenly'
//               >
//               <Box flex={1} >
//               <Avatar 
//               className='one'
//               variant='square' 
//               sx={{
//                 borderRadius: 10,
//                 bgcolor:'#cc2b5e',
//                 marginLeft:{xs:'45%',md:'40%'},
//                 width:{xs:'10vw',md:'5vw'},
//                 height:{xs:'5vh',md:'10vh'},
//                 my:{xs:'3%',md:'10%'},
//               }}>
//               1</Avatar>
//               <Typography 
//               sx={{
//                   fontSize:{xs:25,md:20},
//                   fontFamily:'Arial, Helvetica, sans-serif',
//                   color:'black',
//               }}>
//               Click On Login Button <br/>Then<br/>Enter Your Mobile Number</Typography>
//               </Box>

//               <Box flex={1}>
//               <Avatar 
//               className='one'
//               variant='square' 
//               sx={{
//                 borderRadius: 10,
//                 bgcolor:'black',
//                 marginLeft:{xs:'45%',md:'40%'},
//                 width:{xs:'10vw',md:'5vw'},
//                 height:{xs:'5vh',md:'10vh'},
//                 my:{xs:'3%',md:'10%'},
//               }}>
//               2</Avatar>
//               <Typography
//               sx={{
//                     fontSize:{xs:25,md:20},
//                     fontFamily:'Arial, Helvetica, sans-serif',
//                     color:'black',
//                 }}>
//               We Send You An OTP<br/>Enter That OTP<br/>For Verification</Typography>
//               </Box>
              
//               <Box flex={1}>
//               <Avatar 
//               className='one'
//               variant='square' 
//               sx={{
//                 borderRadius: 10,
//                 bgcolor:'black',
//                 marginLeft:{xs:'45%',md:'40%'},
//                 width:{xs:'10vw',md:'5vw'},
//                 height:{xs:'5vh',md:'10vh'},
//                 my:{xs:'3%',md:'10%'},
//               }}>
//               3</Avatar>
//               <Typography 
//               sx={{
//                     fontSize:{xs:25,md:20},
//                     fontFamily:'Arial, Helvetica, sans-serif',
//                     color:'black',
//                 }}>
//               After Verification<br/>Fill Your Other<br/>Basic Information</Typography>
//               </Box>

//               <Box flex={1}>
//               <Avatar 
//               className='one'
//               variant='square' 
//               sx={{
//                 borderRadius: 10,
//                 bgcolor:'black',
//                 marginLeft:{xs:'45%',md:'40%'},
//                 width:{xs:'10vw',md:'5vw'},
//                 height:{xs:'5vh',md:'10vh'},
//                 my:{xs:'3%',md:'10%'},
//               }}>
//               4</Avatar> 
//               <Typography
//               sx={{
//                     fontSize:{xs:25,md:20},
//                     fontFamily:'Arial, Helvetica, sans-serif',
//                     color:'black',
//                     mb:{xs:'10%', md:'20%'}
//                   }}>
//               ! Congratulations !<br/>Now You Can Easily<br/>Access Our Services</Typography>
//               </Box> 

//           </Stack>
//         </Box>
//     </Box>
//     {/* ---------------------------------------4simple steps box end--------------------------------------- */}
//     <Divider/>
//     {/* ---------------------------------------slider start here--------------------------------------- */}
//     {/* <Box sx={{ backgroundColor:'#eeeeee',width:'100%',pb:'5%'}}>
//     <Slider/> 
//     </Box>
//     {/* ---------------------------------------Slider End here--------------------------------------- */}
//     <Divider/> 
//     {/* ---------------------------------------Hospital registration Process start--------------------------------------- */}
//     <Box sx={{ backgroundColor:'#eeeeee'}}>
//       {/* ..........tag line......... */}
//       <Box style={{marginLeft:'130px'}}>
//       <Typography 
//             sx={{ 
//               backgroundColor:'',
//               fontSize:{xs:10, md:26},
//               textAlign:'center',
              
//               fontFamily:'Arial, Helvetica, sans-serif',
//               color:'black',
//               px:'3%',
//               pt:{xs:"7%",md:'4%'},
//               pb:{xs:"7%",md:'1%'}
//             }}>
//             Now It's Very Easy To Register Your Hospital On "SwasthyaOK"
//             </Typography>
//       </Box>
//       {/* ......................image and steps...................... */}
//       <Stack 
//         direction={{ xs: 'column', md: 'row' }}
//         spacing={{ xs: 1, sm: 2 }}
//         justifyContent='space-between'
//         backgroundColor={''}
//         >
//           {/* <------------------------Left side box <--------------------- */}
//           <Box flex={1} style={{marginTop:'10px'}}>
//             <Typography 
//             sx={{ 
//                   fontSize:{xs:15, md:18 },
//                   textAlign:'center',
//                   mt:{md:'10%'},
//                   fontWeight:'6', 
//                   fontFamily:'Arial, Helvetica, sans-serif',
//                   color:'black',
//                   marginTop:{md:'-3%'}
//                 }}> 

//             <Avatar  className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064',}}>1</Avatar>            
//             Enter Hospital Registration Button<br/>
//             Fill All Details Of Your Hospital And Submit.
            
//             <Avatar className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064'}}>2</Avatar>            
//             After Successful Registration<br/>
//             You Get An Email with Login Crediantials
            
//             <Avatar className="two" sx={{ml:'45%',my:'2%',backgroundColor:'#006064'}}>3</Avatar>
//             Enter Login Crediantials<br/>
//             Congratulations!...<br/>Now Your Hospital Is Registered Successfully
            
//             </Typography>
//                 {/*--------- hospital Reg. button-------- */}
           
//             <Link style={{color: 'white'}} to="/HospitalSignUp" variant="body2">
//             <Button variant="contained" 
//             className="two"
//             sx={{
                
//                 borderRadius:8,
//                 p:'1.5%',
//                 mt:'3%',
//                 mb:'3%',
//                marginTop:'30px',
               
//                 backgroundColor:'#006064',
//             }}>
//             Hospital Registration</Button></Link>
//           </Box>

//           {/* ----------> Righttside Box-------> */}

//           <Box flex={1}
//                   sx={{
//                     display:{md:'block'},
//                     // p:'2px',
//                     pt:'3%',
                   
//                     pb:'5%'
//                   }}>
//                 <Box style={{paddingRight:"30px"}}>
//                       <Image src={Reg_img} alt='registration-hospital-image'
//                         sx={{
//                           borderRadius:8,
//                         }}/>
//                 </Box>    
//           </Box>

//       </Stack>
//     </Box>
//     {/* ---------------------------------------Hospital registration Process End--------------------------------------- */}
//     <Divider/>
//     {/* -----------------importing footer here------------ */}
//     <Footer/>
//     </Box>
//   </>

// )}