import CustomInput from "@/components/loginPage/CustomInput";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CreateDecideur = () => {
  const [data, setData] = useState({
    nom: null,
    prenom: null,
    password: "1234567891", // To generated
    email: null,
    numTel: null,
    idClient: 29, // will get it from the session
  });
  const handleSubmit = () => {
    console.log(data);
    axios
      .post(
        "https://sitandlipapi.onrender.com/api/v1/profileManagement/decideur",
        data
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("Decideur Created Succesfully!");
        } else {
          toast.error("Some errors occured!");
        }
      });
  };
  const options = ["option1", "option2", "option3"];
  return (
    <div className="">
      <ToastContainer/>
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
              attr="email"
              data={data}
              type="email"
            />
          </div>
        </div>

        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
          <CustomInput
              label="Prenom"
              options={options}
              steFunction={setData}
              attr="prenom"
              data={data}
              type="text"
            />
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
                className="btn-green px-11 py-2.5 mt-4 light-grey"
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
