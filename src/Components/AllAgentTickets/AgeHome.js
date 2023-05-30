import axios from "axios";
import { useEffect, useState } from "react";
import AgeCardList from "../Sorting/AgeCardList";
import NavbarAgeHome from './NavbarAgeHome';
import NavbarCustomerHome from '../ALLCustomersTkt/NavbarCustomerHome'
import Footer from "../Footer/Footer";
function AgeHome() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/allAgentTickets`;
        const result = await axios.get(serverUrl);
        setAgeData(result.data);
    }
    const takeNewArrFromAgentCardsPage = (arr) => {
        setAgeData(arr);
    }
    useEffect(() => {
        sendReq();
    }, []);
    return (
        <>

        <NavbarAgeHome takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />

            <AgeCardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
            <Footer/>

        </>
    )
}

export default AgeHome;







   

    
  