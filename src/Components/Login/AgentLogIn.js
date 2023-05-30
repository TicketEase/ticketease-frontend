import React, { useState } from 'react';
import axios from 'axios';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import { useNavigate } from 'react-router-dom';


function AgentLogIn(props) {

   
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [errorMessage, setErrorMessage] = useState('');
            const navigate = useNavigate();

            const handleSubmit = (e) => {
              e.preventDefault();
           
              navigate('/allagenttickets');
            //   const serverURL = `${process.env.REACT_APP_SERVER_URL}/addCustomer`;
            // const axiosRes = axios.post(serverURL,obj);

            };
            return (
            <>
                  <CustomNavbar/>

              <style
                media="screen"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n      *,\n*:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: white;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #FFD300,\n        #F5F5F5\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #FFD300,\n        #F09819\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: 520px;\n    width: 400px;\n    background-color: rgba(192,192,192,0.3);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #00000;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(0,0,0,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #3f3f3f;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #FFFFFF;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #EAF0FB;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    "
                }}
              />
              <div className="background">
                <div className="shape" />
                <div className="shape" />
              </div>
              <div>
                {errorMessage && <p>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <label htmlFor="username">password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  <button type="submit">Login</button>
                </form>
              </div>
            </>
            )
        
      
    
   

}
export default AgentLogIn;


