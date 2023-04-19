// React imports
import React, { useState, useRef, useEffect } from "react";

// Next.js imports
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Component imports
import PageHeader from "@/components/shared/PageHeader";
import AffectationCard from "@/components/details/affectationCard";
import BoissonCard from "@/components/details/boissonCard";
import MapOverlay from "@/components/dashboard/MapOverlay";
import DistributeurInfoCard from "@/components/details/DistributeurInfoCard";

// Service imports
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { getBoissons } from "@/services/boisson";

const Map = dynamic(() => import("@/components/dashboard/Map"), { ssr: false });

const DistributeursAC = () => {
  // State and router hooks
  const [boissonData, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [showDetails, setshowDetails] = useState(false);

  // Effect to handle keydown events
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

  // get all drinks
  useEffect(() => {
    const getAllBoissons = async () => {
      const { data } = await getBoissons(id);
      setData(data.data);
    };
    !boissonData && id && getAllBoissons();
  }, [id]);

  // Function to delete a distributor by ID
  const deleteDistributeur = () => {
    axios
      .delete(
        `https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur/${id}`
      )
      .then((res) => {
        router.push("/listes/Distributeurs/AC");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <ToastContainer />
      <PageHeader
        title="Distributeur Details"
        description="Affiche les informations détaillées du distributeur"
      />
      <button
        className="block ml-auto  btn-red px-7 py-2.5 mt-6 light-grey relative"
        onClick={() => deleteDistributeur()}
      >
        Supprimer le distributeur
      </button>
      <DistributeurInfoCard title="Distributeur Infos" id={id} />
      <div className="flex gap-4 h-40">
        <AffectationCard title="AM du distributeur" />
        <div className=" w-1/2  mt-6 shadow-all rounded-lg bg-transparent overflow-hidden">
          {showDetails ? <MapOverlay /> : <Map />}
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
          <div className="text-xl font-medium flex justify-between w-full">
            <div>Les Boissons</div>
            <div>
              <button className="btn-green block ml-auto text-sm">
                Ajouter un Boisson
              </button>
            </div>
          </div>
        </div>
        <div className="text-gray-500 mt-1">
          Liste de toutes les boissons que le distributeur peut préparer
        </div>

        <div className="grid grid-cols-3 gap-16">
          {boissonData &&
            boissonData.map((rowData) => (
              <BoissonCard
                key={rowData.id}
                data={rowData}
                numColumns="6"
                toAdd="ADMs"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DistributeursAC;
