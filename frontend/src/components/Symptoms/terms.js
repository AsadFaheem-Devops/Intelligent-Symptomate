import React,{useEffect} from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router"

import { Link } from "react-router-dom";

import "../../styles.css";
import TermImg from "../../components/images/terms-img.PNG";
import { Button } from "react-bootstrap";
import { Progress } from "antd";
import { BrowserView, MobileView } from "react-device-detect";
import "antd/dist/antd.css";
import Header from "../Navbar/header"

function Terms() {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  var error = "";
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  var history = useHistory();
  var location = useLocation();
  useEffect(() => {
    if (location.state) {
        console.log(location)
        setUser(location.state.user);
        setToken(location.state.token);
        // setSCancer(cancer);
        // setImg(img);
       
    } else {
        history.push('/symptoms/terms')
    }
}, [location, history])

  return (
    <div>
    <Header/>
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <BrowserView>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "5%",
            paddingBottom: "5%"
          }}
        >
          <div>
            <Progress percent={20} status="active" />
          </div>
          <div
            className="float-container"
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <div className="float-child">
              {" "}
              <h3>Terms of Service</h3>
              <p>
                Before using the checkup, please read Terms of Service. Remember
                that:
              </p>
              <ul>
                <li>
                  <p>
                    <b>Checkup is not a diagnosis</b>
                  </p>
                  <p>
                    Checkup is for informational purposes and is not a qualified
                    medical opinion
                  </p>
                </li>
                <li>
                  <p>
                    <b>Do not use in emergencies</b>
                  </p>
                  <p>
                    In case of health emergency, call your local emergency
                    number immediately.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Your data is safe</b>
                  </p>
                  <p>
                    Information that you provide is anonymous and not shared
                    with anyone.
                  </p>
                </li>
              </ul>
              <ul style={{ paddingLeft: "5%" }}>
                <li>
                  <div
                    style={{
                      border: "3px solid #f8f8f8",
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <div className="float-child" style={{ paddingRight: "2%" }}>
                      <input
                        type="checkbox"
                        onChange={() => setChecked1(!checked1)}
                      />
                    </div>

                    <div style={{ paddingLeft: "0px" }} className="float-child">
                      <p>I allow to record symptoms</p>
                    </div>
                  </div>
                  <div
                    style={{
                      border: "3px solid #fff",
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <div className="float-child" style={{ paddingRight: "2%" }}>
                      <input
                        type="checkbox"
                        onChange={() => setChecked2(!checked2)}
                      />
                    </div>{" "}
                    <div className="float-child">
                      <p>I allow to provide the data!</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="float-child">
              <img src={TermImg} alt="introimage" />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              textAlign: "right",
              padding: "3%"
            }}
          >
            <div className="btn-toolbar">
              <div className="left-group">
                <Button href="/symptoms/introduction" variant="link">
                  back
                </Button>
              </div>
              <div className="right-group">
                <Button
                 
                  disabled={checked1 || checked2}
                  variant="warning"
                >
                 <Link
                  to={{
                    pathname: "/symptoms/forwhom",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                   Next
                </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          style={{
            paddingTop: "3%"
          }}
        >
          <div>
            <Progress percent={20} status="active" />
          </div>
          <div
            className="float-container-mobile"
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <div className="float-child">
              <h3>Terms of Service</h3>
              <p>
                Before using the checkup, please read Terms of Service. Remember
                that:
              </p>
              <ul>
                <li>
                  <p>
                    <b>Checkup is not a diagnosis</b>
                  </p>
                  <p>
                    Checkup is for informational purposes and is not a qualified
                    medical opinion
                  </p>
                </li>
                <li>
                  <p>
                    <b>Do not use in emergencies</b>
                  </p>
                  <p>
                    In case of health emergency, call your local emergency
                    number immediately.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Your data is safe</b>
                  </p>
                  <p>
                    Information that you provide is anonymous and not shared
                    with anyone.
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <div
                    style={{
                      border: "3px solid #f8f8f8",
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <div className="float-child">
                      <input
                        type="checkbox"
                        onChange={() => setChecked1(!checked1)}
                      />
                    </div>{" "}
                    <div style={{ paddingLeft: "0px" }} className="float-child">
                      <p>Possible causes of your symptoms</p>
                    </div>
                  </div>
                  <div
                    style={{
                      border: "3px solid #f8f8f8",
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <div className="float-child">
                      <input
                        type="checkbox"
                        onChange={() => setChecked2(!checked2)}
                      />
                      <p style={{ color: "red" }}>{error}</p>
                    </div>{" "}
                    <div className="float-child">
                      <p>Options for next steps </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="float-child">
              <img src={TermImg} alt="introimage" />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              textAlign: "right",
              padding: "3%"
            }}
          >
            <div className="btn-toolbar">
              <div className="left-group">
                <Button href="/symptoms/introduction" variant="link">
                  back
                </Button>
              </div>
              <div className="right-group">
                <Button
                  href="/symptoms/forwhom"
                  disabled={checked1 || checked2}
                  variant="warning"
                >
                  Next
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
    </div>
  );
}
export default Terms;
