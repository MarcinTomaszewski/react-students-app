import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Students App</h1>
      <Link to="/students">Students</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default App;
