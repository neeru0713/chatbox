import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/SideBar";
import Chat from "./components/Chat";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="chatApp grid-container h-100">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
