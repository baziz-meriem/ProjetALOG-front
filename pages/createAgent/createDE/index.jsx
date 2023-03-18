import CustomInput from "@/components/loginPage/CustomInput";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";

const CreateDecideur = () => {
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
        title="Ajouter un Decideur"
        description="Donner les informations générales de l'agent Commerciale"
      />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
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
          </div>
        </div>

        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomInput
              label="Numéro de télphone"
              options={options}
              steFunction={setData}
              attr="numTel"
              data={data}
              type="number"
            />

            <div className="flex justify-end">
              <button
                class="btn-green px-11 py-2.5 mt-4 light-grey"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter Decideur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDecideur;
