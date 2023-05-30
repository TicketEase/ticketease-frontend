import '../Customer/Reqcard/Reqcards.css';
import Button from 'react-bootstrap/Button';


function Cardds(props) {

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
          {/* <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} /> */}
          <div className="ag-courses-item_title" style= {{fontSize:'small'}}>
          {props.agentdescription}
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
          <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date"><h6>Status: {props.agestatus}</h6>
          <h6>Employee Comment : {props.employeecomment}</h6>
         <h6>Priority: {props.agepriority}</h6></span>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}


export default Cardds;



{/* <div className="ag-format-container">
    <div className="ag-courses_box">
      <div className="ag-courses_item" style={{height:'300px',overflow:'scroll'}}>
        <div className="ag-courses-item_link">
          <div className="ag-courses-item_bg" />
          <div className="ag-courses-item_title" style={{height:'2em',padding:'0%'}}>
            {props.cardinfo.tktsubject}
          </div>
          {/* <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} /> */}
  //         <div className="ag-courses-item_title" style= {{fontSize:'small'}}>
  //           {props.cardinfo.tktdescription}
  //         </div>
  //         <div className="ag-courses-item_date-box">
  //           status:
  //           <span className="ag-courses-item_date">{props.cardinfo.tktstatus}</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div> */}