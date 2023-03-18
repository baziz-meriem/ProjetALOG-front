import CustomSelect from "@/components/loginPage/CustomSelect";
import PageHeader from "@/components/shared/PageHeader";
import React, { useState } from "react";

const AddDistributeur = () => {
  const [data, setData] = useState({
    client: null,
    type: null,
    agentAM: null,
    etat: null,
    region: null,
    postion: null,
  });
  const options = ["option1", "option2", "option3"];

  const submitData = () => {
    console.log(data);
  };
  return (
    <div className="">
      <PageHeader
        title="Ajouter un distributeur"
        description="Donner les informations générales du distributeur"
      />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomSelect
              label="Client"
              options={options}
              steFunction={setData}
              attr="client"
              data={data}
            />
            <CustomSelect
              label="Type"
              options={options}
              steFunction={setData}
              attr="type"
              data={data}
            />
            <CustomSelect
              label="Position"
              options={options}
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
              options={options}
              steFunction={setData}
              attr="agentAM"
              data={data}
            />
            <CustomSelect
              label="Etat"
              options={options}
              steFunction={setData}
              attr="etat"
              data={data}
            />
            <CustomSelect
              label="Région"
              options={options}
              steFunction={setData}
              attr="region"
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
