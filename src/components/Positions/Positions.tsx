import { Position, PositionType } from './Position/Position'
import './style.css'

interface PospitionsProps {
  positions: PositionType[]
  handleClickBet: (position: string) => void
}

export const Positions = ({ positions, handleClickBet }: PospitionsProps) => {
  return (
    <div className='positions'>
      {positions?.map(({ position, bet, win }: PositionType) => (
        <Position
          key={position}
          position={position}
          bet={bet}
          win={win}
          handleClickBet={handleClickBet}
        />
      ))}
    </div>
  )
}
