import "./Main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import MessageBox from "./containers/MessageBox/index";

function Main() {
    return (
        <div className="Main">
            <h1>Main</h1>
            <MessageBox />
        </div>
    );
}

export default Main;
