import Image from "next/image";
const Header = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden" data-testid="header">
      <Image
        src="/icons/coffee-left 1.svg"
        width={280}
        height="200"
        alt="exaview logo"
        className="absolute top-0 -left-1"
      ></Image>

      <div className="md:flex lg:px-32 justify-between px-2">
        <div className="lg:w-1/2 md:pt-60 pt-52">
          <div className="lg:text-5xl text-3xl font-bold">Unleash the </div>
          <div className="lg:text-6xl text-4xl font-bold text-light-green">Extraordinary!</div>
          <div className="md:text-md text-md  mt-5">
          Experience Coffee Dispensers in a Whole New Light. Seamlessly Track and Optimize Your Vending Business with Real-Time Performance Insights. 
          </div>
          <button className="btn-green mt-5 md:text-lg text-sm  font-semibold">
          Discover More
          </button>
        </div>
        <div className=" pt-0 hidden md:block">
          <Image
            src="/images/coffeeHP.jpg"
            width={700}
            height="100"
            alt="exaview logo"
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
