import { useApp } from "@/Context/AppContext";
import NewsCard from "../Reusable/NewsCard";

const MainSection = () => {
  const { news } = useApp();
  console.log(news);

  return (
    <div className="relative max-w-screen-xl mx-auto flex flex-col items-center justify-center p-2 lg:p-4 font-main">
      <div className="main___background___gradient"></div>
      <h1 className="sticky top-20 font-bold font-sans my-10 text-3xl md:text-4xl header__blur w-full h-14 text-center">
        All{" "}
        <span className="gradient___text___color italic">Cryptocurrency</span>{" "}
        News
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news?.map((newsItem: any) => (
          <NewsCard newsItem={newsItem} key={newsItem?.url} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
