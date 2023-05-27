import { React, useEffect, useState } from "react";
import CustomInput from "@/components/loginPage/CustomInput";
import CustomSelect from "@/components/loginPage/CustomSelect";
import axios from "axios";

function  ListForm({ agent }){

  const [data, setData] = useState({
    nom: null,
    prenom: null,
    password: null, // To generated
    mail: null,
    numTel: null
  });
  const options = ["option1", "option2", "option3"];
  return (
    <div className="my-2">
      <h1 className="my-2 text-sm text-grey ">Créer un nouveau {agent}</h1>
      <div className="flex items-center justify-center  gap-8">
        <CustomInput
          label="Nom"
          options={options}
          steFunction={setData}
          attr="nom"
          data={data}
          type="text"
          size="small"
        />
        <CustomInput
          label="Prénom"
          options={options}
          steFunction={setData}
          attr="prenom"
          data={data}
          type="text"
          size="small"
        />
        <CustomInput
          label="Email"
          options={options}
          steFunction={setData}
          attr="mail"
          data={data}
          type="email"
          size="small"
        />
        <CustomInput
          label="Numéro de télphone"
          options={options}
          steFunction={setData}
          attr="numTel"
          data={data}
          type="number"
          size="small"
        />
        <button className="btn-green px-11 py-2.5 light-grey">Ajouter</button>
      </div>
    </div>
  );
};

export default ListForm;
