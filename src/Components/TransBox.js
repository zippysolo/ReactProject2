import Button from "./Button";

function TransBox(props) {
    return (
        <div class="box transaction-box">
            <div class="header-container">
                <h3 class="section-header">{props.headerText}</h3>
            </div>
            <table class="transaction-history">
            </table>
            <div class="footer-container ">
                <Button text="See More.." class="btn btn-white "></Button>
            </div>
        </div>
    );
}

export default TransBox;