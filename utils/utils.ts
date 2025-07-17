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

const getPdfPrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Web-Portfolio-Coligado/"
    : "";
};

export { getImagePrefix, getIconPrefix, getPdfPrefix };
