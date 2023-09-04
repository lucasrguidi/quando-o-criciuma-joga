import React from "react";
import slugify from "slugify";
import useLogoSrc from "../Hooks/useLogo";

const Teams = ({ nextMatchData }) => {
  const logoSrc = useLogoSrc();
  return (
    <div className="flex justify-evenly items-center">
      <img
        className="w-40 max-lg:w-28"
        src={logoSrc(nextMatchData.time_mandante.nome)}
        title={nextMatchData.time_mandante.nome}
      ></img>
      <span className="text-6xl max-lg:text-4xl">X</span>
      <img
        className="w-40 max-lg:w-28"
        src={logoSrc(nextMatchData.time_visitante.nome)}
        title={nextMatchData.time_visitante.nome}
      ></img>
    </div>
  );
};

export default Teams;
