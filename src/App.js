import { Link } from "react-router-dom";
import "./App.css";
import RouterProvider from "./components/RouterProvider/RouterProvider";

function App({ routes }) {
  return (
    <div>
      <h1>Students App</h1>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/error">Error</Link>
      <div>
        <RouterProvider />
      </div>
    </div>
  );
}

export default App;
