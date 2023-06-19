const GrowthIcon = ({ size, color, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="43.5" cy="43.5" r="43.5" fill="#E7EAF1" />
      <circle cx="44" cy="44" r="19" fill="#3E5693" />
    </svg>
  );
};
GrowthIcon.defaultProps = {
  size: 52,
  color: "currentColor",
};
export default GrowthIcon;
