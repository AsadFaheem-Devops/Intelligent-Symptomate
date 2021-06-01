import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import Image from "../components/images/login.jpg"
// import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from "../components/Navbar/LSheader"

export default function Signup() {
  const [fname, setFname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [error, setError] = React.useState("");
  var history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: fname,
      username: email,
      password: password,
    };

    axios.post('http://localhost:9000/users/signup', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        if (res.data.success) {
          history.push("/login");
        }

      }).catch((res) => setError("Sign up error"))

    // axios.post('http://localhost:9000/users/auth/google/', data, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   }
    // })
    //   .then((res) => {
    //     if (res.data.success) {
    //       history.push("/");
    //     }

    //   });
  }

  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => setShowResults(true)


  
  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      fname.length > 0 &&
      cpassword.length > 0 &&
      password === cpassword
    );
  }
  function validatePassword() {
    if (password !== cpassword) {
      setError("Password Doesnot match");
    }
  }
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
              <div className="Login">
                <h1 style={{color: "#ffff"}}>Registration</h1>
                <Form onSubmit={handleSubmit} style={{color: "#ffff"}}>
                  <Form.Group size="lg" controlId="fname">
                    <Form.Label style={{color: "#ffff"}}>Full Name</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password"
                    style={{ paddingBottom: "5%" }}>
                    <Form.Label>Confrim Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={cpassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </Form.Group>
                  {showResults ?
                    <div className="validation ">

                      {error} </div> : <div></div>}

                  <div style={{ textAlign: "center", paddingTop: "3%" }}>
                    <div>
                      <Button
                      variant="warning"
                        onClick={validatePassword}
                        size="lg"
                        type="submit"
                        onClick={onClick}
                        disabled={!validateForm()}
                      >
                        Register
                    </Button>

                    </div>

                    <div style={{ paddingTop: "3%" }}>
                      <Button variant="light" size="md" type="submit" href="/login">
                        Have an acount? Login
                      </Button>
                    </div>

                    {/* <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block  btn-social btn-google" href="/users/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign In with Google
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <a class="btn btn-block  btn-social btn-facebook" href="/auth/google" role="button">
            <i class="fab fa-facebook"></i>
            Sign In with Facebook
          </a>
        </div>
      </div>
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
