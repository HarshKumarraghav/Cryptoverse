import { Button } from "@/components/ui/button";
import { CurrencyData } from "@/Utils/Currency";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useApp } from "@/Context/AppContext";
import { BsCurrencyExchange } from "react-icons/bs";
const CurrencyFilter = () => {
  const [open, setOpen] = useState(false);
  const { currency, setCurrency, currencySymbol, setCurrencySymbol } = useApp();
  return (
    <div className="flex items-center space-x-1">
      <p className="text-md text-white flex items-center">
        <BsCurrencyExchange size={20} />
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[100px] justify-center">
            {currency ? (
              <>{currencySymbol + " " + currency}</>
            ) : (
              <>Select Currency</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Search Your Country..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {CurrencyData.map((currency) => (
                  <CommandItem
                    key={currency.id}
                    className="flex items-center"
                    onSelect={() => {
                      setCurrency(currency.name);
                      setCurrencySymbol(currency.symbol);
                      setOpen(false);
                    }}
                  >
                    {currency.country}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CurrencyFilter;
