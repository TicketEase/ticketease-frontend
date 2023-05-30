import axios from "axios";
import { useEffect, useState } from "react";
// import CardList from "./CardList";
import NavbarAgeHome from "../AllAgentTickets/NavbarAgeHome";
import { useParams } from 'react-router-dom';
import AgeCardList  from './AgeCardList';


function SortByPriority() {
    const [AgeData, setAgeData] = useState([]);

    const { PriId } = useParams();

    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/sortAgTicketbyPriority/${PriId}`;
        const result = await axios.get(serverUrl);
        // console.log(result.data);
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

export default SortByPriority;