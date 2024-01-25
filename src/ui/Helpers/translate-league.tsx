import leaguesData from '../data/leagues-2024.json'
import slugify from 'slugify'

interface League {
  [key: string]: string
}

const leagues: League = leaguesData as League

const translateLeague = (league: string): string => {
  return leagues[slugify(league, { lower: true })] ?? league
}

export default translateLeague
