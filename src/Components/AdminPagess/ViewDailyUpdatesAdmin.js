import React, {useState} from 'react'
import DepartmentCard from '../HospitalPaggess/DepartmentCard'
import Navbar_Admin from './Navbar_Admin'

const ViewTreatmentList = () => {

    const [Department, setDepartment] = useState([
        {
          name: "Covid",
          totalBeds:50,
          availableBeds:20,
          fees: 1000,
          totalVaccine:100,
          availablevaccine:78,
          fees1:800,
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
            name: "Covid",
            totalBeds:50,
            availableBeds:20,
            fees: 1000,
            totalVaccine:100,
            availablevaccine:78,
            fees1:800,
            __v: 0,
            _id: "626af6286622fd659d28f52a"
          },
           {
            name: "Covid",
            totalBeds:20,
            availableBeds:15,
            fees: 1000,
            totalVaccine:50,
            availablevaccine:28,
            fees1:800,
            __v: 0,
            _id: "626af6286622fd659d28f52a"
          },
           {
            name: "Covid",
            totalBeds:30,
            availableBeds:20,
            fees: 1230,
            totalVaccine:60,
            availablevaccine:38,
            fees1:900,
            __v: 0,
            _id: "626af6286622fd659d28f52a"
          },
          {
            name: "Covid",
            totalBeds:40,
            availableBeds:30,
            fees: 900,
            totalVaccine:150,
            availablevaccine:98,
            fees1:700,
            __v: 0,
            _id: "626af6286622fd659d28f52a"
          },
          {
            name: "Covid",
            totalBeds:60,
            availableBeds:40,
            fees: 1200,
            totalVaccine:10,
            availablevaccine:7,
            fees1:850,
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
      <Navbar_Admin/>
    </div>
    <div style={{backgroundColor: "#e0f7fa",width: "100%"}}>
        <h2 style={{marginTop:"4em"}}>View Department List</h2>
            
            {
                Department.map((item, index) => {
                return <DepartmentCard index={index} item={item} />
                })
            } 
    </div>
    </>
  )
}

export default ViewTreatmentList
