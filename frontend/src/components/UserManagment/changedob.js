import React, { useEffect } from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function ChangePassword() {
  const [dob, setdob] = React.useState("");
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  const [msg, setMsg] = React.useState('')
  var history = useHistory();
  var location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/users/editprofile/changeDOB')
    }
  }, [location, history])

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      dob: dob,
    };

    axios.post('http://localhost:9000/users/editprofile/changeDOB', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          history.push({
            pathname: '/editprofile',
            state: {
              user: user,
              token: token
            }
          });
        }
        else {
          setMsg(res.data.message)
        }

      });
  }

  function validateForm() {
    return (
      dob.length > 0 && dob >12 && dob<123
    );
  }
  return (
    <div>
      <Header token={token} user={user} />

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "1%",
              paddingBottom: "5%",
              alignItems: "center"
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >


              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h2 style={{ alignContent: "center" }}>Change Age</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    className="fname"
                    name="dob"
                    placeholder="Your age"
                    onChange={(e) => setdob(e.target.value)}
                  />

                  <div style={{ alignContent: "center" }}>
                  <p>{msg}</p>

                  <Button  style = {{color: "#0c0530"}}
                    variant="warning"
                    size="lg" type="submit" disabled={!validateForm()}>
                    Change
                  </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div
            style={{
              paddingTop: "5%",
              textAlign: "center"
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >
              <h5>Change Age</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left"
                }}
              >
                <form>
                  <input
                    type="number"
                    className="fname"
                    name="dob"
                    placeholder="Your age.."
                    onChange={(e) => setdob(e.target.value)}
                  />


                  <Button
                    href="/editprofile"
                    className="bsubmit"
                    style = {{color: "#0c0530"}}
                    variant="warning"
                    size="lg"
                    disabled={!validateForm()}
                  >
                    Submit
                </Button>
                </form>
              </div>
            </div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
