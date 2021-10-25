import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <NewCakeContainer />
      <IceCreamContainer />
      <CookieContainer />
      <UserContainer />
    </div>
  );
}

export default App;
