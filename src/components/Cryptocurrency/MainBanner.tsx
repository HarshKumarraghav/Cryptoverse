import { useApp } from "@/Context/AppContext";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
const MainBanner = () => {
  const { currencyData, currencySymbol } = useApp();
  return (
    <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center p-2 lg:p-4 font-main">
      <div className="main___background___gradient"></div>
      <div className=" container flex gap-3 md:gap-x-4 flex-col  md:flex-row">
        <Input
          type="text"
          placeholder="Search cryptos..."
          className="h-14 rounded-full hover__button__Black "
        />
      </div>
      <div className="w-full mt-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currencyData?.map((currency: any) => (
            <Card className="bg-white p-2 md:p-4 rounded-lg shadow-lg">
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
                      {currencySymbol}{" "}
                      {currency?.current_price?.toLocaleString()}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
