import CustomSelect from "@/components/loginPage/CustomSelect";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const createAC = () => {
  const options=["option1","option2","option3","option4","option14","option22","option31","option41","option10","option20","option30","option24"]
  return (
    <div className="">
      <PageHeader title="Ajouter un Agent de Maintenance" description="Donner les informations générales de l'agent de maintenance" />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
          <div className="w-1/2 m-4">
            <div className="space-y-10 mt-16">
            <CustomSelect label="Client" options={options}/>
              <input
              type="text"
              class="p-5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter le nom"
            ></input>
              <input
              type="text"
              class="p-5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter l'email"
            ></input>
            </div>

          </div>
          
          <div className="w-1/2 m-4">
            <div className="space-y-10 mt-16">
            <input
              type="text"
              class="p-5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter le prénom"
            ></input>
              <input
              type="text"
              class="p-5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter le numéro de télephone"
            ></input>
              <input
              type="text"
              class="p-5 inputs bg-effect shadow-all text-grey "
              placeholder="Enter le Code de Dévérouillage"
            ></input>
              <div className="flex justify-end">
                <button class="btn-green px-11 py-2.5 mt-4 light-grey">
                  Ajouter l'Agent de maintenance
                </button>
              </div>
            </div>

          </div>
      </div>


    </div>
  );
};

export default createAC;