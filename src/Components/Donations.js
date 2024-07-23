import DonationsInput from "./DonationsInput";
import './Donations.css';
import TransactionsBody2 from "./TransactionBody2";
import TransactionsHeader from "./TransactionsHeader";
import Card from "./Card";
function Donations(props) {
    return (
        <div className="box transaction-box DonationInput">
            <div className="bottom-container">
                <div className="bottom-container__left">
                    <Card>
                        <TransactionsHeader transHeadingsArray={props.transHeadingsArray}></TransactionsHeader>
                        <TransactionsBody2 transArray={props.transArray}></TransactionsBody2>
                    </Card>
                </div>
                <div className="bottom-container__right">
                    <Card>
                        <DonationsInput updateTransDon={props.updateTransDon}></DonationsInput>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Donations;