import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cryptocurrency from "./pages/Cryptocurrency";
import News from "./pages/News";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Cryptocurrencies" element={<Cryptocurrency />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default App;
