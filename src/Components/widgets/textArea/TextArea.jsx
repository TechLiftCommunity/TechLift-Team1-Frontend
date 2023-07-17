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

// import { useState } from "react";
// const [formValue, setFormValue] = useState([
//   {
//     Name: "",
//     Email: ""
//   }
// ]);
// const inputsProperty = [
//   {
//     id: 1,
//     type: "text",
//     name: "Name",
//     placeHolder: "FirstName"
//   },
//   {
//     id: 2,
//     type: "email",
//     password: "oluwaseyi",
//     location: "Nigeria"
//   }
// ];
// const handleOnchange = (e) => {
//   setFormValue({ ...formValue, [e.target.name]: [e.target.value] });
// };
// export const signUp = () => {
//   return (
//     <div>
//       {inputsProperty.map((items) => {
//         return (
//           <input
//             key={items.id}
//             type={items.type}
//             name={items.name}
//             value={items.value}
//             placeholder={items.placeHolder}
//             onChange={handleOnchange}
//           />
//         );
//       })}
//     </div>
//   );
// };
