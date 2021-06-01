import React from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";

import { BrowserView, MobileView } from "react-device-detect";

export default function Signup() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <BrowserView>
        <div
          style={{
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "5%",
            paddingBottom: "5%",
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
            <h5>Sign up</h5>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <form>
                <label style={{ textAlign: "left" }} for="username">
                  Username
                </label>
                <input
                  type="text"
                  className="fname"
                  name="username"
                  placeholder="Enter username"
                />
                <Button
                  href="/editprofile"
                  className="bsubmit"
                  variant="warning"
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
                padding: "5%",

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
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
}
