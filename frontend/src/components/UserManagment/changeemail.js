import React from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";

import { BrowserView, MobileView } from "react-device-detect";
import Header from "../Navbar/header"

export default function ChangeEmail() {
  const [oldEmail, setoldEmail] = React.useState("");
  const [newEmail, setnewEmail] = React.useState("");




  function validateForm() {
    return oldEmail.length > 0 && newEmail.length > 0;
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
            paddingTop: "5%",
            paddingBottom: "5%"
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
            <h5>Change Email</h5>

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
                  type="email"
                  className="fname"
                  name="oemail"
                  placeholder="Your old email.."
                  onChange={(e) => setoldEmail(e.target.value)}
                />

                <input
                  type="email"
                  className="fname"
                  name="nemail"
                  placeholder="Your new email.."
                  onChange={(e) => setnewEmail(e.target.value)}
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
                  onChange={(e) => setoldEmail(e.target.value)}
                />

                <input
                  type="text"
                  className="fname-mobile"
                  name="firstname"
                  placeholder="Your new username.."
                  onChange={(e) => setnewEmail(e.target.value)}
                />

                <Button
                  href="/editprofile"
                  className="bsubmit-mobile"
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
