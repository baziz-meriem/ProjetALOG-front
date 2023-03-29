import { React, useState, useEffect, useRef } from "react";
import PageHeader from "@/components/shared/PageHeader";
import ListHeader from "@/components/lists/ListHeader";
import ListRow from "@/components/lists/ListRow";
import Popup from "@/components/lists/Popup";

const Reclamations = () => {
  const Data = [
    { id: 1, idPayement: 1, date: "28/03/23/2023", description: "lorem " },
    { id: 1, idPayement: 2, date: "28/03/23/2023", description: "lorem" },
    {
      id: 1,
      idPayement: 3,
      date: "28/03/23/2023",
      description:
        "olor lorem ipsum sum  dolor lorem ipsum dolororsum  dolor lorem ipsum dolororsum  dolor lorem ipsum dolororsum  dolor lorem ipsum dolororsum  dolor lorem ipsum doloror",
    },
    {
      id: 1,
      idPayement: 4,
      date: "28/03/23/2023",
      description:
        "lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsum psum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsum psum dolor lorem ipsumlorem ipsum dolor lorem ipsumlorem ipsum dolor lorem ipsum ",
    },
    {
      id: 1,
      idPayement: 6,
      date: "28/03/23/2023",
      description: "orem ipsum dolor lorem ipsum dolor ",
    },
    {
      id: 1,
      idPayement: 7,
      date: "28/03/23/2023",
      description: "lorem ipsum dolor lorem ipsum dolor lorem ",
    },
    {
      id: 1,
      idPayement: 8,
      date: "28/03/23/2023",
      description: "lorem ipsum  dolor lorem ipsum doloror lorem  ",
    },
  ];
  const Tablehead = Object.keys(Data[0]).slice(1);

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col min-h-full">
      {showPopup && <Popup closePopup={handleClosePopup} />}
      <div className="flex-none">
        <PageHeader
          title="Liste des Réclamations"
          description="Affiche la liste de toutes les Réclamations reçues."
        />
      </div>
      <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
        <ListHeader title="Réclamations" />
        <ListRow key={Tablehead[0]} data={Tablehead} numColumns="4" toAdd="" />
        {Data.map((rowData) => (
          <ListRow
            key={rowData.id}
            data={rowData}
            numColumns="4"
            toAdd="response"
            onButtonClick={handleOpenPopup}
          />
        ))}
      </div>
    </div>
  );
};

export default Reclamations;
