const MainDisplay = ({ coinDetail }: any) => {
  console.log(coinDetail);

  return (
    <div className="max-w-screen-xl mx-auto div__height flex flex-col lg:flex-row p-2 lg:p-4 font-main">
      <div className="main___background___gradient"></div>
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full">hello</div>
      <div className="w-full lg:w-1/2 h-1/2  lg:h-full">woeld</div>
    </div>
  );
};

export default MainDisplay;
