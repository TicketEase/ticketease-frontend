import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import ModalCard from './ModalCard';
import axios from "axios";


function Cardds(props) {
  // console.log(props);
  const [clickedDelBtn, setClickedDelBtn] = useState(false);
  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);



  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setclickedCard(item);
  }
  const handledelete = async (id) => {
  console.log(id);
  const serverURL = `${process.env.REACT_APP_SERVER_URL}/closeCustomerTkt/${id}`
  const axiosRes = await axios.patch(serverURL);
  const serverURL2 = `${process.env.REACT_APP_SERVER_URL}/allCustomersTickets`
  const axiosRes2 = await axios.get(serverURL2);
  takeNewArrFromChild(axiosRes2.data);  }
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
      {props.customerticketid} : {props.tktsubject}
      </div>
      <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
       <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
      <div className="ag-courses-item_title" style= {{fontSize:'small'}}>
       {props.tktdescription}
       </div>
       <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
       <div className="ag-courses-item_date-box">
       <Button variant="outline-warning" onClick={() => { handleupdate(props) }}>Create ticket</Button>
<Button variant="outline-warning" onClick={() => { handledelete(props.customerticketid) }}>Close ticket</Button>
       </div>
     </div>
  </div>
</div>
</div> 
      <ModalCard showFlag={showUpdate} handleclose={handleclose} item={clickedCard} takeNewArrFromChild={takeNewArrFromChild} />        
    </>
  )
}


export default Cardds;







