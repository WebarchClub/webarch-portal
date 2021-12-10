import "./Main.css";

import MessageBox from "./containers/MessageBox/index";
import AuthForm from "./containers/AuthForm/AuthForm";

function Main() {
    return (
        <div className="Main">
            <h1>Main</h1>
            <AuthForm signup={false} />
            <MessageBox />
        </div>
    );
}

export default Main;
