import React,{Fragment, useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const clear =()=>{
      setEmail('');
      setPassword('');
  }

    async function userLogin(event) {
        event.preventDefault();
        try {
         const response =  await axios.post("https://localhost:7084/api/auth/login", {
            email: email,
            password: password,
          });
          console.log(response);
            //console.log(response.data.result.token);
          //setToken(response.data.result.token)
          const token = response.data.result.token;
          setToken(token);
          localStorage.setItem("authToken", token);
          toast.success('Logged in Successfully');
          clear();

          //navigate("/dashboard");
          navigate("/course");
        
          // alert("Logged in Successfully");
          //     setEmail("");
          //     setPassword("");
         
          // Load();
        } catch (err) {
          alert(err);
        }
      }


      return (
        <div>
            <h1>User Login</h1>
            <div class="container mt-4">
                <form>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div>
                <button class="btn btn-primary mt-4" onClick={userLogin}>
                    Login
                  </button>
                </div>
                </form>
            </div>
        </div>
      )




  //   async function userLogin(event){
  //    event.preventDefault();
  //       const url = 'https://localhost:7084/api/auth/login';
  //     const data ={
  //         "email": email,
  //         "password" : password
  //     }
  //     axios.post(url,data)
  //     .then((result)=>{
  //       setToken(result.data.token)
  //         clear();
  //         toast.success('Logged in Successfully');
  //     }).catch((error)=>{
  //         toast.success(error);
  //     })
  //   }



  // return (
  //   <Fragment>
  //     <ToastContainer>
  //       <Container>
  //         <Row>
  //           <Col>
  //             <input type="text" className="form-control" placeholder="Enter Email" 
  //                   value={email} onChange={(e)=> setEmail(e.target.value)} />
  //           </Col>
  //           <Col>
  //             <input type="text" className="form-control" placeholder="Enter Password" 
  //                   value={password} onChange={(e)=> setPassword(e.target.value)} />
  //           </Col>
  //         </Row>
  //       </Container>
  //     </ToastContainer>
  //   </Fragment>
  // )

    
}

export default Login;