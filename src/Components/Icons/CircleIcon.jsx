const CircleIcon = ({ size, color, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="38"
        cy="38"
        r="33.6322"
        fill="#E7EAF1"
        stroke="#CFD5E4"
        stroke-width="8.73563"
      />
      <path
        d="M29.6516 51.4839C27.6084 51.4839 25.8546 50.9669 24.3904 49.9329C22.9345 48.8905 21.8136 47.3891 21.0277 45.4286C20.2501 43.4597 19.8613 41.0897 19.8613 38.3184C19.8696 35.5472 20.2625 33.1896 21.0401 31.2456C21.826 29.2933 22.9469 27.8042 24.4028 26.7785C25.867 25.7527 27.6166 25.2398 29.6516 25.2398C31.6867 25.2398 33.4363 25.7527 34.9005 26.7785C36.3647 27.8042 37.4856 29.2933 38.2632 31.2456C39.0491 33.1978 39.442 35.5555 39.442 38.3184C39.442 41.098 39.0491 43.4721 38.2632 45.441C37.4856 47.4015 36.3647 48.8988 34.9005 49.9329C33.4445 50.9669 31.6949 51.4839 29.6516 51.4839ZM29.6516 47.6001C31.2399 47.6001 32.4932 46.8183 33.4114 45.2548C34.3379 43.6831 34.8012 41.371 34.8012 38.3184C34.8012 36.3 34.5903 34.6041 34.1684 33.2309C33.7465 31.8577 33.1509 30.8237 32.3815 30.1288C31.6122 29.4256 30.7022 29.0741 29.6516 29.0741C28.0716 29.0741 26.8225 29.8599 25.9043 31.4317C24.986 32.9952 24.5228 35.2908 24.5145 38.3184C24.5062 40.3452 24.7089 42.0493 25.1225 43.4308C25.5444 44.8123 26.14 45.8546 26.9094 46.5577C27.6787 47.2526 28.5928 47.6001 29.6516 47.6001ZM53.9011 25.5873V51H49.2975V30.0667H49.1486L43.2049 33.8638V29.6449L49.5209 25.5873H53.9011Z"
        fill="#3E5693"
      />
    </svg>
  );
};
CircleIcon.defaultProps = {
  size: 52,
  color: "currentColor",
  className:"md:w-full w-[20px]"
};
export default CircleIcon;
