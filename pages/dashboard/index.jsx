import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/dashboard/Card";
import React from "react";

const Dashboard = ({ nbDistributeur, nbClient }) => {
  return (
    <div className="h-4/6 w-full">
      <PageHeader title="Dashboard" description="Welcome, Ouael!" />
      <div className="grid grid-cols-3 gap-x-4 w-full ">
        <Card
          title="Nombre de Distributeurs"
          stats={nbDistributeur}
          link="/listes/Distributeurs/AC"
          addLink="/AddDistributeur"
        />
        <Card
          title="Nombre de Clients"
          stats={nbClient}
          color="creem-green"
          link="/listes/Clients"
          addLink="/createAgent/createClient"
        />
        <Card
          title="Nombre de Distributeurs"
          stats={nbDistributeur}
          link="/createAgent/createADM"
          addLink="/createAgent/createADM"
        />
      </div>
      <div className=" flex flex-row gap-x-6 w-full h-full  ">
        <div className=" w-1/2 h-full">
          <div className="p-3 m-2 h-1/2 w-full bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg "></div>
          <div className="p-3 m-2 h-1/2 w-full  bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg "></div>
        </div>
        <div className="p-4 m-2 bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg w-1/2 h-full"></div>
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  let distributeur = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur"
  );
  distributeur = await distributeur.json();

  let clients = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/profileManagement/client"
  );
  clients = await clients.json();

  return {
    props: {
      nbDistributeur: distributeur.data.length,
      nbClient: clients.data.length,
    },
  };
}
