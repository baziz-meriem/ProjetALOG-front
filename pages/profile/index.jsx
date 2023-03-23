import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";
import Image from "next/image";

const index = () => {
  const [profileData, setProfile] = useState({
    nom: "Sahbi",
    prenom: "Ouael Nedjem eddine",
    email: "jo_sahbi@esi.dz",
    numTel: "0795951519",
  });

  const handleChange = (e) => {
    setProfile({ ...profileData, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-full w-full overflow-hidden">
      <PageHeader title="Profile page" description="Some description here" />
      <div className=" relative  flex flex-row">
        <div className="w-1/2">
          <div className="space-y-10 mt-16 ">
            <div className="flex items-center justify-center rounded-full overflow-hidden relative w-48 h-48 mx-auto">
              <Image
                src="/images/user.png"
                width={200}
                height="100"
                alt="user image"
                className=""
              ></Image>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-20 py-2 bg-effect shadow-all text-grey ">
                Upload image
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2  mx-16 ">
          <div className="space-y-4 mt-16 ">
            <input
              type="text"
              className="p-3.5 inputs bg-effect shadow-all  "
              placeholder="Enter your first name"
              value={profileData.nom}
              name ="nom"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
            <input
              type="text"
              className="p-3.5 inputs bg-effect shadow-all "
              placeholder={profileData.prenom}
              value={profileData.prenom}
              name="prenom"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
            <input
              type="text"
              className="p-3.5 inputs bg-effect shadow-all  "
              placeholder="Enter your email"
              value={profileData.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
            <input
              type="text"
              className="p-3.5 inputs bg-effect shadow-all "
              placeholder="Enter your phone number"
              value={profileData.numTel}
              name="numTel"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
            <div className="flex justify-end">
              <button className="btn-green px-11 py-2.5 mt-4 light-grey">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
