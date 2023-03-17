import React from "react";

const CustomInput = ({ label, type, steFunction, attr, data }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    steFunction({ ...data, [attr]: inputValue });
  };
  return (
    <div
      className={`w-full inline-flex justify-between rounded-xl border border-gray-300 shadow-all p-5 bg-transparent text-base  capitalize font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:ring-offset-2  `}
    >
      <input
        placeholder={label}
        className="bg-transparent w-full outline-none"
        type={type}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default CustomInput;
