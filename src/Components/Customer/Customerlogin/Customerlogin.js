import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import './CustomerLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function Customerlogin(props) {
    let [customerData, setcustomerData] = useState({}); // this is the data that we get from the server
    let [formEmail, setformEmail] = useState('');
    let varifyUser = (e) => {
        e.preventDefault();
        function Customer(email, password) {
            this.cemail = email;
            this.cpassword = password;
        }
        let email = e.target[0].value;
        setformEmail(email);
        let password = e.target[1].value;
        let varifycustomer = new Customer(email, password);
        let varify = () => {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/costmerValidationLogIn`, varifycustomer)
                .then(response => {
                    setcustomerData(response.data);
                    props.passing(response.data, email)
                    // console.log('this is the response', response.data);
                    if (response.data === "Invalid email or password") {
                        alert('Invalid email or password');
                    }
                })
        }
        varify();
    }
    // __________________________________________________________________________________________________
    let { loginWithRedirect } = useAuth0();



    const { user, isAuthenticated } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            console.log('this is the user', user);
            axios.get(`${process.env.REACT_APP_SERVER_URL}/getcustomerbyemail?email=${user.email}`)
                .then(response => {
                    console.log('this is the response', response.data);
                    if (response.data.length > 0) {
                        // setcustomerData(response.data);
                        // setcustomerVarified(true);
                        props.checkAuth(response.data);
                    } else {
                        alert('you are not registered,please sign up');
                    }
                })
                .catch(error => {
                    console.log('this is the error', error);
                })
        };
    }, [isAuthenticated]);
    return (
        <>
            {/* <MDBContainer className="my-5" >

                <MDBCard className="h-25">
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://e1.pxfuel.com/desktop-wallpaper/707/27/desktop-wallpaper-bulb-lighting-rope-electricity-edisons-light-lamp-mobile.jpg' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <span className="h1 fw-bold mb-0"></span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                <form onSubmit={varifyUser}>
                                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit' style={{ width: '100%' }}>Login</MDBBtn>
                                </form>
                                
                                <MDBBtn className="mb-2 w-100" size="lg" onClick={()=>loginWithRedirect()}>
                                    <MDBIcon fab icon="google" className="mx-2" />
                                    Sign in with google
                                </MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <Link to="/Customersignup"><p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p></Link>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer> */}


{/* <style
                media="screen"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      *,\n*:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: white;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #FFD300,\n        #F5F5F5\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #FFD300,\n        #F09819\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: 520px;\n    width: 400px;\n    background-color: rgba(192,192,192,0.3);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #00000;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(0,0,0,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #3f3f3f;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #FFFFFF;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #EAF0FB;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    "
                }}
            /> */}

            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={varifyUser} >
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <button type='submit'>Log In</button>
                <div className="social">
                    <div className="go" style={{width:'100%'}} onClick={()=>loginWithRedirect()}>
                        <i className="fab fa-google" /> Google
                    </div>
                  
                </div>
            <a className="small text-muted" href="#!">Forgot password?</a>
                                <Link to="/Customersignup"><p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p></Link>
            </form>







        </>
    );
}
export default Customerlogin;