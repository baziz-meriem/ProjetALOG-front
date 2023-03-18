import Image from "next/image";
import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import affectationCard from "@/components/details/affectationCard";
import infoCard from "@/components/details/infoCard";
import boissonCard from "@/components/details/boissonCard";

const distributeurAC = () => {
  return (
    <div>
      <PageHeader
        title="Distributeur Details"
        description="Affiche les informations détaillées du distributeur"
      />
      <infoCard title="Distributeur Infos" />
      <affectationCard title="AM du distributeur" />
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
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
          <boissonCard/>
        </div>
      </div>
    </div>
  );
};

export default distributeurAC;
