import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navigation(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="text-center fs-4">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block"
                    />{" "}
                    Webarch Portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        {props.currentUser && (
                            <Fragment>
                                <Nav.Link href="#deets" className="mx-2">
                                    profile <i class="fas fa-user-circle"></i>
                                </Nav.Link>
                                <Nav.Link href="#deets" className="mx-2">
                                    Logout{" "}
                                    <i className="fas fa-sign-out-alt"></i>
                                </Nav.Link>
                            </Fragment>
                        )}
                        {!props.currentUser && (
                            <Fragment>
                                {" "}
                                <Nav.Link href="#deets" className="mx-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link
                                    eventKey={2}
                                    href="#memes"
                                    className="mx-2"
                                >
                                    Signup
                                </Nav.Link>
                            </Fragment>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
