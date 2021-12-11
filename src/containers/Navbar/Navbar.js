import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth"
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navigation() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="text-center fs-4">
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
                        {isAuth && (
                            <Fragment>
                                <Nav.Link href="/user" className="mx-2">
                                    profile <FaRegUserCircle />
                                </Nav.Link>
                                <Nav.Link onClick={logoutHandler} href="/" className="mx-2">
                                    Logout <FiLogOut />
                                </Nav.Link>
                            </Fragment>
                        )}
                        {!isAuth && (
                            <Fragment>
                                {" "}
                                <Nav.Link href="/login" className="mx-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link
                                    eventKey={2}
                                    href="/signup"
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