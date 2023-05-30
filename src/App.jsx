import React from 'react';
import AgeHome from './Components/AllAgentTickets/AgeHome';
import CustomerHome from './Components/ALLCustomersTkt/CustomerHome';
import SortByDepartment from './Components/Sorting/SortByDepartment';
import SortByStatus from './Components/Sorting/SortByStatus';
import SortByPriority from './Components/Sorting/SortByPriority';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import FAQSearchBar from './Components/FAQ/FAQSearchBar';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpoloyeeLogIn from './Components/Login/EmpoloyeeLogIn';
import AgentLogIn from './Components/Login/AgentLogIn';
import TackenHome from "./Components/EmployeeSide/TackenTicket/TackenHome";
import EmployeeHome from "./Components/EmployeeSide/EmployeeHome";
// ______________________________________________________________________________________________________
import Customerlogin from './Components/Customer/Customerlogin/Customerlogin';
import Customersignup from './Components/Customer/Signup/Customersignup';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Customerpage from './Components/Customer/Customerpage/Customerpage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer/Footer';



export default function App() {

  let [customerVarified, setcustomerVarified] = useState(false);
  let [customerData, setcustomerData] = useState([]);
  let handleLogin = (customerObject, formEmail) => {
    setcustomerData(customerObject);
    if (customerObject[0].cemail === formEmail) {
      setcustomerVarified(true);
    };
  }

  function checkAuth(item) {
    setcustomerData(item);
    setcustomerVarified(true);
  }


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQSearchBar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<AgeHome />} />
        <Route path="/allagenttickets" element={<AgeHome />} />
        <Route path="/allcustomerstickets" element={<CustomerHome />} />
        <Route path="/sortagticketbystatus/:StaId" element={<SortByStatus />} />
        <Route path="/sortagticketbydepartment/:DepId" element={<SortByDepartment />} />
        <Route path="/sortagticketbypriority/:PriId" element={<SortByPriority />} />
        <Route path="/EmpoloyeeLogIn" element={<EmpoloyeeLogIn />} />
        <Route path="/AgentLogIn" element={<AgentLogIn />} />
        <Route path="/TackenTicketHome" element={<TackenHome />} />
        <Route path="/EmployeeHome" element={<EmployeeHome />} />
       {/* ____________________________________________________________________________ */}
       {!customerVarified && <Route path="/customer" element={<Customerlogin passing={handleLogin} checkAuth={checkAuth} />} />}
        <Route path="/Customersignup" element={<Customersignup />} />
        {/* <Route path="/customerpage" element={<Customerpage customerData={customerData} />} /> */}
      </Routes>
         {customerVarified && <Customerpage customerData={customerData} />}
      {/* <Cardds/> */}
      {/* <Footer/> */}
    </>
  )
}