import slugify from "slugify";
import stadiumsData from "../../stadiums.json";

const useStadiumName = () => (team) => {
  return stadiumsData[slugify(team, { lower: true })];
};

export default useStadiumName;
