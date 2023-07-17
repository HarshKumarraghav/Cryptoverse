import { HomeIcon } from "@radix-ui/react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GiCrystalShine } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import CurrencyFilter from "./CurrencyFilter";
import { useState } from "react";
import MobileViewHeader from "./MobileViewHeader";
const Header = () => {
  const Router = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 w-full header__blur">
        <div className="container mx-auto flex flex-row justify-between items-center py-4 px-2">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <motion.h1
              onClick={() => Router("/")}
              className="text-2xl  flex gap-x-2 gradient___text___color italic text-black font-main font-bold items-center cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/logo.png" className="w-10 h-10" alt="" />
              Cryptoverse
            </motion.h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => Router("/")}
              className="py-2 px-4  text-sm text-primary focus:outline-none flex gap-x-2 items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon />
              Home
            </motion.button>
            <motion.button
              onClick={() => Router("/cryptocurrencies")}
              className="py-2 px-4  text-sm text-primary focus:outline-none flex gap-x-2 items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiCrystalShine size={20} /> Cryptrocurrencies
            </motion.button>
            <motion.button
              onClick={() => Router("/news")}
              className="py-2 px-4  text-sm text-primary focus:outline-none flex gap-x-2 items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineLightBulb size={20} /> News
            </motion.button>
            <div className="bg-primary p-2 rounded-xl">
              <CurrencyFilter />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <AiOutlineMenu size={30} onClick={() => setShowModal(true)} />
          </div>
        </div>
      </header>
      <MobileViewHeader showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
