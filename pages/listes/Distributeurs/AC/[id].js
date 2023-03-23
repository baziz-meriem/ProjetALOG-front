import Image from "next/image";
import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import AffectationCard from "@/components/details/AffectationCard";
import InfoCard from "@/components/details/InfoCard";
import BoissonCard from "@/components/details/BoissonCard";

const distributeurAC = () => {
  const Data = [
    { id: 1, label: "Latte Coffee", prix:"70",available:"true",image:"/icons/coffee.svg" },
    { id: 2, label: "Latte Coffee",prix:"70",available:"true",image:"/icons/coffee.svg"},
    { id: 3, label: "Latte Coffee" ,prix:"70",available:"false",image:"/icons/coffee.svg" },
    { id: 4, label: "Latte Coffee",prix:"70",available:"false",image:"/icons/coffee.svg" },
    { id: 5, label: "Latte Coffee",prix:"70",available:"true" ,image:"/icons/coffee.svg"},
    { id: 6, label: "Latte Coffee" ,prix:"70",available:"false",image:"/icons/coffee.svg"},
    { id: 7, label: "Latte Coffee",prix:"70",Role:"AC" ,Region:"true",image:"/icons/coffee.svg"},
    { id: 8, label: "Latte Coffee" ,prix:"70",available:"false",image:"/icons/coffee.svg"},
  ];
  return (
    <div>
      <PageHeader
        title="Distributeur Details"
        description="Affiche les informations détaillées du distributeur"
      />
      <InfoCard title="Distributeur Infos" />
      <AffectationCard title="AM du distributeur" />
      <div className="p-10 mt-6 shadow-all rounded-lg bg-transparent">
        <div className="flex items-center">
          <Image
            src="/icons/user-black.svg"
            width={30}
            height="30"
            alt="user icon"
          ></Image>
          <div className="text-xl font-medium ">Les Boissons</div>
        </div>
        <div className="text-gray-500 mt-1 text-grey">
          Liste de toutes les boissons que le distributeur peut préparer
        </div>

        <div className="grid grid-cols-3 gap-16">
        {Data.map((rowData) => (
           <BoissonCard key={rowData.id} data={rowData} numColumns="6" toAdd="ADMs"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default distributeurAC;
