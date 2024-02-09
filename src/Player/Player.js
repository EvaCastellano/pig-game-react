import './Player.css'
// props = {name: 'Player 1' score:43, current:0, isActive: true}
function Player({ name, score, current, isActive }) {
  // =   const {n,s,etc} = props
  return (
    <section className="player player--active">
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  )
}
export default Player
