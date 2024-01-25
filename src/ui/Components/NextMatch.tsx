import React from 'react'
import { AiFillCalendar, AiFillClockCircle } from 'react-icons/ai'
import { MdStadium } from 'react-icons/md'
import { Oval } from 'react-loader-spinner'
import findLogo from '../Helpers/find-logo'
import { timeFormatters } from '../Helpers/time-formatters'
import translateLeague from '../Helpers/translate-league'
import translateName from '../Helpers/translate-name'
import { MatchResponse } from '../Interfaces/matches.interface'
import Countdown from 'react-countdown'

interface NextMatchProps {
  loading: boolean
  data: MatchResponse | null | undefined
}

const NextMatch: React.FC<NextMatchProps> = ({ loading, data }) => {
  if (loading || !data)
    return (
      <Oval
        color="#FACC15"
        secondaryColor="#FDE047"
        strokeWidth={3}
        height={150}
        width={150}
      />
    )

  interface RendererParams {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: RendererParams) => {
    if (completed) {
      return <span>Partida em andamento!</span>
    } else {
      return (
        <span>
          {days} Dia(s) : {hours} Hrs : {minutes} Min : {seconds} Seg
        </span>
      )
    }
  }

  return (
    <div className="bg-white responsive-h w-full flex flex-col justify-center gap-4 px-4 py-8 rounded-2xl max-lg:gap-4 max-lg:p-8 max-lg:h-fit">
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2 max-lg:gap-3">
            <AiFillCalendar className="text-5xl max-lg:text-3xl" />
            <span className="text-5xl max-lg:text-3xl">
              {timeFormatters.formatDate(data.fixture.date, {
                format: 'long',
              })}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 max-lg:gap-3">
            <AiFillClockCircle className="text-4xl max-lg:text-3xl" />
            <span className="text-4xl max-lg:text-3xl">
              {timeFormatters.formatHour(data.fixture.timestamp)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex gap-5 max-lg:gap-2">
          <span className="text-2xl text-center max-lg:text-lg">
            <Countdown date={data.fixture.date} renderer={renderer}></Countdown>
          </span>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <img
          className="w-40 max-h-32 max-lg:w-28 max-lg:max-h-24"
          src={findLogo(data.teams.home.name)}
          title={data.teams.home.name}
          alt={`Escudo do ${data.teams.home.name}`}
        />
        <span className="text-6xl max-lg:text-4xl">X</span>
        <img
          className="w-40 max-h-32  max-lg:w-28 max-lg:max-h-24"
          src={findLogo(data.teams.away.name)}
          title={data.teams.away.name}
          alt={`Escudo do ${data.teams.away.name}`}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 max-lg:gap-1">
        <div>
          <h1 className="text-5xl max-lg:text-2xl text-center">
            {translateName(data.teams.home.name)} x{' '}
            {translateName(data.teams.away.name)}
          </h1>
        </div>
        <div>
          <h5 className="text-xl max-lg:text-base whitespace-nowrap text-center">
            {translateLeague(data.league.name)}
          </h5>
        </div>
        <div>
          <h5 className="flex items-center text-center gap-1 max-lg:gap-1 text-xl max-lg:text-base">
            <MdStadium /> {data.fixture.venue.name}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default NextMatch
