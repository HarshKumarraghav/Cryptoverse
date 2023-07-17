import { GoToTop } from "@/Utils/GoToTop";
import MainBanner from "@/components/Cryptocurrency/MainBanner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
import { useEffect } from "react";

const Cryptocurrency = () => {
  useEffect(() => {
    document.title = "Cryptocurrency | Tracker";
  }, []);

  return (
    <div className="w-screen min-h-screen relative">
      <Header />
      <MainBanner />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Cryptocurrency;
