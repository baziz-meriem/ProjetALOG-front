import CustomInput from "@/components/loginPage/CustomInput";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";

const createADM = () => {
  const [data, setData] = useState({
    nom: null,
    password: null, // To generated
    mail: null,
    numTel: null,
    idClient: null, // will get it from the session
  });
  const handleSubmit = () => {
    console.log(data);
  };
  const options = ["option1", "option2", "option3"];
  return (
    <div className="">
      <PageHeader
        title="Ajouter un ADM"
        description="Donner les informations générales de l'agent Commerciale"
      />
      <div className="h-full w-full relative overflow-y-hidden flex flex-wrap">
        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomInput
              label="Nom"
              options={options}
              steFunction={setData}
              attr="nom"
              data={data}
              type="text"
            />
            <CustomInput
              label="Email"
              options={options}
              steFunction={setData}
              attr="mail"
              data={data}
              type="email"
            />
             <CustomInput
              label="Numéro de télphone"
              options={options}
              steFunction={setData}
              attr="numTel"
              data={data}
              type="number"
            />
          </div>
        </div>


      </div>
      <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">


            <div className="flex justify-end">
              <button
                className="btn-green px-11 py-2.5 mt-4 light-grey"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter ADM
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default createADM;
