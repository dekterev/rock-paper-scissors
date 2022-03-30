import { PositionType } from '../components/Positions/Position/Position'
import { MenuType } from '../components/Result/Result'

export const getBonus = (
  positions: PositionType[],
  results: MenuType['menu'],
) => {
  const { balance, bet, win } = results
  let bonus = 0

  positions.forEach((pos) => {
    if (bet === 1000 && pos.win && pos.bet) bonus = bet * 2
    if (bet < 1000 && pos.win && pos.bet) bonus = bet * 8
    else {
      return bonus
    }
  })

  return {
    balance: balance,
    bet: bet,
    win: win + bonus - bet,
  }
}
