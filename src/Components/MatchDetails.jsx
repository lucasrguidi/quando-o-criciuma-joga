import React from "react";
import { MdStadium } from "react-icons/md";

const MatchDetails = ({ nextMatchData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 max-lg:gap-0">
      <div>
        <h1 className="text-5xl max-lg:text-2xl text-center">
          {nextMatchData.time_mandante.nome} x{" "}
          {nextMatchData.time_visitante.nome}
        </h1>
      </div>
      <div>
        <h5 className="text-xl max-lg:text-base whitespace-nowrap text-center">
          {nextMatchData.campeonato}
        </h5>
      </div>
      <div>
        <h5 className="flex items-center gap-1 max-lg:gap-1 text-xl max-lg:text-base">
          <MdStadium /> {nextMatchData.estadio}
        </h5>
      </div>
    </div>
  );
};

export default MatchDetails;
