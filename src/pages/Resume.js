import { useEffect } from "react";
import ProfileData from "../ProfileData";

export default function ResumePage() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
        window.location.href = ProfileData.resumePDF;
    }, []);
    return <div></div>;
}
