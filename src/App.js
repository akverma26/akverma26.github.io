import React from "react";
import Terminal from "./components/Terminal";
import NavigationMenu from "./components/NavigationMenu";
import "./css/index.css";

function App() {
    return (
        <React.Fragment>
            <NavigationMenu></NavigationMenu>
            <Terminal></Terminal>
        </React.Fragment>
    );
}

export default App;
