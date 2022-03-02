import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../Hooks/useFirebase";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { handleLogout, user } = useFirebase();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">P_travel </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              AboutUS
            </Nav.Link>
            {user?.email || user?.displayName ? (
              <div className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/myorders">
                  <button className="text-success">MyOrders</button>
                </Nav.Link>
                <Nav.Link as={Link} to="/admin">
                  <button className="text-success">admin</button>
                </Nav.Link>
                <button className="text-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <a href="#login">{user?.displayName || user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
