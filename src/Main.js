import { Routes, Route } from "react-router-dom";
import "./Main.css";

import MessageBox from "./containers/MessageBox/index";
import AuthForm from "./containers/AuthForm/AuthForm";

function Main() {
    return (
        <div className="Main">
            <Routes>
                <Route path="/signup" element={<AuthForm signup={true} />} />
                <Route path="/login" element={<AuthForm signup={false} />} />
            </Routes>
            <MessageBox />
        </div>
    );
}

export default Main;
