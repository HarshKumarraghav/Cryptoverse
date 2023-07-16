import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cryptocurrency from "./pages/Cryptocurrency";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Cryptrocurrencies" element={<Cryptocurrency />} />
    </Routes>
  );
};

export default App;
