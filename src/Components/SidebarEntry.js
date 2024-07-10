import Icon from "./Icon";

function SidebarEntry(props) {
    return (
        // add class side-nav__item-active for active element
        <li class="side-nav__item">
            <Icon></Icon>
            <span>{props.text}</span>
        </li>
    );
}

export default SidebarEntry;