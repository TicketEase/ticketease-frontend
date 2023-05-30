import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import './AddCustomerTicket.css';




function AddCustomerTicket(props) {
  

  function handleClose() {
    props.hide();
  }

  function sendReq(event) {
    event.preventDefault();
    let subject = event.target.subject.value;
    console.log(subject);
    let discription = event.target.discription.value;
    console.log(discription);
    function Req(subject, discription) {
      this.tktsubject = subject;
      this.tktdescription = discription;
    }

    let newReq = new Req(subject, discription);
    // console.log(newReq);
    // console.log(props.customerData[0].customerid);
    // console.log(`${process.env.REACT_APP_SERVER_URL}/addCustomerTicket/${props.customerData[0].customerid}`, newReq)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/addCustomerTicket/${props.customerData[0].customerid}`, newReq)
      .then(response => {
        console.log(`thanks for contacting us, one of our team will contact you with in 24 hours .`);
        props.hide();
        axios.get(`${process.env.REACT_APP_SERVER_URL}/getCustomerTickets/${props.customerData[0].customerid}`)
        .then(response => {
          // console.log('this is the response', response.data);
          props.refreshTicketsList(response.data);
          
        }).catch(error => {
          console.log('this is the error', error);
        })
      }).catch(error => { console.log(error); })


     

    // props.refreshTicketsList();
  };
  


  return (
    <>

      <Modal show={props.show} onHide={handleClose} className='modalContainer' >
        <Modal.Header closeButton  className='modalHeader'>
          <Modal.Title>how can we assist you ? </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <Form onSubmit={sendReq} className='ticketForm' >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="payment issue/late delivery/..."
                autoFocus
                id='subject'
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>detailed discription.</Form.Label>
              <Form.Control as="textarea" rows={3} id='discription' />
            </Form.Group>
        <Modal.Footer>
        <Button variant="warning" type="submit">
            submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

    </>
  )
}
export default AddCustomerTicket;