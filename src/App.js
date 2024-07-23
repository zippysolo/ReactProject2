import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import BottomContainer from './Components/BottomContainer';
import Income from './Components/Income';
import Donations from './Components/Donations';
import Inbox from './Components/Inbox';
import Settings from './Components/Settings';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNoteSticky, faCommentDots, faGear, faWallet, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [transDon, updateTransDon] = useState([["Yad Eliezer", "01/01/24", 2000, "Helping the poor"]]);


  console.log(transDon);


  // const transDon = [["Yad Eliezer", "01/01/24", 2000, "Helping the poor"],
  //["Kollel Kever Rochel", "04/01/24", 2000, "Torah Institutes"],
  //["Likrat Kallah", "06/01/24", 2000, "Hachnasas Kallah"]];

  const transInc = [["Compuskills", "01/01/24", 2000, "Yes"],
  ["4Ugifts", "01/01/24", 2000, "No"],
  ["Ner Tzaddik", "01/01/24", 2000, "Yes"]];

  const arrayDonHeadings = ["Donations", "Date", "Amount", "Category"];
  const arrayIncHeadings = ["Company", "Date", "Amount", "Exempt from Maaser"];


  const [activePage, updateActivePage] = useState(0);  // default to dashboard


  const sideBar = [
    { "index": 0, "text": "Dashboard", "icon": faHouse },
    { "index": 1, "text": "Income", "icon": faWallet },
    { "index": 2, "text": "Donations", "icon": faNoteSticky },
    { "index": 3, "text": "Inbox", "icon": faCommentDots },
    { "index": 4, "text": "Settings", "icon": faGear },
    { "index": 5, "text": "Logout", "icon": faArrowRightFromBracket }
  ]


  return (
    <div className="container">
      <Sidebar sideBarArray={sideBar} updateActivePage={updateActivePage} activePage={activePage}></Sidebar>
      <main className="main-content">
        <div class="date"></div>
        <Topbar></Topbar>
        {activePage == 0 && <BottomContainer transDon={transDon} transInc={transInc} arrayDonHeadings={arrayDonHeadings} arrayIncHeadings={arrayIncHeadings}></BottomContainer>}
        {activePage == 1 && <Income transInc={transInc} arrayIncHeadings={arrayIncHeadings}></Income>}
        {activePage == 2 && <Donations transArray={transDon} transHeadingsArray={arrayDonHeadings} updateTransDon={updateTransDon}></Donations>}
        {activePage == 3 && <Inbox></Inbox>}
        {activePage == 4 && <Settings></Settings>}
        {activePage == 5 && <p>You are logged out </p>}
      </main>
    </div>
  );
}

export default App;