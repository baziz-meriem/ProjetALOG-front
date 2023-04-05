import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/dashboard/Card";
const gestionComptes = () => {
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
          stats="1"
          link="/listes/AC"
          addLink="/createAgent/createAC"
        />
        <Card
          title="Les Decideurs"
          color="creem-green"
          stats="1"
          link="/listes/DE"
          addLink="/createAgent/createDE"
        />
        <Card
          title="Nombre de maintenances"
          color="creem-green"
          stats="1"
          link="/listes/AM"
          addLink="/createAgent/createAM"
        />
      </div>
    </div>
  );
};

export default gestionComptes;
