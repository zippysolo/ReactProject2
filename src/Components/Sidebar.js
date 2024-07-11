
import SidebarEntry from "./SidebarEntry";
import Card from "./Card";

function Sidebar(props) {
    return (
        <nav class="sidebar">
            <div class="sidebar__logo">
                <h2 class="sidebar__logo-header">The Ma'aser App</h2>
            </div>
            <ul class="side-nav">
                {props.sideBarArray.map(function (entry) {
                    return (<SidebarEntry index={entry.index} text={entry.text} activePage={props.activePage}></SidebarEntry>);
                })}
                {console.log(props.activePage)}
            </ul>
        </nav>
    );
}

export default Sidebar;