import AutContext from "./context/AutContext";
import Approuter from "./router/Approuter";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <AutContext>
        <Approuter />
      </AutContext>
    </div>
  );
}

export default App;
