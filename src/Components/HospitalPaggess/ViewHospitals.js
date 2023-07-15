import React, {useState} from 'react'
import HospitalCard from './HospitalCard'

import Navbar_user from '../Navbar_user'
const ViewHospitalList = () => {

    const [Hospiatal, setHospiatl] = useState(
        [{
  
            "hospitalName": "Sakra World Hospital",
            "email": "https://www.sakraworldhospital.com",
            "address": "SY NO 52/2 & 52/3, Devarabeesanahalli, Varthur Hobli Opp Intel, Dr Puneeth Rajkumar Rd, Marathahalli, Bengaluru, Karnataka 560103",
            "pincode": 560103,
            "contact": [
              "8049694969"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Koshys Multispeciality Hospital",
            "email": "info@koshyshospital.com",
            "address": "Thambu Chetty Palya Road, Raghavendra nagar Ramamurthy nagar extension, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
            "pincode": 560016,
            "contact": [
              "8043517700"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "North Bangalore Hospital",
            "email": "http://northbangalorehospital.com/",
            "address": "Kalyananagara, SY No.104, 4th, G Street, 125/1, 125/2, Kalyan Residency Road, Bengaluru, Karnataka 560043",
            "pincode": 560043,
            "contact": [
              "9164399999"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Apollo Hospitals Bannerghatta",
            "email": "https://bangalore.apollohospitals.com/locations/bannerghatta/",
            "address": "154, IIM, 11, Bannerghatta Main Rd, opposite Krishnaraju Layout, Krishnaraju Layout, Amalodbhavi Nagar, Naga, Bengaluru, Karnataka 560076",
            "pincode": 560076,
            "contact": [
              "8026304050"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Manipal Hospitals Jayanagar",
            "email": "https://www.manipalhospitals.com/jayanagar/",
            "address": "Central Mall 45/1, 45th Cross Road, opp. Bangalore, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069",
            "pincode": 560069,
            "contact": [
              "18001024647"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            "hospitalName": "United Hospital",
            "email": "https://unitedhospitals.com/",
            "address": "No.30, Madhavan Park Circle, 10th Main Rd, Jayanagar 3rd Block, Bengaluru, Karnataka 560011",
            "pincode": 560011,
            "contact": [
              "8045666666"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "The Bangalore Hospital",
            "email": "http://www.thebangalorehospital.com/",
            "address": "202, Rashtriya Vidyalaya Rd, 2nd Block, Basavanagudi, Bengaluru, Karnataka 560004",
            "pincode": 560004,
            "contact": [
              "8042781643"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Re life hospital",
            "email": "http://www.relifehospitals.com/",
            "address": "No 208 & 209, Dr Puneeth Rajkumar Rd, Banashankari 3rd Stage, Bengaluru, Karnataka 560085",
            "pincode": 560085,
            "contact": [
              "9606021671"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Fortis Hospital Richmond Road",
            "email": "https://fortisbangalore.com/",
            "address": "No:62, Richmond Road, Mother Teresa Rd, behind Sacred Heart Church Entry from, Richmond Town, Bengaluru, Karnataka 560025",
            "pincode": 560025,
            "contact": [
              "8884481414"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Sagar Hospitals",
            "email": "https://www.sagarhospitals.in/",
            "address": "44, 54, Tilak Nagar Main Rd, Bannerughatta Approach Road Layout, 4th T Block East, Tilak Nagar, Jayanagar, Bengaluru, Karnataka 560041",
            "pincode": 560041,
            "contact": [
              "8042888888"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            "hospitalName": "The Venlakh Hospital",
            "email": "https://thevenlakhhospital.com/",
            "address": "#123, 5th Main Rd, Chamrajpet, Bengaluru, Karnataka 560018",
            "pincode": 560018,
            "contact": [
              "8026508118"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Mallige Hospital",
            "email": "http://www.mallige.com/",
            "address": "31/32, Crescent Rd, Madhava Nagar, Gandhi Nagar, Bengaluru, Karnataka 560001",
            "pincode": 560001,
            "contact": [
              "8067165555"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "Fortis Hospital",
            "email": "https://fortisbangalore.com",
            "address": "14 Cunningham Road near Sigma Central Mall, Vasanth Nagar, Bengaluru, Karnataka 560052",
            "pincode": 560052,
            "contact": [
              "9686860310"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "Manipal Hospital",
            "email": "https://www.manipalhospitals.com/yeshwanthpur/",
            "address": "Manipal Hospital Millers Road. 71/1, Millers Road, Opp to St. Anne's College, Vasanth Nagar, Bengaluru, Karnataka 560052",
            "pincode": 560052,
            "contact": [
              "18001024647"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "Victoria Hospital",
            "email": "http://victoriahospitalbangalore.org/",
            "address": "Mysore Rd, near City Market, New Tharagupet, Bengaluru, Karnataka 560002",
            "pincode": 560002,
            "contact": [
              "8026701150"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
            
            "hospitalName": "BMCRI Super Speciality",
            "email": "http://bmcribangalore.org/",
            "address": "Alur Venkata Rao Rd, New Tharagupet, Bengaluru, Karnataka 560002",
            "pincode": 560002,
            "contact": [
              "8026981800"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "Narayana Nethralaya Eye Hospital",
            "email": "https://www.narayananethralaya.org/",
            "address": "121/C, Chord Rd, Near Iskcon Temple, 1st R Block, Rajajinagar, Bengaluru, Karnataka 560010",
            "pincode": 560010,
            "contact": [
              "8066121643"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "Kauvery Hospitals",
            "email": "https://kauveryhospitalsbangalore.com/",
            "address": "Hubli, Survey no 92/1 B, Hewlett Packard Avenue, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100",
            "pincode": 560100,
            "contact": [
              "8068016801"
            ],
            "doctorsList": [],
            "treatmentList": []
          },{
           
            "hospitalName": "Jayadeva Hospital",
            "email": "http://www.jayadevacardiology.com/",
            "address": "B-8, B T M I Stage, Marenahalli Rd, KEB Colony, Jayanagara 9th Block, Jayanagar, Bengaluru, 560041",
            "pincode": 560041,
            "contact": [
              "8022977229"
            ],
            "doctorsList": [],
            "treatmentList": []
          }])

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

      
        <h2 style={{marginTop:"4em"}}>Hospitals List</h2>
            
            {
                Hospiatal.map((item, index) => {
                return <HospitalCard index={index} item={item} />
                })
            } 
    </div>
    </>
  )
}

export default ViewHospitalList
