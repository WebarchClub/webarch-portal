import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import "./AuthForm.css";
import { setAlertMessage, clearAlertMessage } from "../../store/actions/alerts";
import { authUser } from "../../store/actions/auth";

function AuthForm(props) {
    const dispatch = useDispatch();

    if (props.signup === true) {
        var authDetails = {
            name: "",
            email: "",
            password: ""
        };
    } else {
        var authDetails = {
            email: "",
            password: ""
        };
    }

    const [formData, setFormData] = useState(authDetails);

    const handleSubmit = (e) => {
        e.preventDefault();
        var emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (props.signup === true) {
            if (
                formData.email.match(emailRegex) &&
                formData.password.length > 3 &&
                formData.name !== ""
            ) {
                dispatch(authUser("signup", formData))
                    .then((res) => console.log(res))
                    .catch((error) => console.log(error));
            } else {
                dispatch(
                    setAlertMessage(
                        "Please enter all fields correctly",
                        "error"
                    )
                );
            }
        } else {
            if (
                formData.email.match(emailRegex) &&
                formData.password.length > 3
            ) {
                dispatch(authUser("signin", formData))
                    .then((res) => console.log(res))
                    .catch((error) => console.log(error));
            } else {
                dispatch(
                    setAlertMessage(
                        "Please enter all fields correctly",
                        "error"
                    )
                );
            }
        }
    };

    const handleChange = (e) => {
        var inputName = $(e.target).attr("name");
        switch (inputName) {
            case "name":
                setFormData({
                    ...formData,
                    name: e.target.value
                });
                break;
            case "email":
                setFormData({
                    ...formData,
                    email: e.target.value
                });
                break;
            case "password":
                setFormData({
                    ...formData,
                    password: e.target.value
                });
                break;

            default:
                break;
        }
    };

    return (
        <div className="auth">
            {props.signup ? (
                <div className="form">
                    <h1 className="header">Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            ) : (
                <div className="form">
                    <h1 className="header">Sign In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button id="btn" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default AuthForm;

/* onSubmit 
        validation
            on success continue
            on failure set alert message
        authUser (data, type)    type-signup/login
            on success setAlert message logged in - location "/"
            on failure setAlert message print error.message - location "/" current location

*/
