import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from "../components/Navbar/LSheader";
import { GoogleLogin } from "react-google-login";
import Image from "../components/images/login.jpg"

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const history = useHistory()
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    
    event.preventDefault();
    const data = {
      username: email,
      password: password,
    };

    axios.post('http://localhost:9000/users/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data)
          history.push({
            pathname: "/",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })
          onClick()
        }
      }
      ).catch( function(res){ 
        setMsg("Login error")
        onClick()
    })

  }
  //   const CID="117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com";
  //   const onSuccess = (res) =>{
  //     console.log("Login success",res.profileObj);

  //   }
  //   const onFailure=(res)=>{
  //     console.log("fail",res)
  //   }
  // // 
  const [showResults, setShowResults] = React.useState(false)

   const onClick = () => setShowResults(true)
// function onClick() {
// if(msg == "Login error"){
//   setShowResults(true)
// }
// else{
//   setShowResults(false)
// }
//}
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div
          style={{
            
            display: "flex",
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "3%",
            justifyContent: "center",
            alignItems: "center",
            alignContent:"center",
            paddingBottom: "5%",
          }}
        >
          <div
            style={{
              border: "1px solid #DCDCDC",
              //paddingTop:"5%",
              backgroundColor: "#fff",
              display: "flex",
              width:'35%',
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "75px",
              alignContent:"center",
            }}
          >
           <div
              style={{
                //backgroundImage: `url(${Image})`,
                display: "flex",
               justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid #DCDCDC",
                backgroundColor: "#0047b3",
                width: "100%",
                alignItems:"center",
                //paddingTop: "5%",
                borderRadius: "75px",
                // zIndex: -10
              }}
            >
            <div className="main-div">
              <h1 style={{ textAlign: "center", color: "#ffff"}}>Login</h1>
              <div className="Login">
                <Form onSubmit={handleSubmit}>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label style={{ textAlign: "left ",fontSize:"19px",color: "#ffff" }}>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" style={{ paddingBottom: "5%",fontSize:"19px",color: "#ffff" }} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  {showResults ?
                    <div className="validation">
                      {msg} </div> : <div></div>}


                  <div style={{ textAlign: "center" }}>
                    <div style={{color: "#ffff"}}>
                      <Button style = {{color: "#0047b3"}} size="lg"  variant="warning" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                    </div>
                    <div>
                      {/* <GoogleLogin 
              clientId={CID}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              isSignedIn={true}
            /> */}
                    </div>

                    <div style={{ paddingTop: "3%" }}>
                      <Button variant="light" size="md" type="submit" href="/signup">
                        Don't have account? Register now
                      </Button>
                    </div>
                    {/* <div style={{ paddingTop: "3%" }}>
                      <Button variant="light" size="md" type="submit" href="/admin/login">
                        Admin Login
                      </Button>
                    </div> */}

                  </div>

                </Form>
              </div>

            </div>
          </div>
        </div>
      </div>
</div>
    </div>
  );
}
