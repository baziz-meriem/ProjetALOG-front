import Image from "next/image";
import PropTypes from 'prop-types';
const Card = ({title,stats,color}) => {
    const cardColor= color == "creem-green"?"creem-green":"light-green"
  return (
    <div className={`p-4 m-2 bg-${cardColor} bg-opacity-100 drop-shadow-2xl shadow-all rounded-lg `}>
        <div className="flex justify-between">
              <Image
                src={cardColor === "creem-green" ? "/icons/User-green.svg" : "/icons/user.svg"}
                width={35}
                height="25"
                alt="user image"
                className=""
              ></Image>
                <Image
                src={cardColor === "creem-green" ? "/icons/AddIcon-green.svg" : "/icons/AddIcon-white.svg"}
                width={30}
                height="20"
                alt="user image"
                className=""
              ></Image>
        </div>
        <h1 className={`text-${cardColor === 'creem-green' ? 'light-green' : 'white'} tracking-wide text-sm mb-2`}>{title}</h1>

        <div className="flex justify-between">
               <Image
                src={cardColor === "creem-green" ? "/images/stats1.png" : "/images/stats2.png"}
                width={60}
                height="30"
                alt="user image"
                className=""
              ></Image>
            <h1 className={`text-${cardColor === 'creem-green' ? 'light-green' : 'white'} tracking-wide text-2xl`}>{stats}</h1>
        </div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.number.isRequired,
    color: PropTypes.string,
  };
export default Card;
