import React, {useEffect} from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";

import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function DeleteAccount() {
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
      history.push('/users/editprofile/deleteusers')
    }
  }, [location, history])

 
  function handleSubmit(event) {
    event.preventDefault();
    console.log("handel submit")
    axios.delete('http://localhost:9000/users/editprofile/deleteusers', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        history.push({
          pathname: '/signup',
          state: {
            user: user,
            token: token
          }
        });
      }

    }).catch(res => setMsg(res.message));
}
  

  return (
    <div>
    <Header/>
    
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <BrowserView>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "1%",
            paddingBottom:"5%"
          }}
        >
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%",
              paddingBottom: "5%",
              alignItems: "center"
            }}
          >
          <form onSubmit={handleSubmit}>
            <h5 style={{ colr: "red" }}>
              Are you sure to delete your account??
            </h5>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
               <Button
                   variant="danger"
                    block
                    size="lg"
                    type="submit"
                   
                  >
                    Delete
                </Button>
            </div>
            </form>
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
              padding: "7%",
              alignItems: "center"
            }}
          >
            <h5>Change username</h5>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <form>
                <input
                  type="text"
                  className="fname-mobile"
                  name="firstname"
                  placeholder="Your old username.."
                />

                <input
                  type="text"
                  className="fname-mobile"
                  name="firstname"
                  placeholder="Your new username.."
                />

                <Button
                  href="/editprofile"
                  className="bsubmit-mobile"
                  variant="warning"
                >
                  Delete
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
