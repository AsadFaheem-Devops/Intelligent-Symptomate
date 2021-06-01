import React,{useEffect} from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router"
import { Progress } from "antd";
import "antd/dist/antd.css";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";
import Header from "../Navbar/header"

import { Link } from "react-router-dom";

function Question() {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(true);
  const [checked6, setChecked6] = React.useState(true);
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
        history.push('/symptoms/questions')
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
            <Progress percent={60} status="active" />
          </div>

          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              Please check all the statements below that apply to you.
            </h3>
            <p style={{ textAlign: "center" }}>
              Select one answer in each row.
            </p>
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >
              {/* 1 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "10%" }}>I'm overweight or obese</p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes"
                  name="answer"
                  onChange={() => setChecked1(!checked1)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No"
                  name="answer"
                  onChange={() => setChecked1(!checked1)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN"
                  name="answer"
                  onChange={() => setChecked1(!checked1)}
                />{" "}
                Don't know
              </div>

              {/* 2 */}

              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "14.5%" }}>I smoke cigarettes</p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes1"
                  name="answer1"
                  onChange={() => setChecked2(!checked2)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No1"
                  name="answer1"
                  onChange={() => setChecked2(!checked2)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN1"
                  name="answer1"
                  onChange={() => setChecked2(!checked2)}
                />{" "}
                Don't know
              </div>

              {/* 3 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "5%" }}>
                  I've recently suffered an injury
                </p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes2"
                  name="answer2"
                  onChange={() => setChecked3(!checked3)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No2"
                  name="answer2"
                  onChange={() => setChecked3(!checked3)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN2"
                  name="answer2"
                  onChange={() => setChecked3(!checked3)}
                />{" "}
                Don't know
              </div>
              {/* 4 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "14%" }}>I've high cholestrol</p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes3"
                  name="answer3"
                  onChange={() => setChecked4(!checked4)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No3"
                  name="answer3"
                  onChange={() => setChecked4(!checked4)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN3"
                  name="answer3"
                  onChange={() => setChecked4(!checked4)}
                />{" "}
                Don't know
              </div>

              {/* 5 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "13.5%" }}>I have hypertension</p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes4"
                  name="answer4"
                  onChange={() => setChecked5(!checked5)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No4"
                  name="answer4"
                  onChange={() => setChecked5(!checked5)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN4"
                  name="answer4"
                  onChange={() => setChecked5(!checked5)}
                />{" "}
                Don't know
              </div>

              {/* 6 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "5%"
                }}
              >
                <p style={{ paddingRight: "17%" }}>I have diabetes</p>
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="Yes5"
                  name="answer5"
                  onChange={() => setChecked6(!checked6)}
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="No5"
                  name="answer5"
                  onChange={() => setChecked6(!checked6)}
                />{" "}
                No
                <input
                  style={{ marginLeft: "5%" }}
                  type="radio"
                  value="DN5"
                  name="answer5"
                  onChange={() => setChecked6(!checked6)}
                />{" "}
                Don't know
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
                  <Button href="/symptoms/forwhom" variant="link">
                    back
                  </Button>
                </div>
                <div className="right-group">
                  <Button
                    disabled={
                      checked1 ||
                      checked2 ||
                      checked3 ||
                      checked4 ||
                      checked5 ||
                      checked6
                    }
                    
                    variant="warning"
                  >
                    <Link
                  to={{
                    pathname: "/symptoms/symptomsearch",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                   Next
                </Link>
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          style={{
            padding: "5%"
          }}
        >
          <div>
            <Progress percent={60} status="active" />
          </div>

          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "10%"
            }}
          >
            <h6 style={{ textAlign: "center" }}>
              Please check all the statements below that apply to you.
            </h6>
            <p style={{ textAlign: "center" }}>
              Select one answer in each row.
            </p>
            <div
              style={{
                border: "1px solid #fff",
                backgroundColor: "#fff"
              }}
            >
              {/* 1 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                {" "}
                <p>I'm overweight or obese</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes"
                    name="answer"
                    onChange={() => setChecked1(!checked1)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No"
                    name="answer"
                    onChange={() => setChecked1(!checked1)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN"
                    name="answer"
                    onChange={() => setChecked1(!checked1)}
                  />{" "}
                  Don't know
                </div>
              </div>
              {/* 2 */}

              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                <p>I smoke cigarettes</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes1"
                    name="answer1"
                    onChange={() => setChecked2(!checked2)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No1"
                    name="answer1"
                    onChange={() => setChecked2(!checked2)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN1"
                    name="answer1"
                    onChange={() => setChecked2(!checked2)}
                  />{" "}
                  Don't know
                </div>
              </div>

              {/* 3 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                <p>I've recently suffered an injury</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes2"
                    name="answer2"
                    onChange={() => setChecked3(!checked3)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No2"
                    name="answer2"
                    onChange={() => setChecked3(!checked3)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN2"
                    name="answer2"
                    onChange={() => setChecked3(!checked3)}
                  />{" "}
                  Don't know
                </div>
              </div>
              {/* 4 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                <p>I've high cholestrol</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes3"
                    name="answer3"
                    onChange={() => setChecked4(!checked4)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No3"
                    name="answer3"
                    onChange={() => setChecked4(!checked4)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN3"
                    name="answer3"
                    onChange={() => setChecked4(!checked4)}
                  />{" "}
                  Don't know
                </div>
              </div>

              {/* 5 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                <p>I have hypertension</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes4"
                    name="answer4"
                    onChange={() => setChecked5(!checked5)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No4"
                    name="answer4"
                    onChange={() => setChecked5(!checked5)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN4"
                    name="answer4"
                    onChange={() => setChecked5(!checked5)}
                  />{" "}
                  Don't know
                </div>
              </div>

              {/* 6 */}
              <div
                className="block-example border-bottom border-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5%"
                }}
              >
                <p>I have diabetes</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="Yes5"
                    name="answer5"
                    onChange={() => setChecked6(!checked6)}
                  />{" "}
                  Yes
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="No5"
                    name="answer5"
                    onChange={() => setChecked6(!checked6)}
                  />{" "}
                  No
                  <input
                    style={{ marginLeft: "5%" }}
                    type="radio"
                    value="DN5"
                    name="answer5"
                    onChange={() => setChecked6(!checked6)}
                  />{" "}
                  Don't know
                </div>
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
                  <Button href="/symptoms/forwhom" variant="link">
                    back
                  </Button>
                </div>
                <div className="right-group">
                  <Button
                    disabled={
                      checked1 ||
                      checked2 ||
                      checked3 ||
                      checked4 ||
                      checked5 ||
                      checked6
                    }
                    href="/symptoms/symptomsearch"
                    variant="warning"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
    </div>
  );
}
export default Question;
