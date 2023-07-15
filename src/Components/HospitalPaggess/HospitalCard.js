import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'
import { Box } from '@mui/system';

const HospitalCard = (props) => {
  const a = "tel:"+ toString(props.item.contact)
  return (
    <>
  <Box sx={{display:{xs:'none',md:'block'}}}>
    <div style={{paddingTop:"1%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '60%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h5 style={{paddingTop:"2%"}} className="card-title">{props.item.name}</h5>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li><b>Hospital Name </b>: {props.item.hospitalName}</li>
      <li style={{paddingRight:'7px',paddingLeft:'5px'}}> <b>Address </b>: <br/>{props.item.address}</li>
      <li> <b>Contact</b> : {props.item.contact}</li>
      
    </ul>
   
    </p>
    <a href={a} onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
    <Button variant="contained" style={{marginRight:'10px'}}>Contact</Button>
    </a>
    
    <Link to="/OtherDetails" variant="body2" style={{color: 'white'}}>
    <Button variant="contained">View Other Details</Button>
    </Link>

   
  </div>
</div>
</div>

</Box>


{/* -------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------MOBILEVIEW---------------------------------------------- */}
{/* -------------------------------------------------------------------------------------------------------- */}


<Box sx={{display:{xs:'block',md:'none'}}}>
<div style={{paddingTop:"1%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '85%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h5 style={{paddingTop:"2%"}} className="card-title">{props.item.name}</h5>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'center'}}>
        <li><b>Hospital Name </b>: {props.item.hospitalName}</li>
      <li style={{paddingRight:'7px',paddingLeft:'5px'}}> <b>Address </b>: <br/>{props.item.address}</li>
      <li> <b>Contact</b> : {props.item.contact}</li>
      
    </ul>
   
    </p>
    <Link to="/OtherDetails" variant="body2" style={{color: 'white'}}>
    <Button variant="contained">View Other Details</Button>
    </Link>
  </div>
</div>
</div>
</Box>
</> 
)
}

export default HospitalCard