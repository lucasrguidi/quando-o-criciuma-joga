import React from 'react'
import { AiFillCalendar, AiFillClockCircle } from 'react-icons/ai'
import { MdStadium } from 'react-icons/md'
import { Oval } from 'react-loader-spinner'
import findLogo from '../Helpers/find-logo'
import { timeFormatters } from '../Helpers/time-formatters'
import translateLeague from '../Helpers/translate-league'
import { MatchResponse } from '../Interfaces/matches.interface'

interface NextMatchesProps {
  loading: boolean
  data: MatchResponse[] | null | undefined
}

const NextMatches: React.FC<NextMatchesProps> = ({ loading, data }) => {
  if (loading || !data)
    return (
      <div className="h-full flex justify-center items-center">
        <Oval
          color="#FACC15"
          secondaryColor="#FDE047"
          strokeWidth={3}
          height={150}
          width={150}
        />
      </div>
    )

  if (data.length === 0) {
    return null
  }

  return (
    <div className="overflow-y-scroll bg-slate-200 rounded-xl flex flex-col gap-4 p-4 shadow-lg w-full">
      {data.slice(1).map((match) => (
        <div
          key={match.fixture.id}
          className="bg-white rounded-2xl flex justify-between items-center w-full p-4 max-lg:gap-3"
        >
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              className="w-32 max-h-24 small-h-matches-img"
              width={128}
              src={findLogo(match.teams.home.name)}
              referrerPolicy="no-referrer"
              title={match.teams.home.name}
              alt={`Escudo do ${match.teams.home.name}`}
            />
          </div>
          <div className="w-2/4 flex flex-col justify-center items-center gap-1 max-lg:w-3/5">
            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <AiFillCalendar className="text-2xl max-lg:text-lg max-lg:text-center" />
              <span className="text-2xl max-lg:text-lg max-lg:text-center">
                {timeFormatters.formatDate(match.fixture.date, {
                  format: 'long',
                })}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <AiFillClockCircle className="text-xl max-lg:text-sm max-lg:text-center" />
              <span className="text-xl max-lg:text-sm max-lg:text-center">
                {timeFormatters.formatHour(match.fixture.timestamp)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <MdStadium className="text-xl max-lg:text-sm max-lg:text-center" />
              <span className="text-xl text-center max-lg:text-sm ">
                {match.fixture.venue.name}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <h5 className="text-base max-lg:text-xs max-lg:text-center whitespace-nowrap">
                {translateLeague(match.league.name)}
              </h5>
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              width={128}
              className="w-32 max-h-24 small-h-matches-img"
              src={findLogo(match.teams.away.name)}
              referrerPolicy="no-referrer"
              title={match.teams.away.name}
              alt={`Escudo do ${match.teams.away.name}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default NextMatches
