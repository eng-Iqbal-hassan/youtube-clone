export const API_KEY = "AIzaSyDf2yEcHNeEOHHkwASTFtdbFPbtaP0sxTY";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  }
  if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
