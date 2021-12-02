import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/index"
import Main from "./Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Container className="App">
                <Provider store={store}>
                    <Navbar />
                    <Main />
                </Provider>
            </Container>
        </Router>
    );
}

export default App;
