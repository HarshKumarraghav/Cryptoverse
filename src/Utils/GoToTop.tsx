import { ArrowUpIcon } from "@radix-ui/react-icons";

export const GoToTop = () => {
  return (
    <button
      className="bg-primary p-4 text-white z-50 absolute bottom-80 right-4 rounded-full"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUpIcon />
    </button>
  );
};
