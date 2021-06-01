import React, { useEffect } from "react";
//import { useMediaQuery } from "react-responsive";

//import HomeImage1 from "../components/images/newhome.PNG";
import HomeImage1 from "../components/images/home.png";

import HomeImage2 from "../components/images/homeimg.PNG";
import ChatbotImg from "../components/images/chatbot-img.PNG";
import MoreInfoImg from "../components/images/more-info-img.PNG";
import Header from "./Navbar/header";

import { Button } from "react-bootstrap";
//import { Checkmark } from "react-checkmark";
import { BsArrowRight } from "react-icons/bs";

import { BrowserView, MobileView } from "react-device-detect";

import "../styles.css";
//import uselocation
import { useHistory, useLocation } from "react-router";



function Home(props) {
  const location = useLocation();
  const history = useHistory();
  const data = [
    "Enter your symptoms",
    "Answer some simple questions",
    "Done! Your assessment will reveal:"
  ];
  const data1 = [
    "Possible causes of your symptoms",
    "Options for next steps",
    "Suggested lab tests",
    "Suggested lab tests",
    "Suggested lab tests",
    "Suggested lab tests",
    "Suggested lab tests"
  ];
  const [user, setUser] = React.useState();
  const [token, setToken] = React.useState();

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user)
      setToken(location.state.token)
    } else {
      history.push('./login');
    }
  }, [history, location]);

  const updateData = data.map((number, index) => {
    return (
      <li>
        {index + 1} - {number}
      </li>
    );
  });


  const updateData1 = data1.map((number, index) => {
    return (
      <li>
        {index + 1} - {number}
      </li>
    );
  });
  return (
    <div>
      <Header user={user} token={token} />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "1%",
          }}
        >
          <BrowserView>
            <div
              style={{
                backgroundImage: `url(${HomeImage1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid #DCDCDC",
                backgroundColor: "#0047b3",
                height: "50%",
                width: "100%",
                paddingTop: "5%",
                borderRadius: "25px",
                // zIndex: -10
              }}
            >
              {/* <h1 style={{paddingTop:"5%", paddingRight:"50%", paddingLeft:"5%"}}>What concerns you about your health today?</h1> */}
              <div
                className="vertical-center"
                style={{
                  margin: "28% 0px 0px 15px",
                  padding: "0px 0px 10px 0px"
                }}
              >
              
                <div style={{ paddingBottom: "15%", paddingLeft: "10%" }}>
                  <Button href="/option" className="homeButton" variant="warning">
                    Start Checkup
                </Button>
                </div>
              </div>
            </div>
          </BrowserView>
        </div>
        <div>
          <MobileView>
            <div
              style={{
                backgroundImage: `url(${HomeImage1})`,
                backgroundSize: "cover",
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff"
                // zIndex: -10
              }}
            >
             

              <div
                className="vertical-center"
                style={{
                  margin: "28% 0px 0px 15px",
                  padding: "0px 0px 10px 0px"
                }}
              >
                <Button href="/option" className="homeButton" variant="warning">
                  Check Up
              </Button>
              </div>
            </div>
          </MobileView>
        </div>
        {/* PART 2 */}
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "5%"
          }}
        >
          <BrowserView>
            <div
              className="float-container"
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%",
                borderRadius: "5px",
              }}
            >
              <div className="float-child">
                <h2
                  style={{
                    textAlign: "left"
                  }}
                >
                  Symptomate provides you with a fast and accurate health
                  assessment
                {/* <img src={Number} alt="number" /> */}
                </h2>
                <h5 style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
                  <ul>{updateData}</ul>
                </h5>

                <div style={{ paddingLeft: "15%", paddingTop: "0%" }}>
                  <h8 >
                    <ul>{updateData1}</ul>
                  </h8>
                </div>

                {/* <div className="float-container">
                <div className="float-child">
                </div>
                <div style={{ paddingLeft: "10px" }} className="float-child">
                  <p>Possible causes of your symptoms</p>
                </div>
              </div>

              <div className="float-container">
                <div className="float-child">
                </div>{" "}
                <div className="float-child">
                  <p>Options for next steps</p>
                </div>
              </div>
              <div className="float-container">
                <div className="float-child">
                </div>{" "}
                <div className="float-child">
                  <p>Suggested lab tests</p>
                </div>
              </div> */}
                {/* <Checkmark size="medium" /> */}

              </div>
              <div>
                <img
                  src={HomeImage2}
                  alt="HomeImage2"
                />
              </div>
            </div>
          </BrowserView>
        </div>

        <MobileView>
          <div style={{ border: "1px solid #DCDCDC", backgroundColor: "#fff" }}>
            <div className="float-container-mobile">
              <div className="float-child">
                <h1
                  style={{
                    paddingLeft: "20px",
                    textAlign: "left"
                  }}
                >
                  Symptomate provides you with a fast and accurate health
                  assessment
                {/* <img src={Number} alt="number" /> */}
                </h1>
                <h4 style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
                  <ul>{updateData}</ul>
                </h4>

                <div className="float-container">
                  <div className="float-child">
                    {/* <Checkmark size="medium" /> */}
                  </div>{" "}
                  <div style={{ paddingLeft: "0px" }} className="float-child">
                    <p>Possible causes of your symptoms</p>
                  </div>
                </div>

                <div className="float-container">
                  <div className="float-child  check-padding">
                    {/* <Checkmark size="medium" /> */}
                  </div>{" "}
                  <div className="float-child">
                    <p>Options for next steps</p>
                  </div>
                </div>
                <div className="float-container">
                  <div className="float-child check-padding">
                    {/* <Checkmark size="medium" /> */}
                  </div>{" "}
                  <div className="float-child check-padding">
                    <p>Suggested lab tests</p>
                  </div>
                </div>
              </div>
              <div className="float-child-img ">
                <img
                  className="more-info-img-styles-mobile"
                  src={HomeImage2}
                  alt="HomeImage2"
                />
              </div>
            </div>
          </div>
        </MobileView>
        {/* 3RD PART */}
        {/* <div className="float-container">
        <div className="float-child">
          <h1 style={{ textAlign: "left" }}>
            Over 4 million people have already used Symptomate
          </h1>
          <div style={{ paddingLeft: "70px" }}>
            <Button href="/option" className="homeButton" variant="warning">
              Check Up
            </Button>{" "}
          </div>
        </div>
        <div className="float-child" style={{ backgroundColor: "#DCDCDC" }}>
          <h6>
            Accurate diagnosis. The app encouraged me to visit my doctor before
            it was too late. Thanks so much!
          </h6>
          <BeautyStars
            value={state}
            onChange={(value) => this.setState({ value })}
          />
        </div>
      </div> */}
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "5%",
          }}
        >
          <BrowserView>
            <div
              className="chatbot-div-styles"
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%",
                borderRadius: "5px",
              }}
            >
              <h2>Write Chat bot</h2>
              <p>
                Symptomate can also conduct interviews via fast and friendly chat
                conversations*.
            </p>
              <div href="/chatbot">
                <h9>
                  <Button href="/chatbot" className="homeButton" variant="link">
                    Begin Chat <BsArrowRight />
                  </Button>{" "}
                </h9>
                <p style={{ color: "#dcdcdc" }}>*English only</p>
                <div className="chatbot-img-styles">
                  <img src={ChatbotImg} alt="ChatbotImage" />
                </div>
              </div>
            </div>
          </BrowserView>
        </div>

        <div>
          <MobileView>
            <div
              className="chatbot-div-styles"
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >
              <h2>Write Chat bot</h2>
              <p>
                Symptomate can also conduct interviews via fast and friendly chat
                conversations*.
            </p>
              <div href="/chatbot">
                <h9>
                  <Button href="/chatbot" className="homeButton" variant="link">
                    Begin Chat <BsArrowRight />
                  </Button>{" "}
                </h9>
                <p style={{ color: "#dcdcdc" }}>*English only</p>
                <div className="chatbot-img-styles">
                  <img src={ChatbotImg} alt="ChatbotImage" />
                </div>
              </div>
            </div>
          </MobileView>
        </div>

        {/* 5th part */}
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          <BrowserView>
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%",
                borderRadius: "5px",
              }}
            >
              <div className="float-container">
                <div className="float-child">
                  <h2>Intelligent technology you can trust</h2>
                  <p>
                    Symptomate AI uses our doctors’ knowledge, scientific
                    literature and statistical data culled from thousands of
                    patient cases.
                </p>
                  <Button href="/moreinfo" className="homeButton" variant="link">
                    more info <BsArrowRight />
                  </Button>{" "}
                </div>
                <div className="float-child">
                  <img
                    className="more-info-img-styles"
                    style={{ paddingLeft: "20%" }}
                    src={MoreInfoImg}
                    alt="moreinfoimage"
                  />
                </div>
              </div>
            </div>
          </BrowserView>
        </div>
        <MobileView>
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <div className="float-container-mobile">
              <div className="float-child">
                <h2>Intelligent technology you can trust</h2>
                <p>
                  Symptomate AI uses our doctors’ knowledge, scientific literature
                  and statistical data culled from thousands of patient cases.
              </p>
                <Button href="/moreinfo" className="homeButton" variant="link">
                  more info <BsArrowRight />
                </Button>{" "}
              </div>
              <div className="float-child">
                <img
                  className="more-info-img-styles-mobile"
                  src={MoreInfoImg}
                  alt="moreinfoimage"
                />
              </div>
            </div>
          </div>
        </MobileView>

        {/* FOOTER */}
      </div>
    </div>

  );
}
export default Home;
