import { TopCryptosApi } from "@/API/API";
import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext<any>(null);
export const AppProvider = ({ children }: any) => {
  const [count, setCount] = useState(10);
  const [currency, setCurrency] = useState("INR");
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [currencyId, setCurrencyId] = useState(0);
  const [topCoins, setTopCoins] = useState([]);
  const TopCrytosHandler = async () => {
    const response = await fetch(TopCryptosApi(currency));
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      console.log(data);

      setTopCoins(data);
    }
  };
  const TopNewsHandler = async () => {
    const RequestOption = {
      method: "GET",
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_NEWS_RAPIDAPI_HOST,
      },
    };
    console.log(RequestOption);

    const response = await fetch(
      `${
        import.meta.env.VITE_NEWS_API_URL
      }/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
      RequestOption
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  useEffect(() => {
    TopNewsHandler();
    TopCrytosHandler();
  }, []);
  return (
    <AppContext.Provider
      value={{
        topCoins,
        currency,
        setCurrency,
        currencySymbol,
        setCurrencySymbol,
        currencyId,
        setCurrencyId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
