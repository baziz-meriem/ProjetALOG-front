import Image from "next/image";

const infoCard = ({ title }) => {
  return (
    <div className="flex-auto  p-6 mt-6 shadow-all rounded-lg bg-transparent">
      <div className="flex justify-between mb-4">
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
      <div className="w-full flex justify-between items-center">
        <div className="flex-grow  mr-20">
          <div className="border-b p-2  border-solid border-grey">
            <input
              type="text"
              className="w-full pl-2 pr-4 bg-transparent placeholder-gray-300 focus:outline-none"
              placeholder="Chercher..."
            />
          </div>

          <div className="border-b p-2 mt-2 border-solid border-grey">
            <input
              type="text"
              className="w-full pl-2 pr-4 bg-transparent placeholder-gray-300 focus:outline-none"
              placeholder="Chercher..."
            />
          </div>
        </div>

        <div className="flex-grow ml-20">
          <div className="border-b p-2 border-solid border-grey">
            <input
              type="text"
              className="w-full  pl-2 pr-4 bg-transparent placeholder-gray-300 focus:outline-none"
              placeholder="Chercher..."
            />
          </div>
          <div className="border-b p-2 mt-2 border-solid border-grey">
            <input
              type="text"
              className="w-full  pl-2 pr-4 bg-transparent placeholder-gray-300 focus:outline-none"
              placeholder="Chercher..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          class="btn-green px-11 py-2.5 mt-6 light-grey"
          onClick={() => {
            handleSubmit();
          }}
        >
          Modifier
        </button>
      </div>
    </div>
  );
};
export default infoCard;
