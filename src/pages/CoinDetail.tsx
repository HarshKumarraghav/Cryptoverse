import { CryptoByIdApi } from "@/API/API";
import { GoToTop } from "@/Utils/GoToTop";
import MainDisplay from "@/components/CoinDetail/MainDisplay";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const [coinDetail, setCoinDetail] = useState({});
  const { id } = useParams();
  const CoinDetailByIdHandler = async (id: string | undefined) => {
    const response = await fetch(CryptoByIdApi(id));
    if (!response.ok) {
      throw new Error("Something went wrong");
    } else {
      const data = await response.json();
      setCoinDetail(data);
    }
  };
  useEffect(() => {
    CoinDetailByIdHandler(id);
  }, [id]);

  return (
    <div className="w-screen min-h-screen relative">
      <Header />
      <MainDisplay coinDetail={coinDetail} />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default CoinDetail;
