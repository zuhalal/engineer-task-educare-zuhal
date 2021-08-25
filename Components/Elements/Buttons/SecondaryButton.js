import React from "react";

function SecondaryButton({ children, onClick, additionalStyle, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 border-2 border-white bg-white hover:border-blueGoogle hover:bg-blueGoogle shadow-md rounded-md text-blueGoogle hover:text-white flex gap-2 items-center ${additionalStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
