import './DonationsInput.css';

import Card from "./Card";
function DonationsInput(props) {
    return (
        <Card>
            <div class="label_input">
                <label for="company">Company Name</label>
            </div>
            <div class="input">
                <input type="text" id="company" name="company" value="" required="required"></input>
            </div>
            <div class="label_input">
                <label for="date">Date</label>
            </div>
            <div class="input">
                <input type="date" id="date" name="date" value="" required="required"></input>
            </div>
            <div class="label_input">
                <label for="amount">Amount</label>
            </div>
            <div class="input">
                <input type="currency" id="amount" name="amount" value="" required="required"></input>
            </div>


        </Card>
    );
}

export default DonationsInput;