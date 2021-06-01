import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div style={{paddingBottom: "70px", backgroundColor: "#0047b3" }}></div>

      <Navbar style={{ paddingLeft: "12%",fontSize:"18px"}}bg="light" expand="lg">
        <Navbar.Brand style={{fontSize:"30px"}}>
          {/* <SiAddthis style={{ width:"10px",height:"10px",paddingRight: "10px", paddingBottom: "9px" }} /> */}
          <Link
            to={{
              pathname: '',
              state: {
                token: props.token,
                user: props.user,
              },
            }}
          >
            I-SYMPTOMATE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
          <Nav.Link href="/admin/login">Admin Log in</Nav.Link>
          
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
