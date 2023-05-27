import ConnectForm from "@/components/loginPage/ConnectForm";
import NavBar from "@/components/shared/NavMenu";
import Image from "next/image";
const login = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <NavBar />
      <Image
        src="/icons/coffee-left 1.svg"
        width={280}
        height="200"
        alt="exaview logo"
        className="absolute top-0 -left-1"
      ></Image>
      <Image
        src="/icons/coffee-right.svg"
        width={310}
        height="100"
        alt="exaview logo"
        className="absolute bottom-0 right-0"
      ></Image>
      <div className=" lg:px-32 justify-between px-5">
        <ConnectForm />
      </div>
    </div>
  );
};

export default login;
