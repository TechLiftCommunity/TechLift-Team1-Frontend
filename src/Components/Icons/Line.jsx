const Line = ({ size, color, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 84.1487L11.7735 74.1487H0.226497L6 84.1487ZM7 76.2597L7 71.0005H5L5 76.2597H7ZM7 65.7412L7 60.4819H5L5 65.7412H7ZM7 55.2226L7 49.9633H5L5 55.2226H7ZM7 44.704L7 39.4447H5L5 44.704H7ZM7 34.1854L7 28.9261H5L5 34.1854H7ZM7 23.6668L7 18.4075H5L5 23.6668H7ZM7 13.1482L7 7.88894H5L5 13.1482H7ZM7 2.62965L7 0H5L5 2.62965H7Z"
        fill="#3E5693"
      />
    </svg>
  );
};
Line.defaultProps = {
  size: 52,
  color: "currentColor",
};
export default Line;
