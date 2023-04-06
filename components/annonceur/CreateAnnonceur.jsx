import CustomInput from "@/components/loginPage/CustomInput";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const CreateAnnonceur = () => {
  const router = useRouter();

  const [data, setData] = useState({
    nom: "true",
    idClient: 1,
  });
  const handleSubmit = () => {
    console.log(data);
    axios
      .post("https://sitandlipapi.onrender.com/api/v1/annonce/annonceur", data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log("annonceur inserted");
          toast.success("annonceur Created Succesfully!");
          router.push("/listes/Annonceur");
        } else {
          toast.error("Some errors occured!");
        }
      });
  };
  return (
    <div className="">
      <ToastContainer />

      <div className="h-full w-full relative overflow-y-hidden flex flex-row justify-end gap-4">
        <div className="space-y-10 mt-5">
          <CustomInput
            label="Nom"
            steFunction={setData}
            attr="nom"
            data={data}
            type="text"
          />
        </div>
        <div>
          <button
            className="btn-border-green px-11 py-2.5 mt-5 light-grey"
            onClick={() => {
              handleSubmit();
            }}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnonceur;
