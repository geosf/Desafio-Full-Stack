import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import "./styles.css";

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
