import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import PageHeader from "@/components/shared/PageHeader";
import AffectationCard from "@/components/details/affectationCard";
import InfoCard from "@/components/details/infoCard";
import BoissonCard from "@/components/details/boissonCard";
import MapOverlay from "@/components/dashboard/MapOverlay";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import { getBoissons } from "@/services/boisson";

const Map = dynamic(() => import('@/components/dashboard/Map'), { ssr: false });


const DistributeursAC = () => {
  const [data, setData] = useState([])
  const [showDetails, setshowDetails] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "m" && !showDetails) {
        setshowDetails(true);
      } else if (event.key === "Escape" && showDetails) {
        setshowDetails(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showDetails]);
  //get all drinks
  useEffect(() => {
    const { id } = router.query;
    const getAllBoissons = async () => {
    const { data } = await getBoissons(id)
    setData(data.data)
    }
     getAllBoissons()
  }, [])



  return (
    <div>

      <PageHeader
        title="Distributeur Details"
        description="Affiche les informations détaillées du distributeur"
      />
      <InfoCard title="Distributeur Infos" />
      <div className="flex gap-4 h-40">
        <AffectationCard title="AM du distributeur" />
        <div className=" w-1/2  mt-6 shadow-all rounded-lg bg-transparent overflow-hidden">
          {showDetails ? (<MapOverlay />) : (<Map />)}
        </div>
      </div>
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
          {data.length>0 && data.map((rowData) => (
            <BoissonCard key={rowData.id} data={rowData} numColumns="6" toAdd="ADMs" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributeursAC;
