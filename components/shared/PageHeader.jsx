import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const PageHeader = ({ title, description }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-4xl font-bold">{title}</div>{" "}
        <div className="text-gray-500 mt-1 text-grey">{description}</div>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faBell} className="text-2xl mx-4 mt-2" />
        <div className=" w-10 h-10 rounded-full relative overflow-hidden">
          <Image
            src="/images/user.png"
            width={100}
            height="100"
            alt="exaview logo"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
