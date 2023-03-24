import CustomSelect from "@/components/loginPage/CustomSelect";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddDistributeur = () => {
  const [data, setData] = useState({
    idClient: null,
    type: null,
    agentAM: null,
    etat: null,
    idRegion: null,
    postion: null,
  });
  const options = ["option1", "option2", "option3"];
  const client = [29, 28, 115, 21];
  const AM = [3, 4, 5, 6, 21];
  const Type = ["Type1", "type2"];
  const etat = ["Up", "Down"];
  const position = ["Type1", "type2"];
  const region = ["region 1", "Region 2"];

  const submitData = () => {
    console.log(data);
    axios
      .post(
        "https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur",
        data
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log("AM inserted");
          toast.success("Distributeur Created Succesfully!");
        } else {
          toast.error("Some errors occured!");
        }
      });
  };

  return (
    <div className="">
      <ToastContainer/>
      <PageHeader
        title="Ajouter un distributeur"
        description="Donner les informations générales du distributeur"
      />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomSelect
              label="Client"
              options={client}
              steFunction={setData}
              attr="idClient"
              data={data}
            />
            <CustomSelect
              label="Type"
              options={Type}
              steFunction={setData}
              attr="type"
              data={data}
            />
            <CustomSelect
              label="Position"
              options={position}
              steFunction={setData}
              attr="position"
              data={data}
            />
          </div>
        </div>

        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomSelect
              label="Agent de Maintenance"
              options={AM}
              steFunction={setData}
              attr="idAM"
              data={data}
            />
            <CustomSelect
              label="Etat"
              options={etat}
              steFunction={setData}
              attr="etat"
              data={data}
            />
            <CustomSelect
              label="Région"
              options={region}
              steFunction={setData}
              attr="idRegion"
              data={data}
            />
            <div className="flex justify-end">
              <button
                className="btn-green px-11 py-2.5 mt-4 light-grey"
                onClick={() => {
                  submitData();
                }}
              >
                Ajouter le Distributeur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDistributeur;
