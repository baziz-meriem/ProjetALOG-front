import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Link from "next/link";

const ListeDistributeur = ({ distributeur }) => {
  let [Tablehead, setTableHead] = useState(
    distributeur.data.length > 0
      ? Object.keys(distributeur.data[0]).slice(1)
      : null
  );

  if (!distributeur) return <div>Loding...</div>;
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
        {distributeur.data.length > 0 ? (
          <>
            <ListRow
              key={Tablehead[0]}
              data={Tablehead}
              numColumns="6"
              toAdd=""
            />
            {distributeur.data.map((rowData) => (
              <Link href={`/listes/Distributeurs/AC/${rowData.id}`}>
                <ListRow
                  key={rowData.id}
                  data={rowData}
                  numColumns="6"
                  toAdd="ADMs"
                />
              </Link>
            ))}
          </>
        ) : (
          <div className="text-center py-20">There is No data yet</div>
        )}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const data = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur"
  );
  const distributeur = await data.json();
  return { props: { distributeur } };
}
export default ListeDistributeur;
