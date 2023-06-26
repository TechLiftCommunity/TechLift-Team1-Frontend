// import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

const FormTextArea = ({
  id,
  label,
  errors,
  touched,
  required,
  optional,
  size,
  placeholder,
  ...rest
}) => {
  const error = touched !== undefined && errors !== undefined;
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between font-SpaceGrotesk">
        {label !== undefined && (
          <label
            htmlFor={id}
            className={`block font-SpaceGrotesk  ${
              size === "sm" ? "text-[12px] font-SpaceGrotesk" : "text-lg font-SpaceGrotesk"
            } text-[#000000] font-SpaceGrotesk mb-[6px]`}
          >
            {label}
          </label>
        )}
        {optional && <small className="text-[#009D49] text-[10px]">Optional</small>}
        {required && <small className="text-red-700 text-[10px]">Required</small>}
      </div>

      <TextArea
        size={size}
        placeholder={placeholder}
        {...rest}
        className={`${error ? "border-red-700 text-red-700 placeholder:text-red-700" : ""} w-full`}
      />
      {errors && <p className="text-red-700 text-base ">{errors}</p>}
    </div>
  );
};

export default FormTextArea;
