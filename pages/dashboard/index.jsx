import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/dashboard/Card";
import BarChart from "@/components/dashboard/BarChart";
import LineChart from "@/components/dashboard/LineChart";
import dynamic from "next/dynamic";
const DashboradMap = dynamic(
  () => import("@/components/dashboard/DashbardMap"),
  { ssr: false }
);

const Dashboard = ({ distributeur, nbClient }) => {
  const data = {
    title: "",
    labels: ["January", "February", "March", "April", "May", "June"],
    values: [10, 20, 30, 25, 15, 5],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#48CAE4",
      "#ADFF2F",
      "#FF7F50",
    ],
  };
  return (
    <div className="h-5/6 w-full">
      <PageHeader title="Dashboard" description="Welcome, Ouael!" />
      <div className="grid grid-cols-3 gap-x-4 w-full ">
        <Card
          title="Nombre de Distributeurs"
          stats={distributeur.length}
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
          stats={distributeur.length}
          link="/createAgent/createADM"
          addLink="/createAgent/createADM"
        />
      </div>
      <div className=" flex flex-row gap-x-6 w-full h-full  ">
      <div className=" w-1/2 h-full">
          <div className="p-1 m-2 h-1/2 w-full  bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg ">
              <BarChart data={data} />
          </div>
          <div className="p-1 m-2 h-1/2 w-full  bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg ">
            <LineChart data={data} />
          </div>
        </div>
        <div className=" m-2 overflow-hidden bg-white bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg w-1/2 h-full">
          <DashboradMap distributeurs={distributeur} />
        </div>
        
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
      distributeur: distributeur.data,
      nbClient: clients.data.length,
    },
  };
}
