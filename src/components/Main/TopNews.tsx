import { useApp } from "@/Context/AppContext";
import NewsCard from "../Reusable/NewsCard";
const TopNewsSection = () => {
  const { topNews } = useApp();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topNews?.map((newsItem: any) => (
        <NewsCard newsItem={newsItem} key={newsItem?.url} />
      ))}
    </div>
  );
};

export default TopNewsSection;
