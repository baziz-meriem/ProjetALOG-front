import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const DistributeurInfoCard = ({ title, id }) => {
  useEffect(() => {
    if (!distributeurData) {
      axios
        .get(
          `https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur/${id}`
        )
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  });

  const handleChange = (e) => {
    setData({ ...distributeurData, [e.target.name]: e.target.value });
  };

  const updateClient = () => {
    axios
      .put(
        `https://sitandlipapi.onrender.com/api/v1/resourceManagement/distributeur/${id}`,
        {
          etat: distributeurData.etat,
          type: distributeurData.type,
          position: distributeurData.position,
          codeDeverouillage: distributeurData.codeDeverouillage,
          idClient: distributeurData.idClient,
          idRegion: distributeurData.idRegion,
          idAM: distributeurData.idAM,
        }
      )
      .then((res) => {
        toast.success("Le Distributeur a été modifié");
      })
      .catch((err) => console.log(err));
  };

  const [distributeurData, setData] = useState(null);

  if (!distributeurData) return <div>Loding..</div>;
  return (
    <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
      <ToastContainer />
      <div className="flex  justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/icons/user-black.svg"
            width={30}
            height="30"
            alt="user icon"
          ></Image>
          <div className="text-xl font-medium tracking-1">{title}</div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center">
        <div className="w-1/3 mx-10 border-b p-2  border-solid border-grey">
          <input
            type="text"
            className="w-full px-0 bg-transparent placeholder-gray-300 focus:outline-none"
            placeholder="type"
            value={distributeurData.type}
            onChange={(e) => handleChange(e)}
            name="type"
          />
        </div>
        <div className="w-1/3 mx-10 border-b p-2 mt-2 border-solid border-grey">
          <input
            type="text"
            className="w-full px-0 bg-transparent placeholder-gray-300 focus:outline-none"
            placeholder="Chercher..."
            value={distributeurData.etat}
            onChange={(e) => handleChange(e)}
            name="etat"
          />
        </div>
        <div className="w-1/3 mx-10 border-b p-2 mt-2 border-solid border-grey">
          <input
            type="text"
            className="w-full px-0 bg-transparent placeholder-gray-300 focus:outline-none"
            placeholder="Chercher..."
            value={distributeurData.position}
            onChange={(e) => handleChange(e)}
            name="position"
          />
        </div>
        <div className="w-1/3 mx-10 border-b p-2 mt-2 border-solid border-grey">
          <input
            type="text"
            className="w-full px-0 bg-transparent placeholder-gray-300 focus:outline-none"
            placeholder="Chercher..."
            value={distributeurData.codeDeverouillage}
            onChange={(e) => handleChange(e)}
            name="codeDeverouillage"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          class="btn-green px-11 py-2.5 mt-6 light-grey relative"
          onClick={() => updateClient()}
        >
          Modifier
        </button>
      </div>
    </div>
  );
};
export default DistributeurInfoCard;
