import { Link } from "react-router-dom";

const Button = ({ to, children, size = "md", variant = "full", className = "", ...rest }) => {
  const getSize = (size) => {
    switch (size) {
      case "xs":
        return "px-[40px] h-10";
      case "sm":
        return "px-2 h-10";
      case "md":
        return "px-[50px] h-14";
      case "lg":
        return "px-[80px] h-14";

      default:
        return "p-1 h-10";
    }
  };
  const Button = () => (
    <button
      className={`${getSize(size)} ${
        variant === "full"
          ? "bg-fcPrimary text-white max-w-[800px]"
          : "border-1 bg-white text-primary-100"
      } ${className}  rounded-[4px] px-5 py-2 font-SpaceGrotesk font-medium text-xl`}
      {...rest}
    >
      {children}
    </button>
  );

  if (to !== undefined)
    return (
      <Link to={to}>
        <Button />
      </Link>
    );

  return <Button />;
};

export default Button;


export function SecondaryButton({ className, onClick, type, children }){
    return (
        <div>
        <button className={className} onClick={onClick} type={type}>
          {children}
        </button>
      </div>
    )
  }