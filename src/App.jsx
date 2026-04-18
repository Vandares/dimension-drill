import './App.css'

function App() {
  const teams = [
    {
      name: 'Shadow Reign',
      captain: 'Vandares',
      players: ['Vandares', 'Astra', 'Kiro', 'Nyx', 'Zeph'],
      contact: 'Discord: vandares',
      status: 'Open Slot Check',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Phantom Core',
      captain: 'Raze',
      players: ['Raze', 'Lune', 'Jett', 'Orion', 'Vale'],
      contact: 'Discord: raze',
      status: 'Confirmed',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Drill Breakers',
      captain: 'Noct',
      players: ['Noct', 'Mika', 'Rin', 'Taro', 'Eon'],
      contact: 'Discord: noct',
      status: 'Pending Review',
      image:
        'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Nova Unit',
      captain: 'Sora',
      players: ['Sora', 'Yuki', 'Blitz', 'Kai', 'Moro'],
      contact: 'Discord: sora',
      status: 'Confirmed',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">5v5 Tournament Event</p>
        <h1>DIMENSION DRILL</h1>
        <p className="hero-subtitle">
          Register your squad, review event details, and secure your team slot.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">EVENT INFORMATION</h2>

        <div className="info-grid">
          <article className="info-card">
            <div className="info-content">
              <h3>FORMAT</h3>
              <p>5v5 team battle format with fixed main roster and optional substitutes.</p>
              <span>Squad-based registration</span>
            </div>
          </article>

          <article className="info-card">
            <div className="info-content">
              <h3>REGISTRATION RULES</h3>
              <p>Each team must submit captain info, 5 main players, and valid player IDs.</p>
              <span>No duplicate entries</span>
            </div>
          </article>

          <article className="info-card">
            <div className="info-content">
              <h3>CHECK-IN</h3>
              <p>Approved teams will be reviewed before the event begins. Keep Discord active.</p>
              <span>Manual approval phase</span>
            </div>
          </article>

          <article className="info-card">
            <div className="info-content">
              <h3>TEAM STATUS</h3>
              <p>Teams can appear as Confirmed, Pending Review, or Open Slot Check.</p>
              <span>Easy admin tracking</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">TEAM REGISTRATION</h2>

        <div className="register-card">
          <div className="register-form">
            <div className="form-block">
              <h3>TEAM DETAILS</h3>
              <input type="text" placeholder="Team Name" />
              <input type="text" placeholder="Captain Name" />
              <input type="text" placeholder="Captain Contact (Discord / UID)" />
            </div>

            <div className="form-block">
              <h3>MAIN PLAYERS</h3>
              <div className="two-col">
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
              </div>
            </div>

            <div className="form-block">
              <h3>SUBSTITUTES</h3>
              <div className="two-col">
                <input type="text" placeholder="Sub 1 Name" />
                <input type="text" placeholder="Sub 1 UID" />
                <input type="text" placeholder="Sub 2 Name" />
                <input type="text" placeholder="Sub 2 UID" />
              </div>
            </div>

            <button className="submit-btn" type="button">
              REGISTER TEAM
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">REGISTERED TEAMS</h2>

        <div className="team-grid">
          {teams.map((team) => (
            <article className="team-card" key={team.name}>
              <div className="team-content">
                <h3>{team.name}</h3>
                <p className="team-caption">Captain: {team.captain}</p>
                <p>{team.contact}</p>
                <p className="players-line">{team.players.join(' • ')}</p>
                <span className="status-badge">{team.status}</span>
              </div>

              <div className="team-image-wrap">
                <img src={team.image} alt={team.name} className="team-image" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App