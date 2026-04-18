import './App.css'

function App() {
  const sections = [
    {
      title: 'CROSTINI STUZZICHINI',
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
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '$55',
          image:
            'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'BRUSCHETTA FUNGHI',
          description: 'Homemade thinly sliced pizza bread with sauté button mushrooms, garlic and ricotta cheese.',
          calories: '281.75 cal',
          price: '$59',
          image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'BURRATA',
          description: 'Creamy burrata cheese from Puglia with Coccoletti cherry tomato sauce.',
          calories: '439.09 cal',
          price: '$119',
          image:
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'BASKET OF BREAD',
          description: 'Homemade pizza bread with mixed spices and olive oil dip.',
          calories: '303.25 cal',
          price: '$38',
          image:
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
    {
      title: 'CARPACCIO & INSALATA (SALAD)',
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
          name: 'CARPACCIO DI ANGUS BEEF',
          description: 'Thinly sliced Angus beef fillet marinated in roasted black pepper with rocket, parmesan, lemon, and mustard dressing.',
          calories: '369.02 cal',
          price: '$89',
          image:
            'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'SMOKED CHICKEN BREAST SALAD',
          description: 'Lettuce with Coccoletti caesar dressing and chicken breast slices.',
          calories: '626.12 cal',
          price: '$74',
          image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'VITELLO TONNATO',
          description: 'Thin slices of veal fillet with tuna sauce, potatoes, green beans and capers.',
          calories: '294.14 cal',
          price: '$88',
          image:
            'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
  ]

  return (
    <div className="page">
      <header className="hero">
        <h1>RISTORANTE BELLA CASA</h1>
        <p className="subtitle">Italian Dining Experience</p>
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
    </div>
  )
}

export default App