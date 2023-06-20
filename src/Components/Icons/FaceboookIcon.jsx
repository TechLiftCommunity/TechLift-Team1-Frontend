const FacebookIcon = ({ size, color, className, ...props }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19.1379" cy="19.1379" r="19.1379" fill="white"/>
        <path d="M20.475 27.7473V19.9046H23.1208L23.5141 16.8339H20.475V14.878C20.475 13.9919 20.7218 13.3852 21.9936 13.3852H23.605V10.6476C22.8209 10.5635 22.0328 10.523 21.2443 10.526C18.9057 10.526 17.3 11.9537 17.3 14.5747V16.8282H14.6714V19.8988H17.3057V27.7473H20.475Z" fill="#3E5693"/>
        </svg>
        
    );
  };
  FacebookIcon.defaultProps = {
    size: 52,
    color: "currentColor",
  };
  export default FacebookIcon;
  