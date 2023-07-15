import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import { border, borderRadius } from '@mui/system';
import AlertDialog from './AlertDialog';
import Navbar from './Navbar_Admin';

export default function AlignItemsList() {
  return (

    <>
      <div className='list' style={{height:"100%" ,width:"100%"}}>

 

    <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#e0e0e0' 
              }}
    style={{marginTop:"90px",
            marginLeft:"450px",
            border:"2px solid grey",
            borderRadius:"4px",
            height:"auto"
                       
  
          }}
    ><Navbar/>
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
        
          <Avatar alt="https://pixabay.com/illustrations/emoticon-smile-symbol-avatar-emoji-1610228/" />
          
        </ListItemAvatar>
       
        <ListItemText
          primary="Lorem Ipsum"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {/* I have a Query */}
                how to register to SwasthyaOk websitehow to register to SwasthyaOk websitehow to register to SwasthyaOk websitehow to register to SwasthyaOk website

                
          
              </Typography>
              {/* {" how to register on SwasthyaOk website"} */}
            </React.Fragment>
          }
          />

  <AlertDialog/>
         

      </ListItem>
      <Divider variant="inset" component="li" />
     
     
    </List>
     </div>
    
    </>
    

  );
}
