import { useApp } from "@/Context/AppContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useNavigate } from "react-router-dom";

const Cards = ({ currency }: any) => {
  const Router = useNavigate();
  const { currencySymbol } = useApp();
  return (
    <Card
      className="bg-white p-2 md:p-4 rounded-lg shadow-lg"
      key={currency?.id}
      onClick={() => {
        Router(`/coindetail/${currency.id}`);
      }}
    >
      <CardHeader className="flex flex-row w-full justify-between items-center border-b-2">
        <CardTitle className="text-lg">
          {currency?.market_cap_rank +
            ". " +
            currency.name +
            " " +
            `(${currency?.symbol})`}
          {}
        </CardTitle>
        <CardDescription>
          <img
            src={currency?.image}
            alt={currency?.name}
            className="w-10 h-10 rounded-full bg-primary"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">Price:</p>
            <p className="font-bold">
              {currencySymbol} {currency?.current_price?.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">Market Cap:</p>
            <p className="font-bold">
              {currencySymbol} {currency?.market_cap?.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">Price Change:</p>
            <p
              className={`${
                currency?.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {currency?.price_change_percentage_24h?.toFixed(2)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cards;
