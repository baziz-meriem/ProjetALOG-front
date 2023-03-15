import CustomSelect from "@/components/loginPage/CustomSelect";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const createADM = () => {
  const options=["option1","option2","option3","option4","option14","option22","option31","option41","option10","option20","option30","option24"]
  return (
    <div className="">
      <PageHeader title="Ajouter un Administrateur des distributeurs" description="Donner les informations générales de l'Administrateur des distributeurs du client" />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
          <div className="w-1/2 m-4">
            <div className="space-y-10 mt-16">
            <CustomSelect label="Client" options={options}/>
              <CustomSelect label="Prénom" options={options}/>
              <CustomSelect label="Email" options={options}/>
            </div>

          </div>
          
          <div className="w-1/2 m-4">
            <div className="space-y-10 mt-16">
              <CustomSelect label="Nom" options={options}/>
              <CustomSelect label="Numéro de Télephone" options={options}/>
              <div className="flex justify-end">
                <button class="btn-green px-11 py-2.5 mt-4 light-grey">
                  Ajouter l'Administrateur des distributeurs 
                  
                </button>
              </div>
            </div>

          </div>
      </div>


    </div>
  );
};

export default createADM;
