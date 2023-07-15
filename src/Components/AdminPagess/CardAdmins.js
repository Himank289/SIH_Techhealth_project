import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar_Admin';

export default function CardAdmins() {
  return (
    <>
    <Navbar/>
    <div className="cardss" style={{display:"flex" , marginLeft:"30px" ,marginRight:"30px" ,marginTop:"180px",
     }}>
   
   
    <div >

    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Instagram-logo.jpg"
      />
      <CardContent style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
          Instagram
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Stories-Posts-Reels
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}   variant='text' href='https://www.instagram.com/accounts/login/'>Open</Button>
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
        image="https://www.exhibit.tech/wp-content/uploads/2022/02/Twitter.jpg"
      />
      <CardContent style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
          Twitter
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Tweets-Updates-Treands
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href='https://twitter.com/login'>Open</Button>
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
        image="https://img.helpnetsecurity.com/wp-content/uploads/2015/12/09195531/facebook-wide.jpg"
      />
      <CardContent  style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
          Facebook
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Groups-Chats-Pages
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href=' https://www.facebook.com/'>Open</Button>
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
        image="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
      />
      <CardContent  style={{height:"auto"}}>
        <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
          Whatsapp
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Chats-Status-Helps
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href='https://www.whatsapp.com/'>Open</Button>
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
        image="https://www.windowslatest.com/wp-content/uploads/2016/06/Telegram.jpg"
      />
      <CardContent style={{height:"auto"}} >
        <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
          Telegram
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Groups-Bots-Queries
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:"80px"}}  variant='text' href='https://telegram.org/'>Open</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    
    </>
  );
}






// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Navbar from './Navbar_Admin';

// export default function CardAdmins() {
//   return (
//     <>
//     <Navbar/>
//     <div className="cardss" style={{display:"flex" , marginLeft:"30px" ,marginRight:"30px" ,marginTop:"180px",
//      }}>
   
   
//     <div >

//     <Card sx={{ maxWidth: 300 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="200"
//         image="https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Instagram-logo.jpg"
//       />
//       <CardContent style={{height:"auto"}}>
//         <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
//           Instagram
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign={'center'}>
//           Stories-Posts-Reels
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" style={{marginLeft:"80px"}}>Open</Button>
//       </CardActions>
//     </Card>

//     </div>
//     {/* 2nd */}
//     <div>

//     <Card sx={{ maxWidth: 300,  marginLeft:5}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="200"
//         image="https://www.exhibit.tech/wp-content/uploads/2022/02/Twitter.jpg"
//       />
//       <CardContent style={{height:"auto"}}>
//         <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
//           Twitter
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign={'center'}>
//           Tweets-Updates-Treands
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" style={{marginLeft:"80px"}}>Open</Button>
//       </CardActions>
//     </Card>
//     </div>

//     {/* 3rd */}
//     <div>

//     <Card sx={{ maxWidth: 300 ,  marginLeft:5}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="200"
//         image="https://img.helpnetsecurity.com/wp-content/uploads/2015/12/09195531/facebook-wide.jpg"
//       />
//       <CardContent  style={{height:"auto"}}>
//         <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
//           Facebook
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign={'center'}>
//           Groups-Chats-Pages
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" style={{marginLeft:"80px"}}>Open</Button>
//       </CardActions>
//     </Card>
//     </div>

//     {/* 4th */}
//     <div>

//     <Card sx={{ maxWidth: 300,  marginLeft:5 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="200"
//         image="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
//       />
//       <CardContent  style={{height:"auto"}}>
//         <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
//           Whatsapp
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign={'center'}>
//           Chats-Status-Helps
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" style={{marginLeft:"80px"}}>Open</Button>
//       </CardActions>
//     </Card>

//     </div>
//     {/* 5th */}

//     <div>

//     <Card sx={{ maxWidth: 300 ,  marginLeft:5}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="200"
//         image="https://www.windowslatest.com/wp-content/uploads/2016/06/Telegram.jpg"
//       />
//       <CardContent style={{height:"auto"}} >
//         <Typography gutterBottom variant="h5" component="div" paddingLeft={3}>
//           Telegram
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign={'center'}>
//           Groups-Bots-Queries
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" style={{marginLeft:"80px"}}>Open</Button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
    
//     </>
//   );
// }



// // import React from 'react'

// // export default function CardaAdmin() {
// //   return (
// //     <div>
// //     SocialHandles
      
// //     </div>
// //   )
// // }
