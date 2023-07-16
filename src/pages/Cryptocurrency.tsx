import MainBanner from "@/components/Cryptocurrency/MainBanner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";

const Cryptocurrency = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <MainBanner />
      {/* <HeroBanner />

      <main className="max-w-screen-xl mx-auto text-dark px-4">
        <h2 className="font-bold md:my-14 my-6 text-3xl md:text-4xl max-w-lg px-2">
          Top 10 <span className="gradient___text___color ">Cryptos</span> In
          The World
        </h2>
        <TopCryptos />
        <div className="w-full flex justify-end">
          <Button>Show More...</Button>
        </div>
      </main>
      <section className="max-w-screen-xl mx-auto flex flex-col justify-center p-4 mt-40">
        <h1 className="font-bold font-sans my-10 text-3xl md:text-4xl">
          Latest <span className="gradient___text___color italic">Cryptos</span>{" "}
          News
        </h1>
        <TopNewsSection />
        <div className="w-full mt-4 flex justify-end">
          <Button>Show More...</Button>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Cryptocurrency;
