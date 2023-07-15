import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar_Admin';

export default function GoogleHandless() {
  return (
    <>
    <Navbar/>
    <div className="cardss" 
    //  image="https://lh3.googleusercontent.com/0bBfFEkB6ypK6aYw3JAjrk9Kkut-mICiVuQBFBLPdJRcXmUs6RJv3TSEb0HrJteG9Eyx9ITFMEOW10FrqDC41hQVsaukAgdtsXdNjis=w512-l90-sg-rj-c0xffffff" 
    style={{display:"flex" , marginLeft:"30px" ,marginRight:"30px" ,marginTop:"200px",
     }}>
   
   
    <div >

    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://lh3.googleusercontent.com/0bBfFEkB6ypK6aYw3JAjrk9Kkut-mICiVuQBFBLPdJRcXmUs6RJv3TSEb0HrJteG9Eyx9ITFMEOW10FrqDC41hQVsaukAgdtsXdNjis=w512-l90-sg-rj-c0xffffff"

      />
      <CardContent style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" padding={'auto'}>
          Google
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
        Browse-Search-Surfing
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}   variant='text' href='https://google.com'>Open</Button>
      </CardActions>
    </Card>

    </div>
    {/* 2nd */}
    <div>

    <Card sx={{ maxWidth: 300,  marginLeft:5}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.indianexpress.com/2020/10/Gmail-new-logo.jpg"
      />
      <CardContent style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" padding={"auto"}>
          G-mail
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
        Mails-Meets-Chats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  
        variant='text' href='https://gmail.com'
        >Open</Button>
      </CardActions>
    </Card>
    </div>

    {/* 3rd */}
    <div>

    <Card sx={{ maxWidth: 300 ,  marginLeft:5}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/84/51/e2/8451e20b-5d76-dbb5-753a-21b4c2481841/AppIcon-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220.png/1200x630wa.png"
      />
      <CardContent  style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" padding={"auto"}>
          Drive
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Upload file-Share file
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href='https://drive.google.com/'>Open</Button>
      </CardActions>
    </Card>
    </div>

    {/* 4th */}
    <div>

    <Card sx={{ maxWidth: 300,  marginLeft:5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/37/48/4f/37484f58-e8e2-a72f-9398-637cb4c81482/logo_youtube_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
      />
      <CardContent  style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" padding={"auto"}>
          Youtube
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
        Videos-Content-Channel
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href='https://youtube.com'>Open</Button>
      </CardActions>
    </Card>

    </div>
    {/* 5th */}

    <div>

    <Card sx={{ maxWidth: 300 ,  marginLeft:5}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        // image="https://www.xda-developers.com/files/2018/06/google-keep-featured.png"
        image="https://www.technobugg.com/wp-content/uploads/2018/09/Google-keep-notes.jpg"
      />
      <CardContent style={{height:"auto"}} >
        <Typography gutterBottom variant="h5" component="div" padding={"auto"}>
          Keep
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Notes-Tasks-Reminders
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}} variant='text' href='https://keep.google.com/'>Open</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    
    </>
  );
}

