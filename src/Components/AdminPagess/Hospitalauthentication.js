import { borderColor, padding } from "@mui/system";
import React, { useState } from "react";
import Navbar from "./Navbar_Admin";
const Hospitalauthentication = () =>
{
    const [name, setName] = useState("Hospital Registration data");
   
    return(
        <>
        <div className="authenticationn" style={{ width: "100%"  ,height:"100%"}}>

        <Navbar/>
       
        <div className="container border"
        style={{marginTop: "90px",
         width: "50%",
        backgroundImage:`url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
        backgroundSize: "cover",
        backgroundPosition: "ceter",
        fontFamily:"Arial, Helvetica, sans-serif",
        borderRadius:"4px"
        }}>
             <h2 style={{marginTop:"10px"}}>Hospital-Authentication</h2 >
            <form  className="row" style={{ margin: "25px 85px 75px 100px"}}>
                <label style={{marginLeft:"1px",paddingRight:"400px"}}>Name</label>
                <input type="text" name="user_name" placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}} />
                
                <label style={{marginTop:"10px" ,paddingRight:"410px"}}>E-mail</label>
                <input type="email" name="user_email"placeholder={name} disabled className="form-control" style={{backgroundColor:"white"}}/>
                
                <label style={{marginTop:"10px",paddingRight:"340px"}}>Contact Number</label>
                <input type="email" name="user_email"placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}}/>
               
                <label style={{marginTop:"10px",paddingRight:"390px"}}>Address</label>
                <input type="email" name="user_email" placeholder={name} disabled className="form-control" style={{backgroundColor:"white"}}/>

                <label style={{marginTop:"10px",paddingRight:"314px"}}>Number of Doctors</label>
                <input type="email" name="user_email" placeholder={name} disabled  className="form-control" style={{backgroundColor:"white"}}/>
                
                {/* <label style={{marginTop:"8px"}}>Response</label>
                <textarea name="user_response" rows='5' className="form-control"/> */}
         
                <div className="main1" style={{paddingLeft:"10px"  ,display:"flex"}}>

                <div className="acceptbtn"  style={{paddingLeft:''}} >
                    <input type='submit' value='Accept' className='form-control btn btn-primary'
                style={{marginTop: "35px",  marginLeft:"80px"}}/>
                </div>
                <div className="rejectbtn" style={{paddingLeft:"10px"}}>
                <input type='submit' value='Reject' className='form-control btn btn-primary'
                style={{marginTop: "35px", marginLeft:"80px"}} />
                </div>
                </div>

            </form>
        </div>
        </div>

                </>
    );
};

export default Hospitalauthentication;