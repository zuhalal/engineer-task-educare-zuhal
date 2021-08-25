import React from "react";

function PrimaryButton({children, onClick, additionalStyle, ...props}) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 border-2 border-blueGoogle shadow-md text-white bg-blueGoogle rounded-md flex gap-2 items-center hover:bg-white hover:text-blueGoogle ${additionalStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
