import CustomSelect from "@/components/loginPage/CustomSelect";
import PageHeader from "@/components/shared/PageHeader";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CustomInput from "@/components/loginPage/CustomInput";
import { useRouter } from "next/router";

const AddDistributeur = ({ clients, AMs, regions }) => {
  const router = useRouter();
  const [data, setData] = useState({
    idClient: null,
    type: null,
    idAM: null,
    etat: null,
    idRegion: null,
    position: null,
    codeDeverouillage: null,
  });

  const DistributeurTypes = [
    { id: "type1", nom: "Type 1" },
    { id: "type2", nom: "Type 2" },
  ];
  const etat = [
    { id: "up", nom: "Up" },
    { id: "down", nom: "Down" },
  ];
  const position = [
    { id: "position1", nom: "position 1" },
    { id: "position2", nom: "position 2" },
  ];
  const region = [1, 2];

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
          router.push("/listes/Distributeurs/AC");
        } else {
          toast.error("Some errors occured!");
        }
      });
  };

  return (
    <div className="">
      <ToastContainer />
      <PageHeader
        title="Ajouter un distributeur"
        description="Donner les informations générales du distributeur"
      />
      <div className="h-full w-full relative overflow-y-hidden flex flex-row">
        <div className="w-1/2 m-4">
          <div className="space-y-10 mt-16">
            <CustomSelect
              label="Client"
              options={clients}
              steFunction={setData}
              attr="idClient"
              data={data}
            />
            <CustomSelect
              label="Type"
              options={DistributeurTypes}
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
              options={AMs}
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
              options={regions}
              steFunction={setData}
              attr="idRegion"
              data={data}
            />
            <CustomInput
              label="code de Deverouillage"
              options={clients}
              steFunction={setData}
              attr="codeDeverouillage"
              data={data}
              type="text"
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

export async function getServerSideProps() {
  // Get the clients
  let clients = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/profileManagement/client"
  );
  clients = await clients.json();

  // get the AMs
  let AMs = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/profileManagement/am"
  );
  AMs = await AMs.json();

  // Get all the regions
  let regions = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/resourceManagement/region"
  );
  regions = await regions.json();
  console.log(regions);
  return {
    props: { clients: clients.data, AMs: AMs.data, regions: regions.data },
  };
}
