import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Homepage from './Components/Homepage';
import UserPage from './Components/UserPage';
import SearchAmbu from './Components/SearchAmbulance/Search_ambu';
import SearchHospitalData from './Components/SearchHospitalByDisease/Search';
import HospNavBar from './Components/HospNavBar';
import Grid from './Components/HospitalDataGrid';
import HospitalPage from './Components/HospitalPage';
import UserNavBar from './Components/Navbar_user';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchHospitalByDisease/SearchBar';
import Faq from './Components/FAQ';
import GovPolicies from './Components/GovPolicies';
import SignIn from './Components/UserPagess/SignIn';
import SignUp from './Components/UserPagess/SignUp';
import ContactPage from './Components/UserPagess/ContactPage'
import Search from './Components/SearchHospitalByDisease/Search';
import RaiseQuery from './Components/UserPagess/RaiseQuery'
import SignInHospital from './Components/HospitalPaggess/SignInHospital';
import SignUpHospital from './Components/HospitalPaggess/SignUpHospital';
import AdminSignUp from './Components/AdminSignUp';
import AddDoctor from './Components/HospitalPaggess/AddDoctor';
import AddTreatment from './Components/HospitalPaggess/AddTreatment';
import HospitalDepartment from './Components/HospitalPaggess/HospitalDepartment';
import ViewTreatmentList from './Components/HospitalPaggess/ViewTreatmentList';
import ViewDoctorList from './Components/HospitalPaggess/ViewDoctorList';
import ViewDailyUpdates from './Components/HospitalPaggess/ViewDailyUpdates';
import Userfaq from './Components/UserPagess/Userfaq';
import UserEmergency from './Components/SearchAmbulance/UserEmergency'
import UpdateTreatmenprice from './Components/HospitalPaggess/UpdateTreatmentPrice';
import AdminHomePage from './Components/AdminPagess/AdminHomepage';
import Queries from './Components/AdminPagess/Queries';
import AlignItemsList from './Components/AdminPagess/AlignItemsList';
import DailyUpdates from './Components/UserPagess/dailyUpdates'
import ViewTrt from './Components/UserPagess/ViewTrt'
import Hospitalauthentication from './Components/AdminPagess/Hospitalauthentication';
import Hospitalauthorization from './Components/AdminPagess/Hospitalauthorization'
import ViewDailyUpdatesAdmin from './Components/AdminPagess/ViewDailyUpdatesAdmin';
import QueryChart from './Components/AdminPagess/QueryChart'
import AdminWarning from './Components/AdminPagess/AdminWarning';
import ViewWarning from './Components/AdminPagess/ViewWarning'
import ViewHospitals from './Components/HospitalPaggess/ViewHospitals'
import OtherDetails from './Components/HospitalPaggess/OtherDetails'
import ViewDrUser from './Components/UserPagess/ViewDrUser'
import SocialHandles from './Components/AdminPagess/SocialHandles';
import GoogleHandless from './Components/AdminPagess/GoogleHandless';
import CardAdmins from './Components/AdminPagess/CardAdmins';
import UserCharts from './Components/UserCharts'
function App() {
  return (
    <div className="App">
      
       
         <Router>
           <Routes>
              <Route exact path="/"element={<Homepage/>}/>
              <Route exact path="/DiseaseSearch"element={<Search/>}/>
              <Route exact path="/Contact"element={<ContactPage/>}/>
              <Route exact path="/Home"element={<Homepage/>}/>
              <Route exact path="/HospitalHome"element={<HospitalPage/>}/>
              <Route exact path="/UserHome"element={<UserPage/>}/>
              <Route exact path="/QnA"element={<Userfaq/>}/>
              <Route exact path="/FAQ"element={<Faq/>}/>
              <Route exact path="/UserLogin"element={<SignIn/>}/>
              <Route exact path="/SignUp" element={<SignUp/>}/>
              <Route exact path="/HospitalLogin"element={<SignInHospital/>}/>
              <Route exact path="/HospitalSignUp"element={<SignUpHospital/>}/>
              <Route exact path="/UpdateTreatmentPrices"element={<UpdateTreatmenprice/>}/>
              <Route exact path="/AdminHome"element={<AdminHomePage/>}/>
              <Route exact path="/AdminLogin"element={<AdminSignUp/>}/>
              <Route exact path="/UserPage"element={<UserPage/>}/>
              <Route exact path="/EmergencyServices"element={<SearchAmbu/>}/>
              <Route exact path="/SearchByDis" element={<Search/>}/>
              <Route exact path="/PolicyDescription" element={<GovPolicies/>}/>
              <Route exact path="/RaiseQuery"element={<RaiseQuery/>}/>
              <Route exact path="/HospitalPage"element={<HospitalPage/>}/>
              <Route exact path="/LogOut"element={<Homepage/>}/>
              <Route exact path="/AddCOVIDInformation" element={<HospitalDepartment/>}/>
              <Route exact path="/AddTreatmentDetails" element={<AddTreatment/>}/>
              <Route exact path="/AddDoctor" element={<AddDoctor/>}/>
              <Route exact path="/Query" element={<AlignItemsList/>}></Route>
              <Route exact path="/Response" element={<Queries/>}></Route>
              <Route exact path="/ViewTreatment" element={<ViewTreatmentList/>}/>
              <Route exact path="/ViewDoctorList" element={<ViewDoctorList/>}/> 
              <Route exact path="/ViewDailyUpdates"element={<ViewDailyUpdates/>}/>
              <Route exact path="/ViewCharts"element={<UserCharts/>}/>
              
              <Route exact path="/Authorization" element={<Hospitalauthorization/>}></Route>
              <Route exact path="/DailyUpdates" element={<ViewDailyUpdatesAdmin/>}></Route>
              <Route exact path="/ChartView" element={<QueryChart/>}></Route>
              <Route exact path="/HospitalAuthentcation" element={<Hospitalauthentication/>}></Route>
              <Route exact path="/SendWarning" element={<AdminWarning/>}></Route>
              <Route exact path="/ViewWarnings" element={<ViewWarning/>}></Route>
              <Route exact path="/ViewHospital" element={<ViewHospitals/>}></Route>
              <Route exact path="/OtherDetails"element={<OtherDetails/>}/>
              <Route exact path="/Updates"element={<DailyUpdates/>}/>
              <Route exact path="/Treatments"element={<ViewTrt/>}/>
              <Route exact path="/ViewDr"element={<ViewDrUser/>}/>
              <Route exact path="/SocialHandles" element={<CardAdmins/>}></Route>
              <Route exact path="/GoogleHandles" element={<GoogleHandless/>}></Route>
            </Routes>
          </Router>
          
         

    </div>
)}

export default App;

// User NavBar   
// Hospital Navbar                                                   
// policies Description...
// Ambulance Search...
// Search hospital Name By Disease...
// Hospital Data show...
// 


//Admin & Hospital mbb7224@gmail.com 123
//USER mbb7224@gmail.com 22

