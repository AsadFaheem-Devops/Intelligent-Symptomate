import React, { useEffect } from "react";
import Header from "../Navbar/header"

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UserMain() {
  var history = useHistory();
  var location = useLocation();

  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/editprofile')
    }
  }, [location, history])
  return (
    <div>
      <Header token={token} user={user} />

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "1%",
            paddingBottom: "5%"
          }}
        >
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <h1>Edit profile</h1>

            <div
              style={{
                // display: "flex",
                // flexDirection: "column",
                textAlign: "center",
                color:"#ffff"
              }}
            >
              <Button variant="warning" style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/editprofile/changeusername",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  Change username
                </Link>
              </Button>
              {/* <div style={{ textAlign: "center" }}>
                    <div style={{color: "#ffff"}}>
                      <Button style = {{color: "black"}} size="lg" variant="warning" type="submit" >
                        Login
                    </Button>
                    </div>
                    </div> */}
                      
              <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/editprofile/changepassword",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  Change password
                </Link>
              </Button>
              <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/editprofile/changeDOB",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  Change DOB
                </Link>
              </Button>
              <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/editprofile/deleteuser",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  Delete account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
