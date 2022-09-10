import AutContext from "./context/AutContext";
import Approuter from "./router/Approuter";

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
