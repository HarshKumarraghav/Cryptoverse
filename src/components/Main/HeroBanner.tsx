import { motion } from "framer-motion";

type StatCardProps = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white p-2 md:p-4 rounded-lg shadow-lg text-center">
      <h2 className="text-sm font-bold text-primary mb-2">{title}</h2>
      <p className="text-lg md:text-2xl font-semibold">{value}</p>
    </div>
  );
};

const HeroBanner = () => {
  const statCards = [
    { title: "Total Cryptocurrencies", value: "27,414" },
    { title: "Total Exchanges", value: "160" },
    { title: "Total Market Cap", value: "$1.2T" },
    { title: "Total 24h Volume", value: "$36B" },
    { title: "Total Markets", value: "36.5K" },
  ];
  return (
    <motion.div
      className="max-w-screen-xl mx-auto div__height flex flex-col-reverse lg:flex-row items-center justify-center p-2 lg:p-4 font-main"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="main___background___gradient"></div>
      <motion.div
        className="w-full h-full lg:w-1/2 lg:h-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="py-1">
          <div className="container mx-auto flex flex-col items-center justify-center px-2 md:px-4 ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 lg:mb-4 text-center">
              Global{" "}
              <span className="gradient___text___color italic"> Crypto</span>{" "}
              Stats
            </h1>
            <div className="flex flex-wrap justify-center gap-y-3 gap-x-2 md:gap-6">
              {statCards.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <StatCard title={stat.title} value={stat.value} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2 lg:h-full "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/assets/crypto.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;
