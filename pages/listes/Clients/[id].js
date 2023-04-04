import { useEffect, useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import AffectationCard from "@/components/details/affectationCard";
import InfoCard from "@/components/details/infoCard";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import axios from "axios";
import { useRouter } from "next/router";

const Clients = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!Data) {
      axios
        .get("https://sitandlipapi.onrender.com/api/v1/profileManagement/client")
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "success") {
            setData(res.data.data);
          }
        });
    }
  });

  const [Data, setData] = useState(null);
  const Tablehead = Data ? Object.keys(Data[0]).slice(1) : null;
  if (!Data) return <div>Loding...</div>;
  return (
    <div>
      <PageHeader
        title="Client Details"
        description="Affiche les informations du Client"
      />
      <InfoCard title="Infos du Client" id={id} />
      <AffectationCard title="ADM du client" />
      <div className="p-10 mt-6 shadow-all rounded-lg bg-transparent">
        <ListHeader title="Clients" />
        <ListRow key={Tablehead[0]} data={Tablehead} numColumns="3" toAdd="" />
        {Data.map((rowData) => (
          <ListRow
            key={rowData.id}
            data={rowData}
            numColumns="3"
            toAdd="ADMs"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
