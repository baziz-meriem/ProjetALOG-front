import React, { useState } from "react";
import Image from "next/image";
import ListForm from "@/components/lists/ListForm";

const ListRow = ({ data, numColumns, toAdd }) => {
  let values;
  let Color;
  let showIcon;

  if (Array.isArray(data)) {
    values = data;
    Color = "darker-green";
    showIcon = false;
  } else {
    values = Object.values(data).slice(1); // removes the id
    Color = "black";
    showIcon = true;
  }
  const [showForm, setShowForm] = useState(false); //to show form on icon click

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={`border-b-2 p-2 mt-6 border-solid border-${Color}`}>
      <div
        className={`grid grid-cols-${numColumns} gap-4 text-sm capitalize text-${Color}`}
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
        {values.map((value, index) => (
          <div key={index}>
            {" "}
            {/* to dispaly icon if its the last item*/}
            {index === values.length - 1 && showIcon ? (
              <div className="flex items-center justify-center ">
                {value}
                <div
                  className="flex items-center justify-end gap-4 flex-1 cursor-pointer"
                  style={{ zIndex: 1 }}
                  onClick={handleClick}
                >
                  <div className="text-darker-green">{toAdd}</div>
                  <Image
                    src="/icons/add.svg"
                    width={22}
                    height="22"
                    alt="add icon"
                  />
                </div>
              </div>
            ) : (
              value //displayed for the other columns
            )}
          </div>
        ))}
      </div>
      <div className={`${showForm ? "" : "hidden"}`}>
        <ListForm />
      </div>
    </div>
  );
};

export default ListRow;
