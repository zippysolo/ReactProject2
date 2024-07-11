import Icon from "./Icon";

function SidebarEntry(props) {
    return (
        // add class side-nav__item-active for active element
        <li class={`side-nav__item ${props.index == props.activePage && " side-nav__item-active"}`} index={props.index}>

            <Icon></Icon>
            <span>{props.text}</span>
        </li>
    );
}

export default SidebarEntry;