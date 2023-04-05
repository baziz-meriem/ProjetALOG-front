import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import Link from "next/link";
import { useState } from "react";
const ListAM = ({AM}) => {
    let [Tablehead, setTableHead] = useState(
        AM.data.length > 0
          ? Object.keys(AM.data[0]).slice(1)
          : null
      );
    
      if (!AM) return <div>Loding...</div>;
  return (
    <div>
      <div className="flex-none">
        <PageHeader
          title="Liste des AMs"
          description="Affiche la liste de tous les AMs ainsi que leurs informations."
        />
      </div>
      <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
        <ListHeader title="Clients" />
        {AM.data.length > 0 ? (
          <>
            <ListRow
              key={Tablehead[0]}
              data={Tablehead}
              numColumns="5"
              toAdd=""
            />
            {AM.data.map((rowData) => (
              <Link href={`/listes/AM/${rowData.id}`}>
                <ListRow
                  key={rowData.id}
                  data={rowData}
                  numColumns="5"
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

export default ListAM;

export async function getServerSideProps() {
    const data = await fetch(
      "https://sitandlipapi.onrender.com/api/v1/profileManagement/AM"
    );
    const AM = await data.json();
    return { props: { AM } };
  }
