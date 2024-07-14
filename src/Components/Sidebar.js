
import SidebarEntry from "./SidebarEntry";
import Card from "./Card";



function Sidebar(props) {
    return (
        <nav className="sidebar">

            <div className="sidebar__logo">
                <h2 className="sidebar__logo-header">The Ma'aser App</h2>
            </div>
            <ul className="side-nav">
                {props.sideBarArray.map(function (entry) {
                    return (<SidebarEntry index={entry.index} text={entry.text} activePage={props.activePage} updateActivePage={props.updateActivePage} icon={entry.icon}></SidebarEntry>);
                })}
            </ul>
            <ul className="side-nav">
                <li className="side-nav__item last-item">
                    <span>Log Out</span>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;