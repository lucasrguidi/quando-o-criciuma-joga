import slugify from "slugify";
import logosData from "../../logos.json";

const useLogoSrc = () => (team) => {
  return logosData[slugify(team, { lower: true })];
};

export default useLogoSrc;
