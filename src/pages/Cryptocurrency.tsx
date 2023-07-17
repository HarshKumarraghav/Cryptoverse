import MainBanner from "@/components/Cryptocurrency/MainBanner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";

const Cryptocurrency = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <MainBanner />

      <Footer />
    </div>
  );
};

export default Cryptocurrency;
