import "./App.css";
import CompA from "./components/CompA";

const info = "Info will be here";

function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <CompA info={info} />
    </div>
  );
}

export default App;
