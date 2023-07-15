import { Button } from '@mui/material'
import HospNavBar from '../HospNavBar'
import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const ViewDrUserCard = (props) => {
  return (
    <>

    <Box 
    sx={{
      width:'100%',
      display:{xs:'none',md:'block'}
      }}> 
    <div style={{paddingTop:"1%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '60%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h5 style={{paddingTop:"2%"}} className="card-title">{props.item.name}</h5>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>License : {props.item.license}</li>
      <li>Contact : {props.item.contact}</li>
      <li>Age : {props.item.age}</li>
    </ul>
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>Gender : {props.item.gender}</li>
      <li>Qualification : {props.item.qualificatin}</li>
      <li>Experience : {props.item.experience}</li>
    </ul>
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>Specializtion : {props.item.specialization}</li>
      <li>Charges : {props.item.charges}/Hr</li>
      <li>Availability : {props.item.availability[0]} to {props.item.availability[1]}</li>
    </ul>
    </p>
    <a href="tel:5558920234" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
    <Button variant="contained" style={{marginRight:'10px'}}>Contact</Button>
    </a>
   
   <Link to="/OtherDetails" variant="body2" style={{color: 'white'}}><Button variant="contained">Back</Button></Link>
  </div>
</div>
</div>
</Box>


<Box 
sx={{
  width:'100%',
  display:{xs:'block',md:'none'}
}}>
<div style={{paddingTop:"1%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '60%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h5 style={{paddingTop:"2%"}} className="card-title">{props.item.name}</h5>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>License : {props.item.license}</li>
      <li>Contact : {props.item.contact}</li>
      <li>Age : {props.item.age}</li>
    </ul>
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>Gender : {props.item.gender}</li>
      <li>Qualification : {props.item.qualificatin}</li>
      <li>Experience : {props.item.experience}</li>
    </ul>
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li>Specializtion : {props.item.specialization}</li>
      <li>Charges : {props.item.charges}/Hr</li>
      <li>Availability : {props.item.availability[0]} to {props.item.availability[1]}</li>
    </ul>
    </p>
    <a href="tel:5558920234" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
    <Button variant="contained" style={{marginRight:'10px'}}>Contact</Button>
    </a>
   
   <Link to="/OtherDetails" variant="body2" style={{color: 'white'}}><Button variant="contained">Back</Button></Link>
  </div>
</div>
</div>
</Box>
</> )
}

export default ViewDrUserCard
