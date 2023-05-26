import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faUsers,
  faHardDrive,
  faUser,
  faRectangleAd,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();
  const Links = [
    {
      id: 1,
      name: "Dashbord",
      link: "/dashboard",
      icon: faHome,
    },
    {
      id: 2,
      name: "Notifications",
      link: "/notifications",
      icon: faBell,
    },
    {
      id: 3,
      name: "Gestion des comptes",
      link: "/gestionComptes",
      icon: faUsers,
    },
    {
      id: 5,
      name: "Mon profil",
      link: "/profile",
      icon: faUser,
    },
  ];
  return (
    <div className="px-5 py-14">
      <div className="flex justify-between px-5">

      </div>
      <div className="mt-10">
        {Links.map((link, key) => (
          <div
            key={key}
            className={`${
              router.pathname == link.link
                ? "bg-dark-green font-medium cursor-pointer"
                : ""
            } text-white px-3 py-3 rounded-md my-3 font-md flex`}
          >
            <FontAwesomeIcon
              icon={link.icon}
              color="white"
              className="text-sm"
              width="15"
            />
            <Link href={link.link} className="ml-2 text-sm">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
