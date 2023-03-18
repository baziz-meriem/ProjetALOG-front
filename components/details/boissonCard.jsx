import Image from "next/image";

const boissonCard = () => {
  return (
    <div className="p-6 mt-6 bg-white drop-shadow-md shadow-all rounded-lg relative">
    <Image
      src="/icons/available.svg"
      width={95}
      height="95"
      alt="available"
      className="absolute top-3 right-3"
    ></Image>
    <div className="relative">
        <Image
          src="/icons/coffee.svg"
          width={150}
          height="150"
          alt="coffee"
          className="mx-auto mt-4"
        ></Image>
          <Image
          src="/icons/download.svg"
          width={20}
          height="20"
          alt="download"
          className="absolute top-0 left-8"
        ></Image>
    </div>

    <div className="flex justify-center gap-6">
      <h1 className="text-lg">Coffee</h1>
      <Image
        src="/icons/edit.svg"
        width={20}
        height="20"
        alt="edit"
      ></Image>
    </div>

    <div className="flex justify-center gap-6 mb-8">
      <h1 className="text-lg ">50 DA</h1>
      <Image
        src="/icons/edit.svg"
        width={20}
        height="20"
        alt="edit"
      ></Image>
    </div>

    <div className="flex justify-center items-center gap-6 absolute bottom-3 right-3">
      <h1 className="text-lg text-light-green">Add to Service</h1>
      <Image
        src="/icons/AddIcon-green.svg"
        width={40}
        height="40"
        alt="add"
      ></Image>
    </div>
  </div>
  );
};
export default boissonCard;
