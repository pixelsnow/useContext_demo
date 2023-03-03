import { GlobalContextProvider } from "./GlobalContext";

import CompA from "./components/CompA";

import "./App.css";
import { UserContextProvider } from "./UserContext";

const info = "Info will be here";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <h1>useContext demo</h1>
        <CompA info={info} />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
