import HeroBanner from "@/components/Main/HeroBanner";
import Header from "@/components/Navbar/Header";
import TopCryptos from "@/components/Main/TopCryptos";
import TopNewsSection from "@/components/Main/TopNews";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/Footer";
import { useNavigate } from "react-router";
import { GoToTop } from "@/Utils/GoToTop";
import { useEffect } from "react";

const MainPage = () => {
  const Router = useNavigate();
  useEffect(() => {
    document.title = "Cryptocurrency | Home";
  }, []);
  return (
    <div className="w-screen min-h-screen relative">
      <Header />
      <HeroBanner />

      <main className="max-w-screen-xl mx-auto text-dark px-4">
        <h2 className="font-bold md:my-14 my-6 text-3xl md:text-4xl max-w-lg px-2">
          Top 10 <span className="gradient___text___color ">Cryptos</span> In
          The World
        </h2>
        <TopCryptos />
        <div className="w-full flex justify-end ">
          <Button
            className="hover__button__Black rounded-full mt-4"
            onClick={() => Router("/cryptocurrencies")}
          >
            Show More...
          </Button>
        </div>
      </main>
      <section className="max-w-screen-xl mx-auto flex flex-col justify-center p-4 mt-40">
        <h1 className="font-bold font-sans my-10 text-3xl md:text-4xl">
          Latest{" "}
          <span className="gradient___text___color italic">Cryptocurrency</span>{" "}
          News
        </h1>
        <TopNewsSection />
        <div className="w-full mt-4 flex justify-end">
          <Button
            className="hover__button__Black rounded-full"
            onClick={() => Router("/news")}
          >
            Show More...
          </Button>
        </div>
      </section>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default MainPage;
