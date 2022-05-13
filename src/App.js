import logo from "./logo.svg";
import "./App.css";
import Shop from "./pages/Shop";
import Chat from "./pages/Chat";
import UserManagement from "./pages/UserManagement";
import CountNotifications from "./pages/CountNotifications";
import NiceWatch from "./pages/NiceWatch";
import BackgroundPage from "./pages/BackgroundPage";
import GetRicky from "./pages/GetRicky";

function App() {
  return (
    <div className="App">
      <div>
        <h1>UseState Demo</h1>
        <Shop></Shop>
      </div>
      <div>
        <h1>UseEffect Demo</h1>
        <Chat></Chat>
      </div>
      <div>
        <h1>UseContext Demo</h1>
        <UserManagement></UserManagement>
      </div>
      <div>
        <h1>UseRef Demo</h1>
        <CountNotifications></CountNotifications>
      </div>
      <div>
        <h1>UseReducer Demo</h1>
        <h6>* reducer -&gt; (state,action) =&gt; newState</h6>
        <NiceWatch></NiceWatch>
      </div>
      <div>
        <h1>UseCallBack Demo</h1>
        <BackgroundPage></BackgroundPage>
      </div>
      <div>
        <h1>UseMemo Demo</h1>
        <GetRicky></GetRicky>
      </div>
    </div>
  );
}

export default App;
