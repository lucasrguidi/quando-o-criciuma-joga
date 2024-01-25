import React from 'react'

interface SelectorProps {
  setStatsView: (statsView: string) => void
  statsView: string
}

const Selector: React.FC<SelectorProps> = ({ setStatsView, statsView }) => {
  const notSelected =
    'rounded-2xl cursor-pointer px-4 h-full text-slate-800 text-opacity-30 hover:bg-slate-800 hover:bg-opacity-20 flex justify-center items-center p-2'
  const selected =
    'rounded-2xl cursor-pointer px-4 h-full text-slate-800 bg-white flex justify-center items-center p-2'

  return (
    <div className=" flex items-center justify-center p-2 rounded-2xl bg-slate-400 bg-opacity-20 gap-4 text-lg max-lg:text-base max-lg:text-center">
      <div
        className={statsView === 'table' ? selected : notSelected}
        onClick={() => setStatsView('table')}
      >
        Tabela
      </div>
      <div
        className={statsView === 'nextMatches' ? selected : notSelected}
        onClick={() => setStatsView('nextMatches')}
      >
        Próximos jogos
      </div>
      <div
        className={statsView === 'lastMatches' ? selected : notSelected}
        onClick={() => setStatsView('lastMatches')}
      >
        Últimos jogos
      </div>
    </div>
  )
}

export default Selector
