import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <PageHeader title="Profile page" description="Some description here" />
      <div className="h-screen w-full relative overflow-hidden flex flex-row">
        <div class="w-1/2 m-14">
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
              <button class="px-20 py-2 bg-effect shadow-all text-grey ">
                Upload image
              </button>
            </div>
          </div>
        </div>
        <div class="w-1/2 my-14  mx-16 ">
        
          <div className="space-y-4 mt-16 ">
            <input
              type="text"
              class="p-3.5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter your first name"
            ></input>
            <input
              type="text"
              class="p-3.5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter your last name"
            ></input>
            <input
              type="text"
              class="p-3.5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter your email"
            ></input>
            <input
              type="text"
              class="p-3.5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter your phone number"
            ></input>
            <div className="flex justify-end">
              <button class="btn-green px-11 py-2.5 mt-4 light-grey">
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
