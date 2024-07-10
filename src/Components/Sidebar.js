
import SidebarEntry from "./SidebarEntry";
import Card from "./Card";

function Sidebar() {
    return (
        <nav class="sidebar">
            <div class="sidebar__logo">
                <h2 class="sidebar__logo-header">The Ma'aser App</h2>
            </div>
            <ul class="side-nav">
            <SidebarEntry text="Dashboard"></SidebarEntry>
            <SidebarEntry text="Income"></SidebarEntry>
            <SidebarEntry text="Donations"></SidebarEntry>
            <SidebarEntry text="Inbox"></SidebarEntry>
            <SidebarEntry text="Settings"></SidebarEntry>
            <SidebarEntry text="Logout"></SidebarEntry>
</ul>
</nav>
    );
}

export default Sidebar;