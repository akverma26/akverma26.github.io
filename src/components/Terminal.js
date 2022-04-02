import react from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TerminalHeader from "./TerminalHeader";
import Command from "./Command";
import Output from "./Output";

export default function Terminal() {
    let page = useLocation().pathname.split("/")[1];
    if (!page) page = "about";

    const command = "fetch";
    const subCommand = page;

    const [commandContent, setCommandContent] = useState("");
    const [subCommandContent, setSubCommandContent] = useState("");
    const [cursor, showCursor] = useState(true);
    const [outputDisplay, setOutputDisplay] = useState(false);
    const [secondCommandDisplay, setSecondCommandDisplay] = useState(false);
    const [prevPage, setPrevPage] = useState("");

    const animateCommand = () => {
        const typingAnimation = setInterval(() => {
            setCommandContent((commandContent) => {
                if (commandContent === command) {
                    clearInterval(typingAnimation);
                    setTimeout(animateSubCommand, 200);
                }
                return command.slice(0, commandContent.length + 1);
            });
        }, 100);
    };

    const animateSubCommand = () => {
        const typingAnimation = setInterval(() => {
            setSubCommandContent((subCommandContent) => {
                if (subCommandContent === subCommand) {
                    clearInterval(typingAnimation);
                    setTimeout(() => {
                        showCursor(false);
                        setOutputDisplay(true);
                        setTimeout(() => setSecondCommandDisplay(true), 1500);
                    }, 300);
                }
                return subCommand.slice(0, subCommandContent.length + 1);
            });
        }, 100);
    };

    const reloadComponents = () => {
        showCursor(true);
        setOutputDisplay(false);
        setSecondCommandDisplay(false);
        setCommandContent("");
        setSubCommandContent("");
        animateCommand();
    };

    if (page !== prevPage) {
        // This is required because animation don't fine without this
        // Without this reactjs shows glimpses of the new output container
        // that I'm showing with some animation (delay)
        reloadComponents();
        setPrevPage(page);
    }

    useEffect(() => {
        if (page === "static") {
            window.location.reload(true);
            return;
        }
        reloadComponents();
    }, [subCommand]);

    const commandHTML = (
        <react.Fragment>
            <span className="action">{commandContent}</span>
            <span>{subCommandContent}</span>
        </react.Fragment>
    );

    return (
        <div className="terminal-container">
            <TerminalHeader></TerminalHeader>
            <Command command={commandHTML} showCursor={cursor}></Command>
            {outputDisplay ? <Output></Output> : null}
            {secondCommandDisplay ? (
                <Command showCursor={true}></Command>
            ) : null}
        </div>
    );
}
