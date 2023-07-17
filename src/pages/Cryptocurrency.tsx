import { GoToTop } from "@/Utils/GoToTop";
import MainBanner from "@/components/Cryptocurrency/MainBanner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";

const Cryptocurrency = () => {
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
