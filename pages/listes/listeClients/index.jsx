import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";

const listeClients = () => {
  const Data = [
    { id: 1, client: "Djezzy", Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz",kda:"kda" },
    { id: 2, client: "Coca Cola",Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz" ,kda:"kda" },
    { id: 3, client: "Djezzy" ,Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz",kda:"kda" },
    { id: 4, client: "Hammoud",Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz",kda:"kda" },
    { id: 5, client: "Djezzy",Télephone:"+123456789",Role:"AC" ,Region:"Alger",Email:"kda@esi.dz",kda:"kda"},
    { id: 6, client: "Coca cola" ,Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz" ,kda:"kda"},
    { id: 7, client: "Djezzy",Télephone:"+123456789",Role:"AC" ,Region:"Alger",Email:"kda@esi.dz",kda:"kda"},
    { id: 8, client: "Coca cola" ,Télephone:"+123456789",Role:"AC",Region:"Alger",Email:"kda@esi.dz" ,kda:"kda"},
  ];

  return (
    <div className="flex flex-col min-h-full">
        <div className="flex-none">
            <PageHeader title="Liste des Clients" description="Affiche la liste de tous les clients ainsi que leurs informations." />
        </div>
        <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
            <ListHeader title="Clients"/>
            {Data.map((rowData) => (
           <ListRow key={rowData.id} data={rowData} numColumns="6"/>
          ))}

        </div>
    </div>

  );
};

export default listeClients;
