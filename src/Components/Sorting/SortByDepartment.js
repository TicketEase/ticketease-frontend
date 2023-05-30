import axios from "axios";
import { useEffect, useState } from "react";
// import CardList from "./CardList";
import NavbarAgeHome from "../AllAgentTickets/NavbarAgeHome";
import AgeCardList  from './AgeCardList';
import { useParams } from 'react-router-dom';
import './Cardds.css';

function SortByDepartment(props) {
    const [AgeData, setAgeData] = useState([]);
    const { DepId } = useParams();

    console.log(DepId);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/sortAgTicketByDepartment/${DepId}`;
        const result = await axios.get(serverUrl);
     //   console.log("nataly");
     
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
        <NavbarAgeHome/>

        
            <AgeCardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
        
            
        </>
    )
}

export default SortByDepartment;