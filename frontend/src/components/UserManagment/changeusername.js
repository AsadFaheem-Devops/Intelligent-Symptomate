import React, { useEffect } from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function ChangePassword() {
  const [fname, setname] = React.useState("");
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
      history.push('/users/editprofile/changeusername')
    }
  }, [location, history])

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name:fname,
    };

    axios.post('http://localhost:9000/users/editprofile/changeusername', data, {
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
      fname.length>0
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
              paddingTop: "5%",
              paddingBottom: "5%",
              alignItems: "center"
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%",
                textAlign:"center"
              }}
            >
              <h5>Change Name</h5>
              <p>{msg}</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="fname"
                    name="fname"
                    placeholder="Your name"
                    onChange={(e) => setname(e.target.value)}
                  />

                
                <Button size="lg"style = {{color: "#0c0530"}}
                    variant="warning" type="submit"  disabled={!validateForm()}>
                    Change
                  </Button>
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
              <h5>Change name</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left"
                }}
              >
                <form>
                  <input
                    type="text"
                    className="fname"
                    name="fname"
                    placeholder="Your name.."
                    onChange={(e) => setname(e.target.value)}
                  />

                 
                  <Button
                    href="/editprofile"
                    className="bsubmit"
                    variant="warning"
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
