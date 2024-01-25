import namesData from '../data/names-catarinense.json'
import slugify from 'slugify'

interface Name {
  [key: string]: string
}

const names: Name = namesData as Name

const translateName = (team: string): string | undefined => {
  return names[slugify(team, { lower: true })]
}

export default translateName
