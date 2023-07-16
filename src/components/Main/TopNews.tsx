import { useApp } from "@/Context/AppContext";
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const TopNewsSection = () => {
  const { News } = useApp();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {News?.map((newsItem: any) => (
        <Card
          className="flex flex-col justify-between"
          onClick={() => window.open(newsItem.url, "_blank")}
        >
          <CardHeader className="w-full flex flex-row items-center">
            <CardTitle className="w-2/3">{newsItem?.name}</CardTitle>

            <CardDescription className="h-32 w-32">
              <img
                src={newsItem?.image?.thumbnail?.contentUrl}
                alt="image"
                className="w-full h-full rounded-full"
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{newsItem?.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <img
                src={newsItem?.provider[0]?.image?.thumbnail?.contentUrl}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-semibold">
                {newsItem?.provider[0]?.name}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">
                {moment(newsItem.datePublished).startOf("minute").fromNow()}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TopNewsSection;
