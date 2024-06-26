import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Dashboard",
      href: "/profile",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [menueActive, setActive] = useState(false);
  return (
    <div className="absolute w-full z-50" data-testid="navbar" >
      {/* Large screen menu  */}
      <div className="md:flex font-bold text-white justify-between xl:px-27 lg:px-40 md:px-10 py-10 hidden ">
        <div>

        </div>
        <div className="flex pr-5">
          {pages.map((elem, key) => (
            <Link
              href={elem.href}
              key={key}
              className={`xl:ml-20 lg:ml-18 md:ml-10 pt-2 hover:text-light-green ${
                router.pathname == elem.href
                  ? "text-light-green font-semibold"
                  : ""
              }`}
              onClick={() => setActivePage(key)}
            >
              {elem.name}
              {router.pathname == elem.href ? (
                <div className="py-1 w-fit px-2 mx-auto  bg-light-green rounded-lg"></div>
              ) : (
                <></>
              )}
            </Link>
          ))}

          <div className="mx-6">
            <Link href="/login">
              <button className="btn-green">Login</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Phone menue */}
      <div
        className={`md:hidden justify-between px-5 py-5 flex ${
          menueActive ? "bg-[rgba(0,200,0,.05)]" : ""
        }`}
      >
        <div>
          <Image
            src="/logos/phonegreenDevlift.png"
            width={35}
            height="35"
            alt="exaview logo"
          ></Image>
        </div>
        <div>
          <Image
            src="/icons/hamicon.png"
            width={30}
            height="30"
            alt="ham menue icon"
            onClick={() => setActive(!menueActive)}
          ></Image>
        </div>
      </div>
      {menueActive ? (
        <div className="block md:hidden bg-[rgba(0,200,0,.05)] pb-4 downMenu">
          {pages.map((elem, key) => (
            <Link
              href={elem.href}
              key={key}
              className={`w-fit mx-auto pt-2 block ${
                activePage == key ? "text-light-green font-semibold" : ""
              }`}
              onClick={() => {
                setActivePage(key);
                setActive(false);
              }}
            >
              {elem.name}
              {activePage == key ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-light-green rounded-lg"></div>
              ) : (
                <></>
              )}
            </Link>
          ))}
          <div className="mx-auto mt-5 w-fit block text-xs">
            <Link href="/login">
              <button className="btn-green">Login</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
