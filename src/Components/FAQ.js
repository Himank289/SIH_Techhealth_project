import { Button, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from './Navbar';
import Footer from './Footer';

//........Declaring a array of object which contain questions and answers................
const items=[
  {
    id:'1',
    heading:'What is SwasthyaOk?',
    content:"SwasthyaOk is National helth portal created for Peoples of India and Hospitals. It helps users like you to easily navigate and search hospitals 1. You can create & manage your own user account.2. Communicate with hospitals and admin across your website for health questions, queries.",
  },
  {
    id:'2',
    heading:'Is the price quote given by the hospital is exact?',
    content:'The price quoted to you is based on clinics past experience with similar procedures. So you can consider it as a reliable ballpark estimate though not an exact price. However, ballpark is something that can help you choose a clinic competitively and plan for your budgets accordingly',
  },
  {
    id:'3',
    heading:'Can I book an appointment?',
    content:"No. Requesting an appointment with doctors is not available yet .Just use our 'Hospital related tabs' to specify your preferred hospital and doctor",
  },
  {
    id:'4',
    heading:"How can I search for healthcare providers?",
    content:"You can search in helthcare providers using emergency and hospitals tab depending on what are your requirement",
  },
  {
    id:'5',
    heading:"How do I contact a Hospital?	",
    content:"There are 2 ways to contact a hospitals. One is a direct way where hospital contact numbers published on website.Second way to connect with a hospital is through email.",
  },
  {
    id:'6',
    heading:"Can I share a SwasthyaOk website or Hospital profile with my friends?	",
    content:"Yes. You can share a SwasthyaOk website or a doctor profile with your friends and relatives through email or on your social media",
  },
  {
    id:'7',
    heading:"Who is responsible for the information displayed on SwasthyaOk website on User and Hospital?",
    content:"We verify as much information as possible before a  can hospital publish its page on SwasthyaOk. However, all the data is submitted to us by the Hospitals and user is monitored by Admin.",
  },
  {
    id:'8',
    heading:"Why can't I find a hospital that I'm interested in?",
    content:"We are very sorry if you couldn't find a hospital you are looking for. This is most likely because the  you hospital are interested in is not yet registered with SwasthyaOk. Since we are expanding our database every day, we assure you will not face such problems in future",
  },
  {
    id:'9',
    heading:"How do I recommend a doctor?",
    content:"You can recommend a doctor on various attributes that are important for you as a patient e.g medical expertise, ability to listen & gives enough time, compassion and bed-side manners , treatment results.",
  },
  {
    id:'10',
    heading:"what are user queries?",
    content:"You can manage user queries from your dashboard. We notify you as soon as an enquiry is made so we can promptly respond to the same. ",
  },
  {
    id:'11',
    heading:"Is my information safe on SwasthyaOk?",
    content:"All your personal information on SwasthyaOk is safe. We do not share your information with anybody else without your approval. Further, we use SSL certificate to secure and encrypt exchange of information between your browser and web server.",
  },

]


export default function Example() {
    return (
<>
{/* .................importing Navbar here........... */}
  <Navbar/>


{/* ............................................................................................................  */}
{/* ........................... this contain shows in Large-Screen devices........................... */}
{/* ............................................................................................................ */}


{/* ............main Box  that contain accordion and heading............... */}
  <Box 
  alignContent={'center'} 
  sx={{backgroundColor:'lightcyan',py:'5%',display:{xs:'none',md:'block'} }}>

        {/* ................heading Box................... */}
        <Box>
          <Typography
            sx={{
                color:'darkblue',
                fontFamily:'roboto',
                fontSize:60,
                fontWeight:'bold',
              }}>
            Frequently Asked Questions
          </Typography>

          <Typography 
              sx={{
                color:'darkbrown',
                fontFamily:'monospace',
                fontSize:30,
                fontWeight:'bold',
                my:'3%',
              }}>
          Here We Mension Some Frequently Asked Questions/Queries
           Of Our Users And Respective Answers Also Given.<br/>
          </Typography>
        </Box>


        {/* .............Accordion box start.......... */}
        <Box 
          sx={{
              width:'75vw',
              m:'auto',
              pt:'2%',
            }}>
                <Accordion allowZeroExpanded>
              {items.map((item) => (
                  <AccordionItem key={item.id}>
                      <AccordionItemHeading>
                          <AccordionItemButton>
                              {item.heading}
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        {item.content}
                      </AccordionItemPanel>
                  </AccordionItem>
              ))}
          </Accordion>
          {/* .............Accordion box End.......... */}
                <Box>
                  {/* ..............Adding Note Here........... */}
                      <Typography
                      sx={{
                        color:'red',
                        fontFamily:'cursive',
                        fontSize:20,
                        fontWeight:'bold',
                        wordSpacing:'1px',
                        marginTop:'5%'
                      }}>
                      **Note : If You Have Question/Query Other Than The List Of FAQ's,
                      Then Please Add Your Query Into The Box Blow.** 
                      </Typography>
                      
                      {/* ..............Adding textarea here............. */}
                      
                      <TextareaAutosize   
                          maxRows={5}
                          aria-label="maximum height"
                          placeholder="Enter Your Question/Query Here..."
                          style={{ width: 1000,height:150,marginTop:'3%'}}
                      />
                      <Button variant="contained"
                      sx={{
                          fontSize:20,
                          fontFamily:'sans-serif',
                          backgroundColor:'lightgreen',
                          borderRadius:5,
                          mt:'3%',
                      }}>
                      Submit
                      </Button>
                </Box>
        </Box>
  </Box>



{/* ............................................................................................................  */}
{/* ........................... this contain shows in mobile devices........................... */}
{/* ............................................................................................................ */}

<Box

alignContent={'center'} 
sx={{backgroundColor:'lightcyan',py:'5%',display:{xs:'block',md:'none'} }}>

{/* ................heading Box................... */}
<Box 
  sx={{
  }}>
  <Typography
    sx={{
        color:'darkblue',
        fontFamily:'roboto',
        fontSize:50,
        fontWeight:'bold',
      }}>
    Frequently Asked Questions
  </Typography>

  <Typography 
      sx={{
        color:'darkbrown',
        fontFamily:'monospace',
        fontSize:20,
        fontWeight:'bold',
      }}>
  Here We Mension Some Frequently Asked Questions/Queries Of Our Users And Respective Answers Also Given.<br/>
  </Typography>
</Box>

{/* .............Accordion box start.......... */}
<Box 
  sx={{
      width:'75vw',
      ml:'8%',
      pt:'5%',
    }}>
        <Accordion allowZeroExpanded>
      {items.map((item) => (
          <AccordionItem key={item.id}>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      {item.heading}
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {item.content}
              </AccordionItemPanel>
          </AccordionItem>
      ))}
  </Accordion>
  {/* .............Accordion box End.......... */}
        <Box>
          {/* ..............Adding Note Here........... */}
              <Typography
              sx={{
                color:'red',
                fontFamily:'cursive',
                fontSize:20,
                fontWeight:'bold',
                textAlign:'justify',
                marginTop:'10%'
              }}>
              **Note : If You Have Question/Query Other Than The List Of FAQ's,Then Please Add Your Query Into The Box Blow.** 
              </Typography>
              
              {/* ..............Adding textarea here............. */}
              
              <TextareaAutosize   
                  maxRows={5}
                  aria-label="maximum height"
                  placeholder="Enter Your Question/Query Here..."
                  style={{ width: 250,height:100,marginTop:'3%'}}
              />
              <Button variant="contained"
              sx={{
                  fontSize:15,
                  fontFamily:'sans-serif',
                  backgroundColor:'lightgreen',
                  borderRadius:5,
                  mb:'15%',
                  mt:'5%',
              }}>
              Submit
              </Button>
        </Box>
</Box>
</Box>
<Box sx={{width:"100%"}}>
<Footer/>
</Box>
</>

);
}
