import axios from "axios";
import { useEffect, useState } from "react";
import EMMCardList from "./EMMCardList";
import NavbarEmployeeHome from './NavbarEmployeeHome';
import Footer from "../Footer/Footer";

function EmployeeHome() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/allAgentTicketsOpen`;
        const result = await axios.get(serverUrl);
        setAgeData(result.data);
    }
    const takeNewArrFromAgentCardsPage = (arr) => {
        setAgeData(arr);
    }
    useEffect(() => {
        sendReq();
    }, [AgeData]);
    return (
        <>
        <NavbarEmployeeHome/>
            <EMMCardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
            <Footer/>

        </>
    )
}

export default EmployeeHome;







   

    
  