import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import "./AuthForm.css";

function AuthForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const handleSubmit = (e) => {
        var emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (
            formData.email.match(emailRegex) &&
            formData.password.length > 3 &&
            formData.name !== "" &&
            formData.name !== null &&
            formData.name !== undefined
        ) {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: encode({ "form-name": "signup", ...formData })
            })
                .then((res) => {
                    return res.json();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("Enter valid email, password or name");
        }
        e.preventDefault();
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
        <div>
            {props.signup ? (
                <div className="form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                name="name"
                                value={formData.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
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
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            ) : (
                <div className="form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
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
