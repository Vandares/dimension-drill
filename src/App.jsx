import { useState } from 'react'
import './App.css'

function App() {


const [showPopup, setShowPopup] = useState(true)


  const sections = [
    
    {
      title: 'BREAKFAST',
      items: [
        {
          name: 'OLIVES & TAPENADE',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'GARLIC BREAD & TOMATO',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '﷼ 45',
          icons: ['❀', '◌'],
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
          
        },     
      ],
      
    },


    {
      title: 'LUNCH',
      items: [
        {
          name: 'OLIVES & TAPENADE',
          description: 'With a selection of bread and breadsticks.',
          calories: '480.13 cal',
          price: '﷼ 48',
          icons: ['◔'],
          image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'GARLIC BREAD & TOMATO',
          description: 'Pizza dough with tomato sauce and fresh tomato with garlic.',
          calories: '440.02 cal',
          price: '﷼ 45',
          icons: ['❀', '◌'],
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        },
        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
        },

        {
          name: 'BRUSCHETTA',
          description: 'Homemade thinly sliced pizza bread with fresh cherry tomato and Italian basil.',
          calories: '186.04 cal',
          price: '﷼ 55',
          icons: ['❀'],
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
          
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

        <button className="menu-icon" type="button" aria-label="Menu">
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
        <section className="menu-section" key={section.title}>
          <h2 className="section-title">{section.title}</h2>

          <div className="menu-grid">
            {section.items.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>

                  <div className="icons-row">
                    {item.icons?.map((icon, index) => (
                      <span key={index}>{icon}</span>
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