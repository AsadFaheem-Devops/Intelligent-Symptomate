import React,{useEffect} from "react";

import "../../styles.css";
import SymptomsIntroImg from "../../components/images/symptoms-intro-img.PNG";
import { Button } from "react-bootstrap";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { BrowserView, MobileView } from "react-device-detect";
import Header from "../Navbar/header"
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";


function SIntroduction() {
  
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  var history = useHistory();
  var location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/skincancerdetection')
    }
  }, [location, history])


  return (
    <div>
   <Header token={token} user={user} />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "2%",
              paddingBottom: "5%"
            }}
          >
            <div>
              <Progress percent={0} status="active" />
            </div>
            <div
              className="float-container"
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "3%",
                borderRadius: "5px"
              }}
            >
              <div className="float-child">
                {" "}
                <h3>Welcome! {user?user.name:""}</h3>
              <p>
                You’re about to use a short (3 min), safe and anonymous health
                checkup. 
              </p>
              <p>
              Your answers will be carefully analyzed and you’ll
              learn about possible Skin disease out of your provided Skin Images.
              </p>
              <p><b>Step-1:</b>
              Upload the image of Affected part of your skin.
              </p>
              <p><b>Step-2:</b>
               Get instant result by clicking on Button!
              </p>
              <p><b>Step-3:</b>
               Get report of your disease!
              </p>
              </div>
              <div className="float-child">
                <img src={SymptomsIntroImg} alt="introimage" />
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
              <Button variant="warning">
              <Link
                  to={{
                    pathname: "/skin/skinterms",
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
        </BrowserView>

        <MobileView>
          <div
            style={{
              padding: "3%"
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
                {" "}
                <h3>Hello!</h3>
                <p>
                  You’re about to use a short (3 min), safe and anonymous health
                  checkup. Your answers will be carefully analyzed and you’ll
                  learn about possible causes of your symptoms.
              </p>
              </div>
              <div className="float-child">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={SymptomsIntroImg}
                  alt="introimage"
                />
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
              <Button href="/skin/skinterms" variant="warning">
                Next
            </Button>{" "}
            </div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
export default SIntroduction;
