import React, {useState} from 'react'
import Navbar_user from '../Navbar_user'
import TreatmentUser from '../UserPagess/TreatmentUser'

const ViewTreatmentList = () => {

    const [Treatment, setTreatment] = useState([
      {
        name: "Mehta",
        fees: 500,
        GovernmentFees:132,
        specialization:"X-ray",        
        __v: 0,
        _id: "626af6286622fd659d28f52a"
      },
      {
          name: "Band",
          fees: 200,
          GovernmentFees:41, 
          specialization:"Removal of Stiches",    
             
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
          name: "Tyagi",
          fees: 399,
          GovernmentFees:233, 
          specialization:"Kidney Function Test",   
             
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
          name: "Gupta",
          fees: 50000,
          GovernmentFees:600, 
          specialization:"ECG(Eco Cardiography)",        
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
          name: "Bhamre",
          fees: 150,
          GovernmentFees:20,
          specialization:"Fever", 
                 
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
          name: "Dhawalikar",
          fees: 8000,
          GovernmentFees:3000,
          specialization:"MRI (Magnetic resonance imaging)",        
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        }
      

      ])

    /*useEffect(() => {
        // Update the document title using the browser API
        const handleDoctorData = async () =>{
 
          try {
            await axios.get("http://localhost:8800/api/doctor/doctorslist" ).then(
              res => {
                console.log(res);
                console.log(res.data);
                setDoctors(res.data)
                console.log(doctors)
              })
            } catch (err) {}
           
        }
       
        handleDoctorData();
     }, []);*/


  return (
    <>
      <div>
      <Navbar_user/>
    </div>
    <div style={{backgroundColor: "#e0f7fa",width: "100%"}}>
        <h2 style={{marginTop:"4em"}}>View Treatment List</h2>
            
            {
                Treatment.map((item, index) => {
                return <TreatmentUser index={index} item={item} />
                })
            } 
    </div>
    </>
  )
}

export default ViewTreatmentList