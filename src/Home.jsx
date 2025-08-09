
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Header */}
      <header className="home-header">
        <div className="home-nav-container">
          <div className="home-logo">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="home-desktop-nav">
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="home-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="home-mobile-nav">
            <nav className="home-mobile-nav-links">
              <Link to="/" style={{
                color: '#C28840',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("/attached_assets/ricardo upsclaed_1753392463500.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '30px',
            fontWeight: '700',
            lineHeight: '1',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Ricardo Scales
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '50px',
            fontWeight: '400',
            letterSpacing: '2px'
          }}>
            Composer, Civic Virtuoso, Cultural Pillar
          </h2>
          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '18px 40px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Book an Event
            </Link>
            <Link to="/music" style={{
              backgroundColor: '#C28840',
              color: 'white',
              padding: '18px 40px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Explore Music
            </Link>
          </div>
        </div>
      </section>

      {/* Three Cards Section */}
      <section style={{
        backgroundColor: '#000000',
        padding: '100px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
            {/* Card 1: The Hand That Wouldn't Quit */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '50px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '25px',
                fontWeight: '600'
              }}>
                The Hand That Wouldn't Quit
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7'
              }}>
                When a devastating accident paralyzed his left hand at 19, doctors declared his concert career over. But Ricardo achieved the impossible, restoring his hand through months of relentless self-therapy and proving that some dreams refuse to die.
              </p>
            </div>

            {/* Card 2: Where Legends Come to Play */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '50px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '25px',
                fontWeight: '600'
              }}>
                Where Legends Come to Play
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7'
              }}>
                From San Francisco's Redwood Room to the Top of the Mark, touring superstars like Billy Joel, Harry Connick Jr., and Liza Minnelli would abandon their hotel rooms to join Ricardo for impromptu musical collaborations.
              </p>
            </div>

            {/* Card 3: The Presidential Pianist */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '50px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '25px',
                fontWeight: '600'
              }}>
                The Presidential Pianist
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7'
              }}>
                Ricardo's artistry has graced the highest levels of leadership, performing for seated U.S. Presidents and Vice President Kamala Harris, serving as America's unofficial musical ambassador to the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
