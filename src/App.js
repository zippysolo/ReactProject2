import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import TotalsBox from './Components/TotalsBox';
import TransBox from './Components/TransBox';

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main className="main-content">
        <Topbar></Topbar>
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
      </main>

    </div>
  );
}

export default App;