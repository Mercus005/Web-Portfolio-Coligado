const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Web-Portfolio-Coligado/"
    : "";
};

const getIconPrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Web-Portfolio-Coligado/icons/"
    : "/icons/";
};

export { getImagePrefix, getIconPrefix };
