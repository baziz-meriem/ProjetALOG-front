import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ListRow = ({ data, numColumns, toAdd ,onButtonClick}) => {

  const router = useRouter();
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
      onClick={() => {//router.push(router.pathname + "/" + data.id)
     
    }
    }
      
    >

      <div
        className={`grid grid-cols-${numColumns} gap-4 text-sm capitalize text-${Color}`}
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
        {values.map((value, index) => (
          <div key={index}>
            {" "}
            
            {
              <div className="flex items-center justify-center  ">
                
                {value}
               
              </div>}
            

          </div>
          
        ))}
      </div>
    </div>
  );
};


export default ListRow;
