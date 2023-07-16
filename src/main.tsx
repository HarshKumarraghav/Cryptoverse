import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
