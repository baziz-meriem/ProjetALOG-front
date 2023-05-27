import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/dashboard/Card";
const gestionComptes = ({nbAC}) => {
  return (
    <div>
      <PageHeader
        title="Gestion des Comptes"
        description="Some description here"
      />
      <div className="py-10 gap-6">
        <Card
          title="Les agents commericiaux"
          color="creem-green"
          stats={nbAC}
          link="/listes/AC"
          addLink="/createAgent/createAC"
        />
      </div>
    </div>
  );
};

export default gestionComptes;

export async function getServerSideProps() {

  let AC = await fetch(
    "http://localhost:8080/api/v1/profileManagement/ac"
  );
  AC = await AC.json();


  return {
    props: {
      nbAC: AC.data.length,
    },
  };
}
