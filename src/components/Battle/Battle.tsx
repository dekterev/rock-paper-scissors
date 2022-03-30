import './styled.css'

interface PlayersType {
  players: string[]
  data: {
    winner: string
    win: number
  }
}

export const Battle = ({ players, data }: PlayersType) => {
  const { winner, win } = data
  return (
    <div className='battle'>
      <h1
        style={{ visibility: players.length && !winner ? 'visible' : 'hidden' }}
      >
        {players[0]} vs {players[1]}
      </h1>
      <div
        style={{
          visibility: winner ? 'visible' : 'hidden',
        }}
      >
        <h1 className='winner'>{winner} won</h1>
        <h1>
          your {win > 0 ? 'win' : 'lose'} {win}$
        </h1>
      </div>
    </div>
  )
}
