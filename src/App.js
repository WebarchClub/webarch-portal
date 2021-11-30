import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Main from "./Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Container className="App">
                <Navbar />
                <Main />
            </Container>
        </Router>
    );
}

export default App;
