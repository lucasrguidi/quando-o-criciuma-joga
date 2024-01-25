interface Fixture {
  id: number
  referee: null | any
  timezone: string
  date: string
  timestamp: number
  periods: {
    first: null | any
    second: null | any
  }
  venue: {
    id: number
    name: string
    city: string
  }
  status: {
    long: string
    short: string
    elapsed: null | any
  }
}

interface League {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

interface Team {
  id: number
  name: string
  logo: string
  winner: null | any
}

interface Goals {
  home: null | any
  away: null | any
}

interface Score {
  halftime: Goals
  fulltime: Goals
  extratime: Goals
  penalty: Goals
}

export interface MatchResponse {
  fixture: Fixture
  league: League
  teams: {
    home: Team
    away: Team
  }
  goals: Goals
  score: Score
}
