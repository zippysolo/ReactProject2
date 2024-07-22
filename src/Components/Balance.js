import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNoteSticky, faCommentDots, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'

function Balance(props) {
    return (
        <div>
            <div class="header-container">
                <h3 class="section-header">Your Ma'aser Balance</h3>
            </div>
            <h1 class="price">
                {props.totBalance}<span class="price-currency">(USD)</span>
            </h1>
            <p>{props.subText}</p>
            <div class="button-box">
                <button className="btn btn-purple">
                    <FontAwesomeIcon icon={faHouse} />
                    Donate
                </button>
            </div>
        </div>);
}

export default Balance;