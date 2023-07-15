import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function ImgMediaCard() {
  return (
    
    // <Card sx={{ maxWidth: 770 }}  >
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image="https://uidai.gov.in/images/logo/uidai_english_logo.svg"
    //   />
    // </Card>
    <>
        <Box sx={{
          width:'100%'
        }}>
          <img src='https://uidai.gov.in/images/logo/uidai_english_logo.svg'   width={"60%"} />
        </Box>

    </>
  );
}
