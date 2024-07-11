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

function App() {

  const [activePage, updateActivePage] = useState(5);  // default to dashboard

  const sideBar = [
    { "index": 0, "text": "Dashboard" },
    { "index": 1, "text": "Income" },
    { "index": 2, "text": "Donations" },
    { "index": 3, "text": "Inbox" },
    { "index": 4, "text": "Settings" },
    { "index": 5, "text": "Logout" }
  ]

  return (
    <div className="container">
      <Sidebar sideBarArray={sideBar} updateActivePage={updateActivePage} activePage={activePage}></Sidebar>
      <main className="main-content">
        <Topbar></Topbar>
        {activePage == 0 && <BottomContainer></BottomContainer>}
        {activePage == 1 && <Income></Income>}
        {activePage == 2 && <Donations></Donations>}
        {activePage == 3 && <Inbox></Inbox>}
        {activePage == 4 && <Settings></Settings>}
        {activePage == 5 && <p> You have logged out </p>}
      </main>
    </div>
  );
}

export default App;