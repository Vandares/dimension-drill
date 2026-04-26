import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector('.hero-image')
      if (logo) {
        logo.style.transform = `rotate(${window.scrollY * 0.2}deg)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    {
      title: 'BEST SELLERS',
      items: [
        {
          name: 'SOL Club Sandwich',
          description: 'Our most popular sandwich with fresh ingredients.',
          calories: '520 cal',
          price: '﷼ 55',
          icons: ['★'],
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'American Breakfast',
          description: 'Classic breakfast with eggs, toast, and sides.',
          calories: '650 cal',
          price: '﷼ 60',
          icons: ['★'],
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'Haloumi Sandwich',
          description: 'Grilled haloumi with fresh bread and sauce.',
          calories: '480 cal',
          price: '﷼ 48',
          icons: ['★'],
          image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Haloumi Sandwich',
          description: 'Grilled haloumi with fresh bread and sauce.',
          calories: '480 cal',
          price: '﷼ 48',
          icons: ['★'],
          image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
        },

        
      ],
    },
    {
      title: 'BREAKFAST',
      items: [
        {
          name: 'Oriental Breakfast',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 75',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'American Breakfast',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 75',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Omelette',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 32',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Fried Eggs',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Haloumi Sandwich',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'SOL Club Sandwich',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Tuna Sandwich',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Smoked Salmon Sandwich',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Smoked Salmon Sandwich with Egg',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Hash Browns',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'Bread Basket',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
    {
      title: 'LUNCH',
      items: [
        {
          name: 'Garlic Bread & Tomato',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '﷼ 45',
          icons: ['❀', '◌'],
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
  ]

  return (
    <div className="page">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <h2>Welcome 👋</h2>
            <p>Hi, welcome to Sol Beach Kitchen</p>
          </div>
        </div>
      )}

      <div className="topbar">
        <div className="search-placeholder">Search</div>

        <button className="menu-icon" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <header className="hero">
        <img src="/logo.png" alt="Sol Beach Resort" className="hero-image" />
        <p className="subtitle">Sol Beach Kitchen</p>
      </header>

      {sections.map((section) => (
        <section
          className={`menu-section ${section.title === 'BEST SELLERS' ? 'best-sellers' : ''}`}
          key={section.title}
        >
          <h2 className="section-title">{section.title}</h2>

          <div className="menu-grid">
            {section.items.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-content">
                  <h3>
                    {item.name}
                    {section.title === 'BEST SELLERS' && (
                      <span className="badge">★ Best Seller</span>
                    )}
                  </h3>

                  <p className="description">{item.description}</p>

                  <div className="icons-row">
                    {item.icons?.map((icon, iconIndex) => (
                      <span key={iconIndex}>{icon}</span>
                    ))}
                  </div>

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