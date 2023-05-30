import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import TackenModal from './TackenModal';


function TackenCards(props) {

  const [clickedDelBtn, setClickedDelBtn] = useState(false);
  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);

  //console.log(props);

  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setclickedCard(item);
  }

   const handledelete = async (id) => {
   const serverURL = `${process.env.REACT_APP_SERVER_URL}/RemoveAgentTiketFromEmployeeWindow/${id}`
   const axiosRes = await axios.patch(serverURL);

   const serverURL3 = `${process.env.REACT_APP_SERVER_URL}/allAssignTicketByEmployee`
        const axiosRes3 = await axios.get(serverURL3);
        props.takeNewArr(axiosRes3.data);}
  
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
      <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
      {props.employeecomment}
       </div>
       <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
       <div className="ag-courses-item_date-box">
      
<Button variant="outline-warning" onClick={() => { handleupdate(props) }}>Add Comment</Button>
<Button variant="outline-warning" onClick={() => { handledelete(props.agentticketid) }}>Remove </Button>
       </div>
     </div>
  </div>
</div>
</div> 
      <TackenModal showFlag={showUpdate} handleclose={handleclose} item={props} takeNewArrFromChild={takeNewArrFromChild} />        
    </>
   
  )

}
export default TackenCards;







