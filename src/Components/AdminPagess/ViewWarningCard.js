import React from 'react'
import { Button } from '@mui/material'

const TreatmentsCard = (props) => {
  return (
    <>
   
    <div style={{paddingTop:"3%"}}>
    <div className="card" style={{backgroundColor:"snow",width : '50%' , margin : '10px auto', border : '2px solid black', borderRadius: '10', padding:"10px"}}>
  <div className="card-body">
    <h3 style={{paddingTop:"1%"}}>Warning From Admin {props.item.name}</h3>
    <p className="card-text">
    <ul style={{display : 'flex', listStyle:'none', justifyContent:'space-between'}}>
      <li style={{marginRight:"2%"}}><b>WarningNumber</b><br/>{props.item.WarningNumber}</li>
      <li><b>Description</b><br/>{props.item.Description}</li>
    </ul>
    </p>
    {/* <Button variant="contained">Contact</Button> */}
  </div>
</div>
</div>
</>
  )
}

export default TreatmentsCard