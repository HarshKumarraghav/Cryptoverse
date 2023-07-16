import { useApp } from "@/Context/AppContext";
import { Button } from "@/components/ui/button";
import { TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export function PaginatedItems({ itemsPerPage, setCurrentItems }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const { currencyData } = useApp();

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the effect
 is triggered whenever the `itemOffset`, `itemsPerPage`, or `currencyData` values change. */
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(currencyData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currencyData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, currencyData]);

  /**
   * The function `handlePageClick` updates the item offset based on the selected page number.
   * @param event - The event parameter is an object that contains information about the event that
   * triggered the function. In this case, it expects an object with a selected property, which
   * represents the selected page number.
   */
  const handlePageClick = (event: { selected: number }) => {
    if (event.selected === 0) {
      setItemOffset(0);
      return;
    }
    const newOffset = (event.selected * itemsPerPage) % currencyData.length;
    setItemOffset(newOffset);
  };

  return (
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
        activeClassName="bg-primary rounded-md text-white "
        pageClassName="px-3 py-2 text-primary"
        previousClassName="px-3 py-2 rounded-md text-primary"
        nextClassName="px-3 py-2 rounded-md text-primary"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}
