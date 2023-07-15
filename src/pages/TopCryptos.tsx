import { useEffect, useState } from "react";
import { TopCryptosApi } from "../API/API";
import { Card } from "@/components/ui/card";
const TopCryptos = () => {
  const [topCoins, setTopCoins] = useState([]);
  const TopCrytosHandler = async () => {
    const response = await fetch(TopCryptosApi("INR"));
    if (!response.ok) {
      throw new Error("Something went wrong!");
    } else {
      const data = await response.json();
      console.log(data);

      setTopCoins(data);
    }
  };
  useEffect(() => {
    TopCrytosHandler();
  }, []);
  const numberWithCommas = (x: { toString: () => string }) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topCoins.map((coin: any) => (
        <Card className="bg-white shadow-md rounded-md p-4" key={coin.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={coin.image} alt={coin.name} className="w-10 h-10" />
              <h1 className="font-bold ml-2">{coin.name}</h1>
            </div>
            <h1 className="font-bold">
              ₹{numberWithCommas(coin?.current_price.toFixed(2))}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Market Cap:</h1>

            <h1 className="font-bold">
              ₹{numberWithCommas(coin?.market_cap.toFixed(2))}
            </h1>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopCryptos;
