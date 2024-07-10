import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

import BottomContainer from './Components/BottomContainer';

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main className="main-content">
        <Topbar></Topbar>
        <BottomContainer></BottomContainer>
      </main>
    </div>
  );
}

export default App;