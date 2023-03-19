import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";

const listeDistributeur = () => {
  const Data = [
    { id: 1, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 2, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 3, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 4, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 5, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 6, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 7, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    { id: 8, etat: "available",type:"boissons",position:"Alger",codeDeverouillage:"1234567",idClient:"1",idRegion:"2",idAM:"1" },
    
  ];
  const Tablehead = Object.keys(Data[0]).slice(1);
  
  return (
    <div className="flex flex-col min-h-full">
        <div className="flex-none">
            <PageHeader title="Liste des Clients" description="Affiche la liste de tous les clients ainsi que leurs informations." />
        </div>
        <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
            <ListHeader title="Distributeurs"/>
            <ListRow key={Tablehead[0]} data={Tablehead} numColumns="7" toAdd=""/>
            {Data.map((rowData) => (
           <ListRow key={rowData.id} data={rowData} numColumns="7" toAdd="AM"/>
          ))}

        </div>
    </div>

  );
};

export default listeDistributeur;
