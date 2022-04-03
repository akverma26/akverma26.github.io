import AboutPage from "../pages/About";
import SkillsPage from "../pages/Skills";
import ProjectsPage from "../pages/Projects";
import ContactsPage from "../pages/Contacts";
import ResumePage from "../pages/Resume";
import ProfileData from "../ProfileData";

export default function Output(props) {
    let routes = ProfileData.routes;
    let componentsInOrder = [
        AboutPage,
        SkillsPage,
        ProjectsPage,
        ContactsPage,
        ResumePage,
    ];
    routes.forEach((route, index) => {
        route["reactComponent"] = componentsInOrder[index];
    });
    const Page = routes.filter((route) => route.name === props.page)[0]
        .reactComponent;

    return <div className="output-container">{<Page></Page>}</div>;
}
