import React, {useState} from 'react'
import HospNavBar from '../HospNavBar';
import ViewWarningCard from './ViewWarningCard'
const ViewTreatmentList = () => {

    const [Warning, setWarning] = useState([
        {
          index:"1",
          WarningNumber:"1",
          Description: "Your Treatment Prices are High Then Desided Regulated Prices, So We 'Notify' You To Update Your Treatment Prices",
          __v: 0,
          _id: "626af6286622fd659d28f52a"
        },
        {
            index:"2",
            WarningNumber:"2",
            Description: "We Receive Certain Number of Querys Regarding With Hospital Facilities or Treatments That is User Paid More Than Regulated Price Which Lead To Malpractice Therefore We Warn You To Stop Such Malpractice ",
            __v: 0,
            _id: "626af6286622fd659d28f52a"
        },
        {
            index:"3",
            WarningNumber:"3",
            Description: "Your Treatment Prices are High Then Desided Regulated Prices, So We 'Again Notify' You To Update Your Treatment Prices",
            __v: 0,
            _id: "626af6286622fd659d28f52a"
        },
        {
            index:"4",
            WarningNumber:"4",
            Description: "Your Treatment Prices are High Then Desided Regulated Prices, So We 'Warn' You To Update Your Treatment Prices",
            __v: 0,
            _id: "626af6286622fd659d28f52a"
        },
        {
            index:"5",
            WarningNumber:"5",
            Description: "This Is The Last Warning Regarding With Malpractices Happened Again And Again At Your End Now You Take Permentent Actions Accordingly",
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
        <HospNavBar/>
        </div>
        <div style={{backgroundImage:"linear-gradient(to right top, #a1c7ff, #c1d3ff, #dae0ff, #efeffe, #ffffff)",width: "100%"}}>

            <h2 style={{marginTop:"8%"}}>List Of Warnings</h2>
            {
                Warning.map((item, index) => {
                return <ViewWarningCard index={index} item={item} />
                })
            } 
        </div>
    </>
  )
}

export default ViewTreatmentList

