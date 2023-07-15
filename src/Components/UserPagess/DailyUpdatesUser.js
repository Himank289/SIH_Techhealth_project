import React from 'react'
import HospNavBar from '../HospNavBar';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


const DepartmentUser = (props) => {
  return (
    <>
  
    <div style={{paddingTop:"1%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '60%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h4 style={{paddingTop:"1%"}}>{props.item.name}</h4>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-around'}}>
      <li>Total Beds : <b>{props.item.totalBeds}</b></li>
      <li>Available Beds : <b>{props.item.availableBeds}</b></li>
      <li>Bed Fees : <b>{props.item.fees}</b></li>
    </ul>
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-around'}}>
      <li>Total Vaccines : <b>{props.item.totalVaccine}</b></li>
      <li>Available Vaccines : <b>{props.item.availablevaccine}</b></li>
      <li>Vaccine Fees : <b>{props.item.fees1}</b></li>
    </ul>
    </p>
   
   
   <Link to="/OtherDetails" variant="body2" style={{color: 'white'}}><Button variant="contained">Back</Button></Link>
    
    
  </div>
</div>

</div>
</>
  )
}

export default DepartmentUser