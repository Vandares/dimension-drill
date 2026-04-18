import './App.css'

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Dimension Drill Registration</h1>
        <p className="subtitle">5v5 Team Registration</p>

        <form className="form">
          <h2>Team Info</h2>

          <input type="text" placeholder="Team Name" />
          <input type="text" placeholder="Captain Name" />
          <input type="text" placeholder="Captain Contact (Discord/UID)" />

          <h2>Main Players</h2>

          <input type="text" placeholder="Player 1 Name" />
          <input type="text" placeholder="Player 1 UID" />

          <input type="text" placeholder="Player 2 Name" />
          <input type="text" placeholder="Player 2 UID" />

          <input type="text" placeholder="Player 3 Name" />
          <input type="text" placeholder="Player 3 UID" />

          <input type="text" placeholder="Player 4 Name" />
          <input type="text" placeholder="Player 4 UID" />

          <input type="text" placeholder="Player 5 Name" />
          <input type="text" placeholder="Player 5 UID" />

          <h2>Substitutes (Optional)</h2>

          <input type="text" placeholder="Sub 1 Name" />
          <input type="text" placeholder="Sub 1 UID" />

          <input type="text" placeholder="Sub 2 Name" />
          <input type="text" placeholder="Sub 2 UID" />

          <button type="submit">Register Team</button>
        </form>
      </div>
    </div>
  )
}

export default App