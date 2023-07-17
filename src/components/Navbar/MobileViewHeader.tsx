import { HomeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GiCrystalShine } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CurrencyFilter from "./CurrencyFilter";
type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const MobileViewHeader = ({ showModal, setShowModal }: Props) => {
  const Router = useNavigate();
  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setShowModal(false);
    }
  };
  if (showModal === false) return null;
  return (
    <div
      className="fixed inset-0 z-40 header__blur"
      onClick={handleClose}
      id="modelContainer"
    >
      <div className="flex h-16 items-center justify-between p-5">
        <motion.h1
          onClick={() => Router("/")}
          className="text-2xl flex gap-x-2 gradient___text___color italic text-black font-main font-bold items-center cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/logo.png" className="w-10 h-10" alt="" />
          Cryptoverse
        </motion.h1>
        <div>
          <GrClose sixe={30} onClick={() => setShowModal(false)} />
        </div>
      </div>
      <div className="flex flex-col items-start p-8">
        <motion.button
          onClick={() => {
            Router("/");
            setShowModal(false);
          }}
          className="py-2 px-4  text-lg text-primary focus:outline-none flex gap-x-2 items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HomeIcon />
          Home
        </motion.button>
        <motion.button
          onClick={() => {
            Router("/cryptocurrencies");
            setShowModal(false);
          }}
          className="py-2 px-4  text-lg text-primary focus:outline-none flex gap-x-2 items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GiCrystalShine size={20} /> Cryptrocurrencies
        </motion.button>
        <motion.button
          onClick={() => {
            Router("/news");
            setShowModal(false);
          }}
          className="py-2 px-4  text-lg text-primary focus:outline-none flex gap-x-2 items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineLightBulb size={20} /> News
        </motion.button>
        <div className="bg-primary p-2 rounded-xl">
          <CurrencyFilter />
        </div>
      </div>
    </div>
  );
};

export default MobileViewHeader;
