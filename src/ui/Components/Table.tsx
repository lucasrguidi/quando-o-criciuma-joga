import React from 'react'
import { Oval } from 'react-loader-spinner'
import findLogo from '../Helpers/find-logo'
import translateName from '../Helpers/translate-name'
import { TableResponse } from '../Interfaces/table.interface'

interface TableProps {
  loading: boolean
  data: TableResponse[] | null | undefined
}

const Table: React.FC<TableProps> = ({ loading, data }) => {
  if (loading || !data) {
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
  }
  return (
    <div className="overflow-y-scroll rounded-xl shadow-lg max-lg:w-full">
      <table className="table-auto">
        <thead>
          <tr className="bg-slate-300">
            <th className="p-4 max-lg:p-2 text-left" colSpan={3}>
              CAMPEONATO CATARINENSE
            </th>
            <th className="p-4 max-lg:p-2">PG</th>
            <th className="p-4 max-lg:p-2">J</th>
            <th className="p-4 max-lg:p-2">V</th>
            <th className="p-4 max-lg:p-2">E</th>
            <th className="p-4 max-lg:p-2">D</th>
            <th className="p-4 max-lg:p-2">SG</th>
          </tr>
        </thead>
        <tbody>
          {data.map((standing, index) => (
            <tr
              key={standing.rank}
              className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}
            >
              <td
                className={`py-2 px-4 max-lg:text-center ${
                  standing.rank === 1 ||
                  standing.rank === 2 ||
                  standing.rank === 3 ||
                  standing.rank === 4 ||
                  standing.rank === 5 ||
                  standing.rank === 6 ||
                  standing.rank === 7 ||
                  standing.rank === 8
                    ? 'g4'
                    : standing.rank === 11 || standing.rank === 12
                    ? 'z4'
                    : ''
                }`}
              >
                {standing.rank}°
              </td>
              <td className="p-2">
                <img
                  className="h-8 w-8 max-lg:max-w-none small-h-table-img"
                  width={32}
                  height={32}
                  src={findLogo(standing.team.name)}
                  referrerPolicy="no-referrer"
                  title={standing.team.name}
                  alt={`Escudo do ${standing.team.name}`}
                />
              </td>
              <td className="py-2 px-2 max-lg:p-2">
                {translateName(standing.team.name)}
              </td>
              <td className="py-2 px-4 max-lg:p-2">{standing.points}</td>
              <td className="py-2 px-4 max-lg:p-2">{standing.all.played}</td>
              <td className="py-2 px-4 max-lg:p-2">{standing.all.win}</td>
              <td className="py-2 px-4 max-lg:p-2">{standing.all.draw}</td>
              <td className="py-2 px-4 max-lg:p-2">{standing.all.lose}</td>
              <td className="py-2 px-4 max-lg:p-2">{standing.goalsDiff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
