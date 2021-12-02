import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearAlertMessage, setAlertMessage } from "../../store/actions/alerts";

const MessageBox = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        clearAlert();
    };

    const setAlert = () => {
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
            <Button variant="primary" onClick={setAlert}>
                Create sample alert
            </Button>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Alert Heading</Modal.Title>
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
