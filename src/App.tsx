import { useState } from 'react'
import './App.css'

import { Result } from './components/Result/Result'
import { Positions } from './components/Positions/Positions'
import { Button } from './components/Button/Button'
import { Battle } from './components/Battle/Battle'
import { PositionType } from './components/Positions/Position/Position'

import { randomiseWin } from './helpers/randomWin'
import { getBonus } from './helpers/getBonus'

const menu = { balance: 5000, bet: 0, win: 0 }

const positions = [
  { position: 'rock', bet: 0, win: false },
  { position: 'paper', bet: 0, win: false },
  { position: 'scissors', bet: 0, win: false },
]

function App() {
  const [menuBar, setMenuBar] = useState(menu)
  const [positionsState, setPositionsState] = useState(positions)
  const [play, setPlay] = useState(true)
  const [error, setError] = useState('')
  const [players, setPlayers] = useState<string[]>([])
  const [winner, setWinner] = useState('')

  const handleClickBet = (position: string) => {
    if (!play) return
    const newPositions = positionsState.map((pos: PositionType) => {
      getPlayers(players, position)
      if (pos.position === position) {
        if (menuBar.bet === 1000 && pos.bet === 0) return pos
        pos.bet = pos.bet ? 0 : 500
        setMenuBar({
          ...menuBar,
          bet: pos.bet ? menuBar.bet + 500 : menuBar.bet - 500,
        })
      }
      return pos
    })
    setPositionsState(newPositions)
  }

  const getPlayers = (players: string[], player: string) => {
    if (players.length < 2 && players.indexOf(player) === -1) {
      setPlayers([...players, player])
    } else if (players.indexOf(player) !== -1) {
      setPlayers(players.filter((p) => p !== player))
    }
  }

  const startPlay = () => {
    if (menuBar.balance < 0) return setError('You need more money')
    if (!play) {
      setPlay(true)
      setError('')
      setWinner('')
      setMenuBar({ ...menuBar, balance: menuBar.balance + menuBar.win, bet: 0 })
      setPlayers([])
      setPositionsState(
        positions.map((pos: PositionType) => ({
          ...pos,
          bet: 0,
          win: false,
        })),
      )
      return
    }
    if (!menuBar.bet) return setError('You need to bet')

    const { winner, allPositions } = randomiseWin(positionsState)
    setPositionsState(allPositions)
    setWinner(winner)
    const bonus = getBonus(positionsState, menuBar)
    setMenuBar({ ...bonus })
    setPlay(false)
  }

  return (
    <div className='App'>
      <Result menu={menuBar} />
      <Battle players={players} winner={winner} win={menuBar.win} />
      <h3
        style={{
          visibility: !players.length ? 'visible' : 'hidden',
        }}
      >
        Pick your positions
      </h3>
      <Positions positions={positionsState} handleClickBet={handleClickBet} />
      <Button play={play} startPlay={startPlay} />
      <span className='error'>{error}</span>
    </div>
  )
}

export default App
