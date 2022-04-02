import react from "react";
import BlinkingCursor from "./BlinkingCursor";

export default function Command(props) {
    var cursorComponent = <react.Fragment></react.Fragment>;
    if (props.showCursor) cursorComponent = <BlinkingCursor></BlinkingCursor>;
    return (
        <div className="command-container">
            <span className="prefix">$</span>
            <span className="command">
                {props.command}
                {cursorComponent}
            </span>
        </div>
    );
}
