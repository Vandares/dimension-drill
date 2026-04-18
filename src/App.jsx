import './App.css'
import logo from './assets/logo.png'

function App() {
  const sections = [
    {
      title: 'Lunch',
      items: [
        {
          name: 'OLIVES & TAPENADE',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '$48',
          image:
            'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'GARLIC BREAD & TOMATO',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '$45',
          image:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'GARLIC BREAD & TOMATO',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '$45',
          image:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'GARLIC BREAD & TOMATO',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '$45',
          image:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },

      ],
    },
    {
      title: 'Salads',
      items: [
        {
          name: 'BRESAOLA',
          description: 'Homemade dry-cured Spanish high grade beef with rocket and parmesan.',
          calories: '149.13 cal',
          price: '$84',
          image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRESAOLA',
          description: 'Homemade dry-cured Spanish high grade beef with rocket and parmesan.',
          calories: '149.13 cal',
          price: '$84',
          image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRESAOLA',
          description: 'Homemade dry-cured Spanish high grade beef with rocket and parmesan.',
          calories: '149.13 cal',
          price: '$84',
          image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRESAOLA',
          description: 'Homemade dry-cured Spanish high grade beef with rocket and parmesan.',
          calories: '149.13 cal',
          price: '$84',
          image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
  ]

  return (
    <div className="page">

      <header className="hero">
        <h1>MAIN MENU</h1>
        <img src={logo} alt="Sol Beach Resort" className="hero-image" />
        <p className="subtitle">Sol Beach Kitchen</p>
      </header>

      {sections.map((section) => (
        <section className="menu-section" key={section.title}>
          <h2 className="section-title">{section.title}</h2>

          <div className="menu-grid">
            {section.items.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>

                  <div className="meta">
                    <span>{item.calories}</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>

                <div className="image-wrap">
                  <img src={item.image} alt={item.name} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">
        <p>© 2026 Sol Beach Resort. All rights reserved.</p>
        <span>Made by Sol Beach Resort</span>
      </footer>

    </div>
  )
}

export default App