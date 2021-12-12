import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navigation() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text-center fs-4">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="logo d-flex">
                            <img
                                alt=""
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block"
                            />
                            <p className="text-light mb-0 ms-2 mt-1">
                                Webarch Portal
                            </p>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        {isAuth && (
                            <Fragment>
                                <Nav.Link className="mx-2">
                                    <Link
                                        to="/user"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff"
                                        }}
                                    >
                                        Profile <FaRegUserCircle />
                                    </Link>
                                </Nav.Link>

                                <Nav.Link
                                    onClick={logoutHandler}
                                    className="mx-2"
                                >
                                    <Link
                                        to="/"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff"
                                        }}
                                    >
                                        Logout <FiLogOut />
                                    </Link>
                                </Nav.Link>
                            </Fragment>
                        )}
                        {!isAuth && (
                            <Fragment>
                                <Nav.Link className="mx-2">
                                    <Link
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff"
                                        }}
                                    >
                                        Login
                                    </Link>
                                </Nav.Link>
                                <Nav.Link eventKey={2} className="mx-2">
                                    <Link
                                        to="/signup"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff"
                                        }}
                                    >
                                        Signup
                                    </Link>
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
