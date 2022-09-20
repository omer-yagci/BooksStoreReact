import AutContext from "./context/AutContext";
import Approuter from "./router/Approuter";
import { ToastContainer } from "react-toastify";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <AutContext>
        <Approuter />
        <ToastContainer />
      </AutContext>
    </div>
  );
}

export default App;
