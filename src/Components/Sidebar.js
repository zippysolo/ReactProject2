
import SidebarEntry from "./SidebarEntry";
import Card from "./Card";

function Sidebar(props) {
    return (
        <nav className="sidebar">
            <div>
                <div className="sidebar__logo">
                    <h2 className="sidebar__logo-header">The Ma'aser App</h2>
                </div>
                <ul className="side-nav">
                    {props.sideBarArray.map(function (entry) {
                        return (<SidebarEntry index={entry.index} key={entry.index} text={entry.text} activePage={props.activePage} updateActivePage={props.updateActivePage} icon={entry.icon}></SidebarEntry>);
                    })}
                </ul>

            </div>
        </nav>
    );
}

export default Sidebar;