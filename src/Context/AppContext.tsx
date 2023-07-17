import { CryprtoApi, NewsApi, TopCryptosApi, TopNewsApi } from "@/API/API";
import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext<any>(null);
export const AppProvider = ({ children }: any) => {
  const [topNewsCount, setTopNewsCount] = useState(9);
  const [currency, setCurrency] = useState("INR");
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [currencyId, setCurrencyId] = useState(0);
  const [topCoins, setTopCoins] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [news, setNews] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);

  const TopCrytosHandler = async () => {
    const response = await fetch(TopCryptosApi(currency));
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
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
    const response = await fetch(TopNewsApi(), RequestOption);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      setTopNews(data.value);
    }
  };
  const CrytosHandler = async () => {
    const response = await fetch(CryprtoApi(currency));
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      setCurrencyData(data);
    }
  };
  const NewsHandler = async () => {
    const RequestOption = {
      method: "GET",
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_NEWS_RAPIDAPI_HOST,
      },
    };
    const response = await fetch(NewsApi(), RequestOption);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      setNews(data.value);
    }
  };
  useEffect(() => {
    TopNewsHandler();
  }, []);
  useEffect(() => {
    NewsHandler();
  }, []);
  useEffect(() => {
    CrytosHandler();
    TopCrytosHandler();
  }, [currency]);

  return (
    <AppContext.Provider
      value={{
        news,
        topNews,
        currency,
        topCoins,
        currencyId,
        currencyData,
        topNewsCount,
        currencySymbol,
        setNews,
        setTopNews,
        setCurrency,
        setCurrencyId,
        setCurrencyData,
        setTopNewsCount,
        setCurrencySymbol,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
