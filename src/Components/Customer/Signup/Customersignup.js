import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Customersignup() {
  
  
  
  // this code to handle the submit event
  let [newcustomer, setNewcustomer] = useState({});


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    function Customer(name, address, email, password) {
      this.cname = name;
      this.cemail = email;
      this.caddress = address;
      this.cpassword = password;
    }


    let name = event.target[0].value;
    let address = event.target[1].value;
    let phone = event.target[2].value;
    let email = event.target[3].value;
    let password = event.target[4].value;
    let repeatpassword = event.target[5].value;

    if (password === repeatpassword) {
      let customer = new Customer(name, address, email, password);
      console.log('this is the object', customer);
      let addcustomer = async () => {

        let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addCustomer`, customer);
        // setNewcustomer(response.data);
        console.log('this the response ', response.data);
        setNewcustomer(response.data);
      }

      addcustomer();
      alert("you have successfully signed up");


    } else {
      alert("passwords do not match");

    }
    console.log('useState',newcustomer);
    navigate('/customer');
  };
  

  let [showFlag, setshowFlag] = useState(false);
  let showcofirmation = () => {
      setshowFlag(true);
  }


  let handleClose = () => {
    setshowFlag(false);
}


  return (
    <>

    {/* <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="location me-3" size='lg' />
                  <MDBInput label='address' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="phone me-3" size='lg' />
                  <MDBInput label='phone number' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' />
                </div>

                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn type='submit' className='mb-4' size='lg' onClick={showcofirmation}>Register</MDBBtn>
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer> */}
    {/* <SignupconfModal show={showFlag} hide={handleClose}/> */}




    <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3 style={{marginLeft:'-6%'}}>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text"  id="username" placeholder="Enter your name" />

                <label htmlFor="address">address</label>
                <input type="text" id="username" placeholder="city/country"/>

                <label htmlFor="number">phone number</label>
                <input type="text"  id="username" placeholder="07xxxxxxxxx"/>

                <label htmlFor="Email">Email</label>
                <input type="email"  id="username" placeholder="johndoe@gmail.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <label htmlFor="password">Repeat Password</label>
                <input type="password" id="password"  placeholder="Repeat Password"/>


                <button type='submit'>sign up</button>
                
            </form>

    
    </>
  );
}
export default Customersignup;
