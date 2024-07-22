import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNoteSticky, faCommentDots, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'
function SidebarEntry(props) {
    return (
        // for active element, add class side-nav__item-active
        // use separate function - clearer?
        // this also works without ()=>: <li onClick={props.updateActivePage(props.index)} className={`side-nav__item ${props.index == props.activePage && " side-nav__item-active"}`} index={props.index}>
        <li onClick={() => props.updateActivePage(props.index)} index={props.index} key={props.index} className={`side-nav__item ${props.index == props.activePage && " side-nav__item-active"}`} >
            <FontAwesomeIcon icon={props.icon} />
            <span>{props.text}</span>
        </li>
    );
}

export default SidebarEntry;