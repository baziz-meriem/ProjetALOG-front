import { useState } from "react";
import Image from "next/image";

function CustomSelect({ label, options, steFunction, attr, data }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    steFunction({ ...data, [attr]: option });
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOuterDivMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="" onMouseLeave={handleOuterDivMouseLeave}>
      <div className="text-left relative">
        <button
          type="button"
          className={`w-full inline-flex justify-between rounded-xl border border-gray-300 shadow-all p-5 bg-transparent text-base text-grey capitalize font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:ring-offset-2  `}
          aria-haspopup="true"
          aria-expanded="true"
          onClick={handleSelectClick}
        >
          {selectedOption !== null ? selectedOption : label}
          <Image
            src="/icons/arrow.svg"
            width={25}
            height="19"
            alt="arrow"
            className="mt-1 mr-2"
          ></Image>
        </button>
        {isOpen && (
          <div className="z-50 absolute left-0 right-0 mt-1 rounded-md shadow-all bg-white ring-1 ring-black ring-opacity-5 max-h-48 overflow-y-auto ">
            {options.map((option, index) => (
              <div key={index}>
                {index > 0 && <div className="border-t border-gray-300"></div>}
                <div
                  className={` w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${
                    selectedOption === option ? "bg-green-100" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomSelect;
