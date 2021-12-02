import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearAlertMessage, setAlertMessage } from "../../store/actions/alerts";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import "./MessageBox.css";

const MessageBox = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        clearAlert();
    };

    const setErrorAlert = () => {
        dispatch(setAlertMessage("This is an error", "error"));
    };
    const setInfoAlert = () => {
        dispatch(setAlertMessage("This is an error", "info"));
    };
    const clearAlert = () => {
        dispatch(clearAlertMessage());
    };
    useEffect(() => {
        if (state.alert) {
            setShow(true);
        }
    }, [state]);
    return (
        <>
            <Button variant="danger" onClick={setErrorAlert}>
                Create error alert
            </Button>{" "}
            <Button variant="info" onClick={setInfoAlert}>
                Create info alert
            </Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title
                        className={
                            state.alert?.type === "info"
                                ? "text-info"
                                : "text-danger"
                        }
                    >
                        {state.alert?.type === "error" ? (
                            <BiError />
                        ) : (
                            <AiFillInfoCircle />
                        )}
                        <span className="heading">Alert Heading</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{state.alert?.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Dismiss
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MessageBox;
