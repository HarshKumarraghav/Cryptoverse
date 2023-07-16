import HeroBanner from "@/components/Main/HeroBanner";
import Header from "@/components/Navbar/Header";
import TopCryptos from "../components/Main/TopCryptos";

const MainPage = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <HeroBanner />

      <main className="max-w-screen-xl mx-auto text-dark px-4">
        <h2 className="font-bold md:my-14 my-6 text-3xl md:text-4xl max-w-lg px-2">
          Top 10 <span className="gradient___text___color ">Cryptos</span> In
          The World
        </h2>
        <TopCryptos />
        {/* <SecondSection /> */}
      </main>
      <section className="max-w-screen-xl mx-auto flex flex-col justify-center p-4 mt-40">
        <h1 className="font-bold font-sans my-10 text-3xl md:text-4xl">
          More Features of{" "}
          <span className="gradient___text___color ">MangoDoc.ai</span>
        </h1>
        {/* <MoreFeatureSection /> */}
      </section>
      {/* <ThirdSection /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainPage;
