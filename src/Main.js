import { Container } from "react-bootstrap";
import "./Main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import MessageBox from "./containers/MessageBox/index";

function Main() {
    return (
        <Container className="Main">
            <h1>Main</h1>
            <MessageBox />
        </Container>
    );
}

export default Main;
