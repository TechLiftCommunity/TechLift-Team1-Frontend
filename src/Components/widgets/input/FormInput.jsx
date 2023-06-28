import React from "react";

const FormInput = ({
  id,
  label,
  errors,
  touched,
  required,
  size,
  optional,
  end,
  ...rest
}) => {
  return (
    <div className="mb-2 items-center justify-center group">
      <input
        className="form-control border-2 w-full h-12 pl-6 font-SpaceGrotesk text-[14px] text-[#808080] rounded-md items-center  justify-center outline-fcPrimary shadow-none
       border-fcGray4"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default FormInput;
