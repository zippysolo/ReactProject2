import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import BottomContainer from './Components/BottomContainer';
import Income from './Components/Income';
import Donations from './Components/Donations';
import Inbox from './Components/Inbox';
import Settings from './Components/Settings';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNoteSticky, faCommentDots, faGear, faWallet, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { put, get, post, remove } from './ajax.js';

function App() {

  const userData = {
    "userName": "mimi",
    "password": "4rrf43",
    "userID": 4,
    "percent": 10,
    "donations": [
      {
        "donationID": 1,
        "userID": 4,
        "date": "2024-04-04",
        "amount": 123,
        "company": "me",
        "category": 2,
        "db": {}
      },
      {
        "donationID": 2,
        "userID": 4,
        "date": "2024-04-23",
        "amount": 999,
        "company": "Chasdei Naomi",
        "category": 3,
        "db": {}
      }
    ],
    "income": [
      {
        "incomeID": 3,
        "userID": 4,
        "date": "2006-06-23",
        "amount": 2933,
        "company": "Iryat Yerushalayim",
        "exempt": 0,
        "db": {}
      },
      {
        "incomeID": 4,
        "userID": 4,
        "date": "2006-04-22",
        "amount": 23,
        "company": "R Shammai",
        "exempt": 0,
        "db": {}
      }
    ]
  };

  const [userName, updateUserName] = useState();
  const [userID, updateUserID] = useState();
  const [userPer, updateUserPer] = useState();
  const [transDon, updateTransDon] = useState();
  const [transInc, updateTransInc] = useState();


  useEffect(() => {
    // empty array as second parm - only runs once at start
    getUserDetails();
    console.log("in use effect");
    setUserDetails();
  }, []);

  function getUserDetails() {
    const data = get("http://localhost/Users.php?User_ID=4");
    // const data = get("http://localhost/Donations.php?User_ID=4&Start_Date=01/01/23&End_Date=01/01/24");
    //const data = get("https://www.shalach-manos.com/project/API/loadUser.php?id=1&from_date=2024-01-01&to_date=2024-08-05");
    console.log("getuserdetails", data);
  }

  function setUserDetails() {
    // user data
    updateUserName(userData.userName);
    updateUserID(userData.userID);
    updateUserPer(userData.percent);
    // donation data
    const donObj = userData.donations;
    console.log(donObj);
    const don1 = donObj.map(function (donation) {
      return [donation.donationID, donation.company, donation.date, donation.amount, donation.category];
    });
    updateTransDon(don1);
    // income data
    const incObj = userData.income;
    // console.log(incObj);
    const inc1 = donObj.map(function (income) {
      return [income.incomeID, income.company, income.date, income.amount, income.exempt];
    });
    console.log(don1);
    console.log(inc1);
    updateTransInc(inc1);
  }



  const arrayDonHeadings = ["ID", "Donations", "Date", "Amount", "Category"];
  const arrayIncHeadings = ["ID", "Company", "Date", "Amount", "Exempt from Maaser"];

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
        {/*activePage == 1 && <Income transInc={transInc} arrayIncHeadings={arrayIncHeadings}></Income>}
        {activePage == 2 && <Donations transArray={transDon} transHeadingsArray={arrayDonHeadings} updateTransDon={updateTransDon}></Donations>*/}
        {activePage == 3 && <Inbox></Inbox>}
        {activePage == 4 && <Settings></Settings>}
        {activePage == 5 && <p>You are logged out </p>}
      </main>
    </div>
  );
}

export default App;