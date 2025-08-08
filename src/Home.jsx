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
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.1'
          }}>
            Ricardo Scales
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '30px',
            fontWeight: '400'
          }}>
            Composer, Civic Virtuoso, Cultural Pillar
          </h2>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Book an Event
            </Link>
            <Link to="/music" style={{
              backgroundColor: '#C28840',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Explore Music
            </Link>
          </div>
        </div>
      </section>

      

      {/* Legacy Section */}
      <section style={{
        backgroundColor: '#C28840',
        padding: '60px 20px 80px',
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '600px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'stretch',
          gap: '60px',
          width: '100%'
        }}>
          {/* Left Side - Title */}
          <div style={{
            flex: '0 0 400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: '40px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontFamily: "'Playfair Display', serif",
              color: 'white',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px'
            }}>
              A Legacy of Musical Excellence
            </h2>

            {/* Quote Box */}
            <div style={{
              borderLeft: '4px solid white',
              paddingLeft: '30px',
              marginTop: '20px'
            }}>
              <blockquote style={{
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: 'white',
                lineHeight: '1.6',
                margin: '0 0 20px 0',
                fontFamily: "'Playfair Display', serif"
              }}>
                "Music is what I do; it's who I am. Each note carries the story of our collective journey, the rhythm of our shared humanity."
              </blockquote>
              <cite style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                fontStyle: 'normal',
                fontWeight: '400'
              }}>
                — Ricardo Scales
              </cite>
            </div>
          </div>

          {/* Right Side - Content */}
          <div style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '20px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '30px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '300'
            }}>
              For over three decades, Ricardo Scales has been an influential force in the music world, seamlessly blending jazz, gospel, and classical traditions. As a civic virtuoso, he has dedicated his talents to cultural enrichment, performing at prestigious venues while maintaining deep community connections.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.95)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '300'
            }}>
              His work transcends entertainment—it preserves cultural heritage while pushing artistic boundaries. Ricardo's compositions have become part of the civic landscape, creating shared experiences that unite diverse communities through the universal language of music.
            </p>
          </div>
        </div>
      </section>

      {/* Black Legacy Section with Three Cards */}
      <section style={{
        backgroundColor: '#000000',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
            {/* Card 1: The Hand That Wouldn't Quit */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '40px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                The Hand That Wouldn't Quit
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                When a devastating accident paralyzed his left hand at 19, doctors declared his concert career over. But Ricardo achieved the impossible, restoring his hand through months of relentless self-therapy and proving that some dreams refuse to die.
              </p>
            </div>

            {/* Card 2: Where Legends Come to Play */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '40px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                Where Legends Come to Play
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                From San Francisco's Redwood Room to the Top of the Mark, touring superstars like Billy Joel, Harry Connick Jr., and Liza Minnelli would abandon their hotel rooms to join Ricardo for impromptu musical collaborations.
              </p>
            </div>

            {/* Card 3: The Presidential Pianist */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              padding: '40px',
              borderLeft: '4px solid #C28840'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                The Presidential Pianist
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
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