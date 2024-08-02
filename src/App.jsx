import "./layout.scss";
import { NavBar } from "./components/index";
import { HomePage } from "./routes/index";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
