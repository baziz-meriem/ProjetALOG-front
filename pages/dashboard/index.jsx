import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/dashboard/Card";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-4/6 w-full">
      <PageHeader title="Dashboard" description="Welcome, Ouael!" />
      <div className="grid grid-cols-3 gap-x-4 w-full ">
        <Card
          title="Nombre de Distributeurs"
          stats="1"
          link="/AddDistributeur"
        />
        <Card
          title="Nombre de Clients"
          stats="5"
          color="creem-green"
          link="/createAgent/createClient"
        />
        <Card
          title="Nombre de Distributeurs"
          stats="1"
          link="/createAgent/createADM"
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
