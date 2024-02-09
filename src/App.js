import './App.css'
import { useState } from 'react'
import Player from './Player/Player.js'

function App() {
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([56, 2])
  const [current, setCurrent] = useState(33)
  const [diceNumber, setDiceNumber] = useState(3)

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />

      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}

      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  )
}
export default App

// 1. definir variables de estado usando useState (activePlayer, socre, current, diceNumber)
//TODO: 2. definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
// 3. pasar las variables de estado y las funciones a los componentes Player y Dice
//TODO: 4. manejar los eventos de click en los botones de New game, Roll dice y Hold
//TODO: 5. manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
//TODO: 5. manejar el cambio de jugador activo cuando se hace click en el botón Hold
//TODO: 6. manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
//TODO: 7. manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
//TODO: 8. manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
//TODO: 9. manejar el cambio de jugador activo cuando se hace click en el botón New game
