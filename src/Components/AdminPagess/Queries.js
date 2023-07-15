import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Navbar from "./Navbar_Admin";


const Queries = () =>

{
   
    return(
        <>
        <Navbar/>
       
        <div className="container border"
        style={{marginTop: "110px",
         width: "50%",
        backgroundImage:`url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
        backgroundSize: "cover",
        backgroundPosition: "ceter",
        fontFamily:"Arial, Helvetica, sans-serif",
        borderRadius:"4px"
        }}>
            <h2 style={{marginTop:"20px"}}>User Query</h2 >
            <form  className="row" style={{ margin: "25px 85px 75px 100px"}}>
                <label>Name</label>
                <input type="text" name="user_name" className="form-control"/>
                
                <label style={{marginTop:"8px"}}>E-mail</label>
                <input type="email" name="user_email" className="form-control" />
                
                <label style={{marginTop:"8px"}}> Response  </label>
                <textarea name="user_response" rows='5' className="form-control"/>
                <input type='submit' value='send' className='form-control btn btn-primary'
                style={{marginTop: "30px"}}
                />

            </form>
        </div>
        </>
    );
};

export default Queries;