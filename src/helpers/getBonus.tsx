import { PositionType } from '../components/Positions/Position/Position'
import { MenuType } from '../components/Result/Result'

export const getBonus = (
  positions: PositionType[],
  results: MenuType['menu'],
) => {
  const { bet } = results
  let bonus = 0

  positions.forEach((pos) => {
    if (bet === 1000 && pos.win && pos.bet) bonus = bet * 2
    if (bet < 1000 && pos.win && pos.bet) bonus = bet * 8
  })

  return bonus - bet
}
