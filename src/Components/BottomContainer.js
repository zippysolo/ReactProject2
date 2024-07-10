

import TransBox from "./TransBox";
import TotalsBox from "./TotalsBox"

function BottomContainer() {
  //ddddddd
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
      </div>
      <TransBox headerText="Donations History"></TransBox>
      <TransBox headerText="Income History"></TransBox>
    </div>
  );
}

export default BottomContainer;
