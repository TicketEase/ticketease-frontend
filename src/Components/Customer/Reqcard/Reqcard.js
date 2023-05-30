
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import './Reqcards.css'

function Reqcard(props) {
  return (
<>
  <div className="ag-format-container">
    <div className="ag-courses_box">
      <div className="ag-courses_item" style={{height:'300px',overflow:'scroll'}}>
        <div className="ag-courses-item_link">
          <div className="ag-courses-item_bg" />
          <div className="ag-courses-item_title" style={{height:'2em',padding:'0%'}}>
            {props.cardinfo.tktsubject}
          </div>
          {/* <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} /> */}
          <div className="ag-courses-item_title" style= {{fontSize:'small'}}>
            {props.cardinfo.tktdescription}
          </div>
          <div className="ag-courses-item_date-box">
            status:
            <span className="ag-courses-item_date">{props.cardinfo.tktstatus}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  );
}
export default Reqcard;