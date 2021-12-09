import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import store from "./store/index";
import Main from "./Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
    return (
        <Router>
            <div className="App">
                <Provider store={store}>
                    <Navbar />
                    <Main />
                </Provider>
            </div>
        </Router>
    );
}

export default App;
