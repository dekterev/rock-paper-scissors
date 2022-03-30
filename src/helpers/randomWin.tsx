import { PositionType } from '../components/Positions/Position/Position'

export const randomiseWin = (allPositions: PositionType[]) => {
  const random = Math.floor(Math.random() * allPositions.length)

  allPositions[random].win = true

  return { winner: allPositions[random].position, allPositions }
}
