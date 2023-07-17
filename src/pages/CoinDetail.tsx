import { GoToTop } from "@/Utils/GoToTop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { id } = useParams();
  return (
    <div className="w-screen min-h-screen relative">
      <Header />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default CoinDetail;
