import { ChartDataApi } from "@/API/API";
import { useApp } from "@/Context/AppContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment"; // Import Moment.js library
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface Coin {
  [index: number]: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ coinDetail }: any) => {
  const [day, setDay] = useState<number>(1);
  const [chartData, setChartData] = useState<Coin[]>([]); // Provide type for chartData
  const [selectedPriceType, setSelectedPriceType] = useState<string>("prices");
  const { currency } = useApp();
  const { id } = useParams();

  const ChartDataHandler = async (id: string | undefined) => {
    try {
      const response = await fetch(ChartDataApi(id, day, currency));
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json(); // Provide type for response data
      setChartData(data[selectedPriceType]);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ChartDataHandler(id);
  }, [id, day, selectedPriceType]);

  const handleDayChange = (selectedDay: number) => {
    setDay(selectedDay);
  };

  const handlePriceTypeChange = (selectedPriceType: string) => {
    setSelectedPriceType(selectedPriceType);
  };

  return (
    <Card className="w-full p-2">
      <div className="flex justify-end">
        <Badge>Rank #{coinDetail.coingecko_rank + "."}</Badge>
      </div>
      <CardHeader>
        <CardTitle>
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
          <h1 className="text-center text-xl">
            {selectedPriceType === "prices"
              ? "Price"
              : selectedPriceType === "market_caps"
              ? "Market Cap"
              : "Total Volume"}{" "}
            Chart ({day === 1 ? "Past 24 Hours" : `Past ${day} Days`})
          </h1>
        </CardTitle>
      </CardHeader>
      <CardDescription className="flex flex-col gap-y-3">
        <div>
          <button
            className={`p-2 shadow-md border rounded-l-md w-14 ${
              day === 1 ? "bg-primary text-white" : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(1)}
          >
            1d
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t w-14 ${
              day === 7 ? "bg-primary text-white" : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(7)}
          >
            7d
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t w-14 ${
              day === 30
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(30)}
          >
            30s
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t w-14 ${
              day === 90
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(90)}
          >
            90d
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t w-14 ${
              day === 180
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(180)}
          >
            180d
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t rounded-r-md w-14 ${
              day === 365
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handleDayChange(365)}
          >
            1y
          </button>
        </div>
        <div className="mb-4">
          <button
            className={`p-2 shadow-md border rounded-l-md  w-32 ${
              selectedPriceType === "prices"
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handlePriceTypeChange("prices")}
          >
            Price
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t w-32 ${
              selectedPriceType === "market_caps"
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handlePriceTypeChange("market_caps")}
          >
            Market Cap
          </button>
          <button
            className={`p-2 shadow-md border-r border-b border-t rounded-r-md w-32 ${
              selectedPriceType === "total_volumes"
                ? "bg-primary text-white"
                : "bg-secondary bg-opacity-50"
            }`}
            onClick={() => handlePriceTypeChange("total_volumes")}
          >
            Total Volume
          </button>
        </div>
      </CardDescription>
      <CardContent>
        {chartData.length === 0 ? null : (
          <Line
            data={{
              labels: chartData?.map((coin) => {
                const date = moment(coin[0]).format(day === 1 ? "h:mm A" : "L");
                return date;
              }),
              datasets: [
                {
                  data: chartData?.map((coin) => coin[1]),
                  label: `${
                    selectedPriceType === "prices"
                      ? "Price"
                      : selectedPriceType === "market_caps"
                      ? "Market Cap"
                      : "Total Volume"
                  } (Past ${day} Days) in ${currency}`,
                  borderColor: chartData?.map((coin, index, data) => {
                    if (index === 0) return "";
                    return coin[1] < data[index - 1][1] ? "red" : "green";
                  }),
                  pointBackgroundColor: chartData?.map((coin, index, data) => {
                    if (index === 0) return "";
                    return coin[1] < data[index - 1][1] ? "red" : "green";
                  }),
                  backgroundColor: "black",
                  pointRadius: 1,
                  pointHoverRadius: 4,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        )}
      </CardContent>
      <CardFooter className="w-full flex justify-center text-primary">
        This chart displays the {selectedPriceType} over the past {day} days in{" "}
        {currency}.
      </CardFooter>
    </Card>
  );
};

export default CoinChart;
