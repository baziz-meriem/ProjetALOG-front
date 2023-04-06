import React, { useState } from "react";
import Image from "next/image";
import ListForm from "@/components/lists/ListForm";
import Link from "next/link";
import { useRouter } from "next/router";

<<<<<<< HEAD
const ListRow = ({ data, numColumns, toAdd ,onButtonClick}) => {
=======
const ListRow = ({ data, numColumns, toAdd }) => {
  const router = useRouter();

>>>>>>> 86b00935b11affd9a23973711f9678c0dca564f9
  let values;
  let Color;
  let showIcon ;
  let showButton ;


  if (Array.isArray(data)) {
    values = data;
    Color = "darker-green";
    showIcon = false;
  } else if(toAdd=="response") {
    showIcon = false
    values = Object.values(data).slice(1);
    showButton = true
  }
  else{
    values = Object.values(data).slice(1); // removes the id
    Color = "black";
    showIcon = true;
  }
  const [showForm, setShowForm] = useState(false); //to show form on icon click

  const handleClick = () => {
    setShowForm(!showForm);
  };
// to show the description for reclamations
  const [showOverflow, setShowOverflow] = useState(false);
  return (
    <div
      className={`border-b-2 p-4 mt-4 border-solid border-${Color} hover:bg-green-500 hover:ml-3 hover:border-l-2 hover:border-l-green-600 hover:bg-opacity-5`}
      onClick={() => router.push(router.pathname + "/" + data.id)}
    >
      <div
        className={`grid grid-cols-${numColumns} gap-4 text-sm capitalize text-${Color}`}
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
        {values.map((value, index) => (
          <div key={index}>
            {" "}
            
            {index === values.length - 1 && showIcon ? (
              <div className="flex items-center justify-center  ">
                
                {value}
               
                <div
                  className="flex items-center justify-end gap-4 flex-1 cursor-pointer"
                  style={{ zIndex: 1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
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
              <div className="relative">

                <div className="relative max-h-10 overflow-hidden">
                {value}
                {toAdd=="response" && index==2 ? (   <Image //only display this icon if its the reclation list and its the description collumn
                   src="/icons/showMore.svg"
                   width={18}
                   height="18"
                   alt="voir plus"
                   className="absolute bottom-0 right-0"
                   onClick={() => setShowOverflow(!showOverflow)}
                 />):(null)}

                </div> 
                {toAdd=="response" && index==2 && showOverflow ? (
                    <div style={{ zIndex: 2 }}  className="absolute p-4 mt-3 rounded-md  bg-cream-grey overflow-y-scroll w-full max-h-64">
                      {value}
                    </div>
                  ) : null} 
              </div>
            )}
            

          </div>
          
        ))}
<<<<<<< HEAD
            { showButton ?(
              <div className="flex items-center justify-center">
              
              <button
              className=" btn-green px-11 py-2.5 light-grey"
              style={{ zIndex: 1 }} 
              onClick={onButtonClick}>
              Répondre
            </button>
            </div>
            ):null}
        </div>
        <div className={`${showForm ? '' : 'hidden'}`}>
            <ListForm agent={toAdd} />
        </div>
=======
      </div>
      <div className={`${showForm ? "" : "hidden"}`}>
        <ListForm agent={toAdd} />
      </div>
>>>>>>> 86b00935b11affd9a23973711f9678c0dca564f9
    </div>
  );
};


export default ListRow;
