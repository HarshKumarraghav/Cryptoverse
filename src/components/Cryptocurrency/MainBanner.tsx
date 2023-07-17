import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";
import Cards from "./Cards";
import { useApp } from "@/Context/AppContext";
import ReactPaginate from "react-paginate";
import { TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const MainBanner = () => {
  const { currencyData } = useApp();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const filteredData = currencyData.filter(
    (item: { name: string; symbol: string }) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (selectedPage: {
    selected: SetStateAction<number>;
  }) => {
    setCurrentPage(selectedPage.selected);
    window.scrollTo(0, 0);
  };

  const displayedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center p-2 lg:p-4 font-main">
      <div className="main___background___gradient"></div>
      <div className="container flex gap-3 md:gap-x-4 flex-col  md:flex-row">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search cryptos..."
          className="h-14 rounded-full hover__button__Black border__"
        />
      </div>
      <div className="w-full mt-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedData.map((currency: any) => (
            <Cards currency={currency} key={currency.id} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="flex justify-center mt-8">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <Button>
                  <TrackNextIcon />
                </Button>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={
                <Button>
                  <TrackPreviousIcon />
                </Button>
              }
              containerClassName="pagination flex rounded-md text-primary bg-secondary items-center justify-center"
              activeClassName="bg-primary rounded-md text-white"
              pageClassName="px-3 py-2 text-primary"
              previousClassName="px-3 py-2 rounded-md text-primary"
              nextClassName="px-3 py-2 rounded-md text-primary"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
