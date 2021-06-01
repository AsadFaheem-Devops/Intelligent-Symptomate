import React, { useEffect } from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import Header from "../Navbar/header"


function Healthbackgoround() {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(true);
  const [checked6, setChecked6] = React.useState(true);


  const [q1, setq1] = React.useState("");
  const [q2, setq2] = React.useState("");
  const [q3, setq3] = React.useState("");
  const [q4, setq4] = React.useState("");
  const [q5, setq5] = React.useState("");


  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();
  const [msg, setMSG] = React.useState("")
  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/')
    }
  }, [location, history])



  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
    };

    axios.post('http://localhost:9000/addinfo/background', data, {
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
            pathname: '/',
            state: {
              user: user,
              token: token
            }
          });
        }

      }).catch(res => setMSG(res.message));
  }



  return (
    <div>
      <Header user={user} token={token} />

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "1%",
              paddingBottom: "5%"
            }}
          >
            <form onSubmit={handleSubmit}>
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
                    <p style={{ paddingRight: "10%" }}>Have you ever been d?</p>
                    <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="Yes"
                      name="answer"
                      onChange={() => setChecked1(!checked1)}
                      onChange={(e) => setq1(e.target.value)}

                    />
                Yes
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="No"
                      name="answer"
                      onChange={(e) => setq1(e.target.value)}
                    />
                No
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="DN"
                      name="answer"
                      onChange={(e) => setq1(e.target.value)}
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
                    <p style={{ paddingRight: "14.5%" }}>
                      Do you have food allergy?
                </p>
                    <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="Yes1"
                      name="answer1"
                      onChange={() => setChecked2(!checked2)}
                      onChange={(e) => setq2(e.target.value)}
                    />
                Yes
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="No1"
                      name="answer1"
                      onChange={() => setChecked2(!checked2)}
                      onChange={(e) => setq2(e.target.value)}
                    />
                No
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="DN1"
                      name="answer1"
                      onChange={() => setChecked2(!checked2)}
                      onChange={(e) => setq2(e.target.value)}
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
                    <p style={{ paddingRight: "5%" }}>Do you have asthma?</p>
                    <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="Yes2"
                      name="answer2"
                      onChange={() => setChecked3(!checked3)}
                      onChange={(e) => setq3(e.target.value)}
                    />{" "}
                Yes
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="No2"
                      name="answer2"
                      onChange={() => setChecked3(!checked3)}
                      onChange={(e) => setq3(e.target.value)}
                    />{" "}
                No
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="DN2"
                      name="answer2"
                      onChange={() => setChecked3(!checked3)}
                      onChange={(e) => setq3(e.target.value)}
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
                    <p style={{ paddingRight: "14%" }}>Do you have asthma?</p>
                    <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="Yes3"
                      name="answer3"
                      onChange={() => setChecked4(!checked4)}
                      onChange={(e) => setq4(e.target.value)}
                    />{" "}
                Yes
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="No3"
                      name="answer3"
                      onChange={() => setChecked4(!checked4)}
                      onChange={(e) => setq4(e.target.value)}
                    />{" "}
                No
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="DN3"
                      name="answer3"
                      onChange={() => setChecked4(!checked4)}
                      onChange={(e) => setq4(e.target.value)}
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
                    <p style={{ paddingRight: "13.5%" }}>Do you have asthma?</p>
                    <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="Yes4"
                      name="answer4"
                      onChange={() => setChecked5(!checked5)}
                      onChange={(e) => setq5(e.target.value)}
                    />{" "}
                Yes
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="No4"
                      name="answer4"
                      onChange={() => setChecked5(!checked5)}
                      onChange={(e) => setq5(e.target.value)}
                    />{" "}
                No
                <input
                      style={{ marginLeft: "5%" }}
                      type="radio"
                      value="DN4"
                      name="answer4"
                      onChange={() => setChecked5(!checked5)}
                      onChange={(e) => setq5(e.target.value)}
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
                      <Button href="/forwhom" variant="link">
                        back
                  </Button>
                    </div>
                    {showResults ?
                      <div className="validation ">
                        {msg} </div> : null}


                    <div className="right-group">

                      <Button
                        onClick={onClick}
                        block
                        size="lg"
                        style = {{color: "#0c0530"}}
                        variant="warning"
                        type="submit"
                        disabled={
                          checked1 ||
                          checked2 ||
                          checked3 ||
                          checked4 ||
                          checked5
                        }
                      >
                        Add
                </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </BrowserView>
        <MobileView>
          <div
            style={{
              padding: "5%"
            }}
          >
            <form onSubmit={handleSubmit}>
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
                    <p>Do you have asthma?</p>
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
                    <p>Do you have asthma?</p>
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
                    <p>Do you have asthma?</p>
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
                    <p>Do you have asthma?</p>
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
                      <Button href="/forwhom" variant="link">
                        back
                  </Button>
                    </div>
                    <div className="right-group">
                      <Button
                        block
                        size="lg"
                        type="submit"
                        disabled={
                          checked1 ||
                          checked2 ||
                          checked3 ||
                          checked4 ||
                          checked5 ||
                          checked6
                        }
                      >
                        Add
                </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
export default Healthbackgoround;
