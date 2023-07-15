import React from 'react'
import { Button } from '@mui/material'
import HospNavBar from '../HospNavBar'
import { Link } from 'react-router-dom';
const TreatmentsCard = (props) => {
  return (
    <>
   
    <div style={{paddingTop:"3%"}}>
    <div className="card" style={{backgroundColor:"whitesmoke",width : '50%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h3 style={{paddingTop:"1%"}}>Dr. {props.item.name}</h3>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li><b>Private Fees </b>: {props.item.fees}</li>
      <li> <b>Government Fees</b>:{props.item.GovernmentFees}</li>
      <li><b>Specialization </b>: {props.item.specialization}</li>
    </ul>
    </p>
    <a href="tel:5558920234" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
    <Button variant="contained" style={{marginRight:'10px'}}>Contact</Button>
    </a>
    <Link to="/UpdateTreatmentPrices" variant="body2" style={{color: 'white'}}>
    <Button variant="contained">Update</Button>
    </Link>
  </div>
</div>
</div>
</>
  )
}

export default TreatmentsCard