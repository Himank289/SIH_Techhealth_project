import React, {useState} from 'react'
import DoctorCard from './DoctorCard'
import HospNavBar from '../HospNavBar'
const ViewDoctorList = () => {

    const [doctors, setDoctors] = useState([
        {
          name: "Dr. Joshi",
          license: "ABC",
          contact: "7456",
          age: 12,
          gender: "Male",
          qualification: "MBBS",
          experience: 1.5,
          specialization: "Dirty",
          charges: 500,
          availability: [
            12,
            12
          ],        
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
            name: "Dr. A.D.Mehta",
            license: "ABC",
            contact: "7456",
            age: 12,
            gender: "Male",
            qualification: "MBBS",
            experience: 1.5,
            specialization: "Dirty",
            charges: 500,
            availability: [
              12,
              12
            ],        
            __v: 0,
            _id: "626af6286622fd659d28f52a"
          },
          {
          name: "ICU",
          license: "ABC",
          contact: "7456",
          age: 12,
          gender: "Male",
          qualification: "MBBS",
          experience: 1.5,
          specialization: "Dirty",
          charges: 500,
          availability: [
            12,
            12
          ],        
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },

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
      <HospNavBar/>
    </div>
    <div style={{backgroundColor: "#e0f7fa",width: "100%"}}>

      
        <h2 style={{marginTop:"4em"}}>Doctors List</h2>
            
            {
                doctors.map((item, index) => {
                return <DoctorCard index={index} item={item} />
                })
            } 
    </div>
    </>
  )
}

export default ViewDoctorList
