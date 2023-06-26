import React from "react";

const Dropdown = ({ show, children, className }) => {
  if (!show) return null;

  return (
    <div className={className}>
      <div className="shadow-lg rounded-md p-4 ">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dropdown;
