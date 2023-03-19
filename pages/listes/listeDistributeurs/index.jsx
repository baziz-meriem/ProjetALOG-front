import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const ListeDistributeur = () => {
  useEffect(() => {
    if (!Data) {
      axios
        .get(
          "https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur"
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "success") {
            setData(res.data.data);
          }
        });
    }
  });

  const [Data, setData] = useState(null);
  const Tablehead =
    Data && data.length > 0 ? Object.keys(Data[0]).slice(1) : null;

  if (!Data) return <div>Loding...</div>;
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-none">
        <PageHeader
          title="Liste des Distributeurs"
          description="Affiche la liste de tous les Distributeurs ainsi que leurs informations."
        />
      </div>
      <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
        <ListHeader title="Clients" />
        {Data.length > 0 ? (
          <>
            {" "}
            <ListRow
              key={Tablehead[0]}
              data={Tablehead}
              numColumns="3"
              toAdd=""
            />
            {Data.map((rowData) => (
              <ListRow
                key={rowData.id}
                data={rowData}
                numColumns="3"
                toAdd="ADMs"
              />
            ))}
          </>
        ) : (
          <div className="text-center py-20">There is No data yet</div>
        )}
      </div>
    </div>
  );
};

export default ListeDistributeur;
