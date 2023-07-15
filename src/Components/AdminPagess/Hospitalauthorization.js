// import { borderColor, padding } from "@mui/system";
import React, { useState } from "react";
import ControlledAccordions from "./ControlledAccordions";
import Navbar from "./Navbar_Admin";
const Hospitalauthorization = () =>
{
    const [name, setName] = useState("Dummydata");
   
    return(
        <>
        <div className="authorization">

        <Navbar/>
  


        <div className="container border"
        style={{marginTop: "110px",
         width: "50%",
        backgroundImage:`url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
        backgroundSize: "cover",
        backgroundPosition: "ceter",
        fontFamily:"Arial, Helvetica, sans-serif",
        borderRadius:"4px",
        padding:"5px",
        }}>
             <h2 style={{marginTop:"20px"}}>Hospital-Data-Authorization</h2 >




            {/* <form  className="row" style={{ margin: "25px 85px 75px 100px"}}>
                <label style={{marginLeft:"10px",paddingRight:"369px"}}>Hospital-Name</label>
                <input type="text" name="user_name" placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}} />
                
                <label style={{marginTop:"10px" ,paddingRight:"410px"}}>E-mail</label>
                <input type="email" name="user_email"placeholder={name} disabled className="form-control" style={{backgroundColor:"white"}}/>
                
                <label style={{marginTop:"10px",paddingRight:"340px"}}>Contact Number</label>
                <input type="email" name="user_email"placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}}/>
               
                <label style={{marginTop:"10px",paddingRight:"390px"}}>Address</label>
                <input type="email" name="user_email" placeholder={name} disabled className="form-control" style={{backgroundColor:"white"}}/>

                <label style={{marginTop:"10px",paddingRight:"314px"}}>Number of Doctors</label>
                <input type="email" name="user_email" placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}}/>

         

                <div className="acceptbtn"  >
                    <input type='submit' value='Accept' className='form-control btn btn-primary'
                style={{marginTop: "30px",  marginLeft:"10px"}}/>
                </div>
                <div className="rejectbtn" style={{paddingLeft:"10px"}}>
                <input type='submit' value='Reject' className='form-control btn btn-primary'
                style={{marginTop: "25px", marginLeft:"10px"}} />
                </div>
            </form> */}



        </div>
        <ControlledAccordions/>
        </div>
                </>
    );
};

export default Hospitalauthorization;