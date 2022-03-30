import './style.css'

export interface PositionType {
  position: string
  bet: number
  win: boolean
}

export interface PositionTypeType extends PositionType {
  handleClickBet: (pos: string) => void
}

export const Position = ({
  position,
  bet,
  win,
  handleClickBet,
}: PositionTypeType) => {
  return (
    <div
      className={`position ${position} ${win ? 'win' : ''}`}
      data-position={position}
      data-win={win}
      onClick={() => handleClickBet(position)}
    >
      {bet ? <div className='bet'>{bet}</div> : ''}
      <h2 className='positionName'>{position}</h2>
    </div>
  )
}
