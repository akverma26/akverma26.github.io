import { Link, useLocation } from "react-router-dom";
import ProfileData from "../ProfileData";

export default function NavigationMenu() {
    let page = useLocation();
    page = page.pathname + page.hash;
    const menus = ProfileData.routes;
    return (
        <div className="navigation-menu-container">
            {menus.map((menu, index) => (
                <Link
                    key={index}
                    to={menu.path}
                    className={"menu" + (menu.path === page ? " selected" : "")}
                >
                    <div className="gradient-overlay"></div>
                    {menu.menuText}
                </Link>
            ))}
        </div>
    );
}
