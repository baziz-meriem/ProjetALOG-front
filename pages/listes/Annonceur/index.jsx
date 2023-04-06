import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import CreateAnnonceur from "@/components/annonceur/CreateAnnonceur";

const ListAnnonceur = ({ annonceurs }) => {
  const router = useRouter();
  const [formIsOpen, setOpen] = useState(false);
  let [Tablehead, setTableHead] = useState(
    annonceurs.data.length > 0 ? Object.keys(annonceurs.data[0]).slice(1) : null
  );

  if (!annonceurs) return <div>Loding...</div>;
  return (
    <div>
      <div className="flex-none">
        <PageHeader
          title="Liste des annonceurss"
          description="Affiche la liste de tous les annonceurss ainsi que leurs informations."
        />
      </div>
      <button
        className="block ml-auto  btn-green px-7 py-2.5 mt-6 light-grey relative"
        onClick={() => setOpen(!formIsOpen)}
      >
        Ajouter un annonceur
      </button>
      {formIsOpen ? <CreateAnnonceur /> : <></>}
      <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
        <ListHeader title="Clients" />
        {annonceurs.data.length > 0 ? (
          <>
            <ListRow
              key={Tablehead[0]}
              data={Tablehead}
              numColumns="2"
              toAdd=""
            />
            {annonceurs.data.map((rowData) => (
              <Link href={`/listes/Annonceur/${rowData.id}`}>
                <ListRow key={rowData.id} data={rowData} numColumns="2" />
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

export default ListAnnonceur;

export async function getServerSideProps() {
  const data = await fetch(
    "https://sitandlipapi.onrender.com/api/v1/annonce/annonceur"
  );
  const annonceurs = await data.json();
  return { props: { annonceurs } };
}
