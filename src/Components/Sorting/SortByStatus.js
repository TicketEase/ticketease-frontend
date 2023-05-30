import axios from "axios";
import { useEffect, useState } from "react";
// import CardList from "./CardList";
import NavbarAgeHome from "../AllAgentTickets/NavbarAgeHome";
import { useParams } from 'react-router-dom';
import AgeCardList  from './AgeCardList';


function SortByStatus(props) {
    const [AgeData, setAgeData] = useState([]);

    const { StaId } = useParams();

    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/sortAgTicketbyStatus/${StaId}`;
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

export default SortByStatus;