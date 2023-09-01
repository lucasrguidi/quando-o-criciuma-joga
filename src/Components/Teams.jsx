import React from 'react';

const Teams = ({ nextMatchData }) => {
  return (
    <div className="flex justify-evenly items-center">
      <img
        className="h-36 max-lg:h-24"
        src={nextMatchData.time_mandante.escudo}
        title={nextMatchData.time_mandante.nome}
      ></img>
      <span className="text-6xl max-lg:text-4xl">X</span>
      <img
        className="h-36 max-lg:h-24"
        src={nextMatchData.time_visitante.escudo}
        title={nextMatchData.time_visitante.nome}
      ></img>
    </div>
  );
};

export default Teams;
