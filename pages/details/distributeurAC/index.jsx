import Image from "next/image";
import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import AffectationCard from "@/components/details/AffectationCard";
import InfoCard from "@/components/details/InfoCard";
import BoissonCard from "@/components/details/BoissonCard";

const distributeurAC = () => {
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
          Liste de toutes les boissons que le distributeur peut préparer{" "}
        </div>

        <div className="grid grid-cols-3 gap-16">
          <BoissonCard/>
          <BoissonCard/>
          <BoissonCard/>
          <BoissonCard/>
          <BoissonCard/>
          <BoissonCard/>
          <BoissonCard/>
        </div>
      </div>
    </div>
  );
};

export default distributeurAC;
