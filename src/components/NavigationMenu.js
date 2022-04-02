import { Link, useLocation } from "react-router-dom";

export default function NavigationMenu() {
    let page = useLocation().pathname;
    const menus = [
        { to: "/", text: "About" },
        { to: "/skills", text: "Skills" },
        { to: "/projects", text: "Projects" },
        { to: "/contacts", text: "Contacts" },
        { to: "resume.pdf", text: "CV/Resume" },
    ];
    return (
        <div className="navigation-menu-container">
            {menus.map((menu, index) => (
                <Link
                    key={index}
                    to={menu.to}
                    className={"menu" + (menu.to === page ? " selected" : "")}
                >
                    <div className="gradient-overlay"></div>
                    {menu.text}
                </Link>
            ))}
        </div>
    );
}
