const TextArea = ({
  end,
  size = "md",
  className = "",
  label,
  errors,
  touched,
  emailError,
  register,
  ...props
}) => {
  const getSize = (size) => {
    switch (size) {
      case "sm":
        return "px-2 h-10";
      case "md":
        return "px-4 h-12";
      case "lg":
        return "px-8 h-24";

      default:
        return "p-1 h-10";
    }
  };

  return (
    <div className="relative">
      {/* <img
        className={`${
          size === "sm" && "max-w-[3px] top-[8px] left-[15px]"
        } object-contain absolute top-3 left-6`}
        src={VMSimages.input_bar}
        alt=""
      /> */}

      <textarea
        {...props}
        className={`${getSize(size)} ${className} ${
          size === "lg" && "pl-[20px]"
        } text-base bg-white font-SpaceGrotesk border-2 pt-2 border-fcGray4 rounded-[6px] focus:border-fcPrimary outline-none`}
      />
    </div>
  );
};

export default TextArea;
