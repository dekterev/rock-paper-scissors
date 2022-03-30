import './styled.css'

export interface MenuType {
  menu: {
    balance: number
    bet: number
    win: number
  }
}

export const Result = ({ menu }: MenuType) => {
  return (
    <div>
      <ul>
        {Object.entries(menu).map(([key, value]) => (
          <li key={key}>
            <span id='name'>{key}</span>: {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
