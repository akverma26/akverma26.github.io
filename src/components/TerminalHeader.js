import { useLocation } from "react-router-dom";
import ProfileData from "../ProfileData";

export default function TerminalHeader() {
    let page = useLocation().pathname.split("/")[1];
    if (!page) page = "about";
    page = "/" + page;
    return (
        <div className="terminal-info-container">
            <span className="user-name">{ProfileData.uiConfig.username}</span>
            <span className="section-container">
                ~<span className="section-name">{page}</span>
            </span>
            <span className="version">{ProfileData.uiConfig.version}</span>
            <span className="arrow">.</span>
        </div>
    );
}
