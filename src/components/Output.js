import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/About";
import SkillsPage from "../pages/Skills";
import ProjectsPage from "../pages/Projects";
import ContactsPage from "../pages/Contacts";
import ResumePage from "../pages/Resume";

export default function Output(props) {
    // return <div className="output-container">{props.output}</div>;
    return (
        <div className="output-container">
            <Routes>
                <Route path="/" element={<AboutPage></AboutPage>}></Route>
                <Route
                    path="/skills"
                    element={<SkillsPage></SkillsPage>}
                ></Route>
                <Route
                    path="/projects"
                    element={<ProjectsPage></ProjectsPage>}
                ></Route>
                <Route
                    path="/contacts"
                    element={<ContactsPage></ContactsPage>}
                ></Route>
                <Route
                    path="/resume.pdf"
                    element={<ResumePage></ResumePage>}
                ></Route>
            </Routes>
        </div>
    );
}
