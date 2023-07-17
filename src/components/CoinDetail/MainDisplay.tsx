import { useApp } from "@/Context/AppContext";
import { Badge } from "../ui/badge";
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { FaFacebook, FaReddit, FaTelegram } from "react-icons/fa";
import CoinChart from "./CoinChart";

const MainDisplay = ({ coinDetail }: any) => {
  console.log(coinDetail);
  const { currencySymbol, currency } = useApp();
  return (
    <div className="max-w-screen-xl mx-auto  flex flex-col-reverse lg:flex-row p-2 font-main">
      <div className="main___background___gradient"></div>
      <div className="w-full lg:w-2/5 p-2">
        <Card className="w-full p-2">
          <div className="flex justify-between">
            <Badge>Rank #{coinDetail.coingecko_rank + "."}</Badge>
            <Badge>
              ⭐️ {coinDetail?.watchlist_portfolio_users} on watchlists
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="flex flex-col">
              <div className="w-full h-14 flex gap-x-2 items-center justify-center">
                <img
                  src={coinDetail.image?.small}
                  alt=""
                  className="w-8 h-8 rounded-full bg-primary"
                />
                <h1 className="text-3xl flex items-center">
                  {coinDetail.name}{" "}
                  <span className="text-xl mt-1 font-light">
                    ({coinDetail?.symbol?.toUpperCase()})
                  </span>
                </h1>
              </div>
              <div className="w-full flex justify-center text-2xl items-center gap-x-2">
                <h1 className="font-bold">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.current_price[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </h1>
                <h1
                  className={`text-sm ${
                    coinDetail?.market_data?.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {coinDetail?.market_data?.price_change_percentage_24h?.toFixed(
                    2
                  )}
                  %
                </h1>
              </div>
            </CardTitle>
            <CardDescription>
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: coinDetail?.description?.en?.slice(0, 300) + "...",
                }}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex items-start flex-col">
            <div className="flex flex-wrap justify-between mb-4 ">
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Market Cap:</p>
                <p className="font-bold">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.market_cap[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Total Supply:</p>
                <p className="font-bold">
                  {coinDetail?.market_data?.total_supply?.toLocaleString() ||
                    "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Max Supply:</p>
                <p className="font-bold">
                  {coinDetail?.market_data?.max_supply?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Total Volume:</p>
                <p className="font-bold">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.total_volume[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">24h High:</p>
                <p className="font-bold text-green-500">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.high_24h[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">24h Low:</p>
                <p className="font-bold text-red-500">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.low_24h[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}{" "}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">24h Trading Volume:</p>
                <p className="font-bold">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.total_volume[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">
                  Fully Diluted Valuation:
                </p>
                <p className="font-bold">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.fully_diluted_valuation[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Circulating Supply:</p>
                <p className="font-bold">
                  {coinDetail?.market_data?.circulating_supply?.toLocaleString() ||
                    "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">Total Supply:</p>
                <p className="font-bold">
                  {coinDetail?.market_data?.total_supply?.toLocaleString() ||
                    "-"}
                </p>
              </div>

              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 ">All time low:</p>
                <p className="font-bold text-red-500">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.atl[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">All time high:</p>
                <p className="font-bold text-green-500">
                  {currencySymbol}{" "}
                  {coinDetail?.market_data?.ath[
                    currency.toLowerCase()
                  ]?.toLocaleString() || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">All time low date:</p>
                <p className="font-bold">
                  {moment(
                    coinDetail?.market_data?.atl_date[currency.toLowerCase()]
                  ).format("DD MMM YYYY") || "-"}
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-gray-500 underline ">All time high date:</p>
                <p className="font-bold">
                  {moment(
                    coinDetail?.market_data?.ath_date[currency.toLowerCase()]
                  ).format("DD MMM YYYY") || "-"}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full flex justify-between ">
            <div className="w-full flex flex-wrap items-center justify-around">
              {coinDetail?.community_data?.facebook_likes && (
                <Badge className="flex gap-x-2">
                  {" "}
                  {coinDetail?.community_data?.facebook_likes}{" "}
                  <FaFacebook size={18} />
                </Badge>
              )}
              {coinDetail?.community_data?.twitter_followers && (
                <Badge className="flex gap-x-2">
                  <TwitterLogoIcon />{" "}
                  {coinDetail?.community_data?.twitter_followers}{" "}
                </Badge>
              )}
              {coinDetail?.community_data?.reddit_subscribers && (
                <Badge className="flex gap-x-2">
                  <FaReddit size={18} />
                  {coinDetail?.community_data?.reddit_subscribers}{" "}
                </Badge>
              )}
              {coinDetail?.community_data?.telegram_channel_user_count && (
                <Badge className="flex gap-x-2">
                  <FaTelegram size={18} />
                  {coinDetail?.community_data?.telegram_channel_user_count}
                </Badge>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full lg:w-3/5 p-2 min-[100%-6rem]:">
        <CoinChart coinDetail={coinDetail} />
      </div>
    </div>
  );
};

export default MainDisplay;
