interface Team {
  id: number
  name: string
  logo: string
}

interface Goals {
  for: number
  against: number
}

interface TeamStats {
  played: number
  win: number
  draw: number
  lose: number
  goals: Goals
}

export interface TableResponse {
  rank: number
  team: Team
  points: number
  goalsDiff: number
  group: string
  form: string
  status: string
  description: string
  all: TeamStats
  home: TeamStats
  away: TeamStats
  update: string
}
