import logosData from '../data/logos-catarinense.json'
import slugify from 'slugify'

interface Logo {
  [key: string]: string
}

const logos: Logo = logosData as Logo

const findLogo = (team: string): string | undefined => {
  return logos[slugify(team, { lower: true })]
}

export default findLogo
