
import TransBox from "./TransBox";
import TotalsBox from "./TotalsBox"
import Card from "./Card";
import Balance from "./Balance";
import Spending from "./Spending";

function BottomContainer(props) {

  const transDon = [["Yad Eliezer", "01/01/24", 2000, "Helping the poor"],
  ["Kollel Kever Rochel", "04/01/24", 2000, "Torah Institutes"],
  ["Likrat Kallah", "06/01/24", 2000, "Hachnasas Kallah"]];

  const transInc = [["Compuskills", "01/01/24", 2000, "Yes"],
  ["4Ugifts", "01/01/24", 2000, "No"],
  ["Ner Tzaddik", "01/01/24", 2000, "Yes"]];

  const arrayDonHeadings = ["Donations", "Date", "Amount", "Category"];
  const arrayIncHeadings = ["Company", "Date", "Amount", "Exempt from Maaser"];

  return (
    <div class="bottom-container">
      <div class="bottom-container__left">
        <div class="box total-box">
          <TotalsBox totalBoxClass="total-box__left" headerText="Total Income" price="583,530.00" currency="USD" percentClass="percentage-increase" percent="20%" percentText="increase compared
            to last year">
          </TotalsBox>
          <TotalsBox totalBoxClass="total-box__right" headerText="Total Donations" price="50,530.00" currency="USD" percentClass="percentage-decrease" percent="10%" percentText="decrease compared
            to last year">
          </TotalsBox>
        </div>
        <TransBox headerText="Donations History" transHeadingsArray={arrayDonHeadings} transArray={transDon}></TransBox>
        <TransBox headerText="Income History" transHeadingsArray={arrayIncHeadings} transArray={transInc}></TransBox>
      </div>
      <div class="bottom-container__right">
        <Card>
          <Balance totBalance="$7823" subText="From Jan 01, 2023 to May 24, 2023"></Balance>
        </Card>
        <Card>
          <Spending categories={props.categories}></Spending>
        </Card>
      </div>

    </div>
  );
}

export default BottomContainer;
