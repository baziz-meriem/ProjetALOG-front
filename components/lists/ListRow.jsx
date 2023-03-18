import React from "react";
import Image from "next/image";


const ListRow = ({data,numColumns}) => {
    const values = Object.values(data).slice(1);//removes the id
  return (
    <div className="border-b-2 p-2 mt-6 border-solid border-gray-300">
        <div className={`grid grid-cols-${numColumns} gap-4 text-sm capitalize text-black`} style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}>
        {values.map((value, index) => (
          <div key={index}> {/* to dispaly icon if its the last item*/ } 
          {index === values.length - 1 ? (
            <div className="flex items-center justify-center gap-2">
              <div className="text-darker-green">value</div>
              <Image src="/icons/add.svg" width={22} height="22" alt="add icon" />
            </div>
          ) : (
            value //displayed for the other columns
          )}
        </div>
        ))}

        </div>
    </div>
  );
};

export default ListRow;
