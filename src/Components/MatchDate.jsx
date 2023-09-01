import React from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { AiFillClockCircle } from 'react-icons/ai';

const MatchDate = ({ nextMatchData }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2 max-lg:gap-3">
          <AiFillCalendar className="text-5xl max-lg:text-3xl" />
          <span className="text-5xl max-lg:text-3xl">{nextMatchData.data}</span>
        </div>

        <div className="flex items-center justify-center gap-2 max-lg:gap-3">
          <AiFillClockCircle className="text-4xl max-lg:text-3xl" />
          <span className="text-4xl max-lg:text-3xl">
            {nextMatchData.horario}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchDate;
