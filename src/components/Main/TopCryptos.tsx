import { Card } from "@/components/ui/card";
import { AddCommas } from "@/Utils/func";
import { useApp } from "@/Context/AppContext";
import { useNavigate } from "react-router-dom";
const TopCryptos = () => {
  const { topCoins, currencySymbol } = useApp();
  const Router = useNavigate();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topCoins?.map((coin: any) => (
        <Card
          className="bg-white shadow-md rounded-md p-4"
          key={coin.id}
          onClick={() => {
            Router(`/coindetail/${coin.id}`);
          }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-10 h-10 rounded-full"
              />
              <h1 className="font-bold ml-2">{coin.name}</h1>
            </div>
            <h1 className="font-bold">
              {currencySymbol}
              {AddCommas(coin?.current_price.toFixed(2))}
            </h1>
          </div>
          <div className="flex justify-between items-center my-2">
            <h1 className="text-gray-500">Market Cap:</h1>

            <h1 className="font-bold">
              {currencySymbol}
              {AddCommas(coin?.market_cap.toFixed(2))}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Price Change:</h1>
            <h1
              className={`${
                coin?.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {coin?.price_change_percentage_24h.toFixed(2)}%
            </h1>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopCryptos;
