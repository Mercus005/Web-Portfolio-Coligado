const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Web-Portfolio-Coligado/"
    : "";
};

export { getImagePrefix };
