import CustomInput from "@/components/loginPage/CustomInput";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const createADM = () => {
  const [data, setData] = useState({
    nom: "true",
    prenom: "true",
    email: "sahbi@gmail.com",
    numTel: "1234567891",
    idClient: 1,
    password: "1234567891",
  });
  const handleSubmit = () => {
    console.log(data);
    axios
      .post(
        "https://sitandlipapi.onrender.com/api/v1/profileManagement/adm",
        data
      )
      .then((res) => {
        if (res.data.status === "success") {
          console.log("AM inserted");
          toast.success("ADM Created Succesfully!");
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
              label="Prénom"
              options={options}
              steFunction={setData}
              attr="prenom"
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
