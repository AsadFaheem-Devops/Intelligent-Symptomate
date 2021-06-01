import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";
import axios from 'axios';
import Image from "../images/login.jpg"
import { useHistory } from "react-router-dom";
import AHeader from "../Navbar/Aheader"

export default function ALogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
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

    axios.post('http://localhost:9000/admin/admin/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data)
          history.push({
            pathname: "/admin/privlages",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })
        }

      }).catch((res) => setError("Login error"))
  }
  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => setShowResults(true)

  return (
    <div>
      <AHeader />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "1%",
            paddingBottom: "5%",
          }}
        >
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              
            }}
          >
           <div
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid #DCDCDC",
                backgroundColor: "#0047b3",
               
                width: "100%",
                paddingTop: "5%",
                borderRadius: "5px",
                // zIndex: -10
              }}
            >
            <div className="main-div">
              <h1 style={{ textAlign: "center" }}>Login</h1>
              <div className="Login">
                <Form onSubmit={handleSubmit}>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label style={{ textAlign: "left " }}>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" style={{ paddingBottom: "5%" }} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  {showResults ?
                    <div className="validation ">
                      {error} </div> : null}


                  <div style={{ textAlign: "center" }}>
                    <div style={{}}>
                      <Button size="lg" type="submit" onClick={onClick} disabled={!validateForm()}>
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
                      <Button variant="light" size="md" type="submit" href="/login">
                        Patient Login?
                      </Button>
                    </div>

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
