import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function EMMCards(props) {

  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);



  const handleclose = () => {
    setShowUpdate(false);
  }

  const handleTake = async (id) => {

  const serverURL = `${process.env.REACT_APP_SERVER_URL}/assignTicketByEmployee/${id}`
  const axiosRes = await axios.patch(serverURL);
  setShowUpdate(true);
  
  }
  const takeNewArrFromChild = (arr) => {
    props.takeNewArr(arr);
  }

  return (
    <>
     
<div className="ag-format-container">
<div className="ag-courses_box">
  <div className="ag-courses_item" style={{height:'300px',overflow:'scroll'}}>
    <div className="ag-courses-item_link">
      <div className="ag-courses-item_bg" />
      <div className="ag-courses-item_title" style={{height:'2em',padding:'0%'}}>
      {props.agesubject}
      </div>
      <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
       <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
      <div className="ag-courses-item_title" style= {{fontSize:'small'}}>
      {props.agentdescription}
       </div>
       <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
       <div className="ag-courses-item_date-box">
      
<Button variant="outline-warning" onClick={() => { handleTake(props.agentticketid) }}>Take Ticket</Button>
       </div>
     </div>
  </div>
</div>
</div> 
    </>
  )
}


export default EMMCards;





