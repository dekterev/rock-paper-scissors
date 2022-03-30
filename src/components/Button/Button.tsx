import './style.css'

interface ButtonProps {
  play: boolean
  startPlay: () => void
}

export const Button = ({ play, startPlay }: ButtonProps) => {
  return <button onClick={startPlay}>{play ? 'PLAY' : 'CLEAR'}</button>
}
