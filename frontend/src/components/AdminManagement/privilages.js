import React from "react";
import Button from "react-bootstrap/Button";
import "../Login.css";


export default function Privilages() {
  return <div> <div style={{ backgroundColor: "#F8F8F8" }}>
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
          padding: "7%"
        }}
      >
        <h1>Edit profile</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left"
          }}
        >
          <Button href="/users/admin/viewusers" variant="link">
            View patients
        </Button>
          <Button href="" variant="link">
           /
        </Button>
          <Button href="" variant="link">
            /
        </Button>
          <Button href="/admin/" variant="link">
            /
        </Button>
          <Button href="/admin/" variant="link">
            /
        </Button>
        </div>
      </div>
    </div>
  </div>
  </div>;
}
