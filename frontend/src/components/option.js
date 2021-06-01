import React from "react";

import SkinCancer from "../components/images/skin-cancer-img.PNG";
import SymptomCheck from "../components/images/symptom-checker-img.PNG";

import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";

import "../styles.css";
import Header from "../components/Navbar/header"

function Option() {
  return (
    <div>
    <Header/>
    
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <BrowserView>
        <div>
          <h1>Options</h1>
          <div
            className="float-container option-search-styles"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "15%",
              paddingBottom: "15%",
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff"
            }}
          >
            <div className="float-child">
              <Button href="/skincancerdetection" variant="light">
                <img
                  className="img-size-browser"
                  src={SkinCancer}
                  alt="SkinCnacer"
                />
                <h5>Skin Cancer</h5>
              </Button>
            </div>
            <div href="" className="float-child">
              <Button href="/symptomatediseasedetection" variant="light">
                <img
                  className="img-size-browser-1"
                  src={SymptomCheck}
                  alt="Checker"
                />
                <h5>Symptomatic Diseases</h5>
              </Button>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div>
          <h1>Options</h1>
          <div
            className="float-container option-search-styles"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "10%",
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff"
            }}
          >
            <div
              className="float-child"
              style={{ marginRight: "20px", boder: "1px solid black" }}
            >
              <Button variant="light" href="/skincancerdetection">
                <img
                  className="img-size-mobile"
                  src={SkinCancer}
                  alt="SkinCnacer"
                />
                <h5>Skin Cancer</h5>
              </Button>
            </div>
            <div className="float-child">
              <Button variant="light" href="/symptomatediseasedetection">
                <img
                  className="img-size-mobile"
                  src={SymptomCheck}
                  alt="Checker"
                />
                <h5>Symptomatic Diseases</h5>
              </Button>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
    </div>
  );
}
export default Option;
