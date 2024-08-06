
import TransBox from "./TransBox";
import TotalsBox from "./TotalsBox"
import Card from "./Card";
import Balance from "./Balance";
import Spending from "./Spending";
import Categories from "../Categories";


function BottomContainer(props) {
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
        <TransBox headerText="Donations History" transHeadingsArray={props.arrayDonHeadings} transArray={props.transDon}></TransBox>
        <TransBox headerText="Income History" transHeadingsArray={props.arrayIncHeadings} transArray={props.transInc}></TransBox>
      </div>
      <div class="bottom-container__right">
        <Card>
          <Balance totBalance="$7823" subText="From Jan 01, 2023 to May 24, 2023"></Balance>
        </Card>
        <Card>
          <Spending categories={Categories}></Spending>
        </Card>
      </div>

    </div>
  );
}

export default BottomContainer;
