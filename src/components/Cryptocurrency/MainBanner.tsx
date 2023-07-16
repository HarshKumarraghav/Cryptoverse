import { Input } from "@/components/ui/input";
import { PaginatedItems } from "@/Utils/Pagination";
import { useState } from "react";
import Cards from "./Cards";
const MainBanner = () => {
  const [currentItems, setCurrentItems] = useState([]);
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
          {currentItems?.map((currency: any) => (
            <Cards currency={currency} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <PaginatedItems itemsPerPage={20} setCurrentItems={setCurrentItems} />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
