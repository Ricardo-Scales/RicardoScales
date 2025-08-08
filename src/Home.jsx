
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: 'white',
      fontFamily: "'Playfair Display', serif"
    }}>
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(194, 136, 64, 0.2)',
        zIndex: 1000,
        padding: '15px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontFamily: "'Alex Brush', cursive",
            color: '#C28840',
            fontWeight: '400'
          }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</Link>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: '30px' }}>
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400'
            }}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: '#C28840',
              fontSize: '24px',
              cursor: 'pointer'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            padding: '20px'
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <Link to="/" onClick={() => setIsMenuOpen(false)} style={{
                color: '#C28840',
                textDecoration: 'none',
                fontSize: '18px'
              }}>Home</Link>
              <Link to="/bio" onClick={() => setIsMenuOpen(false)} style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px'
              }}>Bio</Link>
              <Link to="/music" onClick={() => setIsMenuOpen(false)} style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px'
              }}>Music</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px'
              }}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("/attached_assets/ricardo upsclaed_1753392463500.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            Ricardo Scales
          </h1>

          <div style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '20px',
            fontStyle: 'italic'
          }}>
            Composer, Civic Virtuoso, Cultural Pillar
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces. His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that captivate audiences worldwide.
          </p>

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
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: "'Playfair Display', serif",
            color: 'white',
            marginBottom: '60px',
            fontWeight: '400'
          }}>
            A Legacy of Musical Excellence
          </h2>

          <div className="home-legacy-grid">
            <div className="legacy-quote">
              <blockquote className="legacy-blockquote">
                "Music is what I do; it's who I am. Each note carries the story of our collective journey, the rhythm of our shared humanity."
              </blockquote>
              <cite style={{
                fontSize: '1.1rem',
                color: 'white',
                fontWeight: '500'
              }}>
                — Ricardo Scales
              </cite>
            </div>

            <div className="legacy-text">
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: '1.7',
                marginBottom: '25px'
              }}>
                For over four decades, Ricardo Scales has been redefining the boundaries of musical expression. His innovative fusion of classical technique with jazz improvisation creates what he calls "third stream" music.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: '1.7'
              }}>
                From San Francisco's prestigious venues to intimate cultural gatherings, his performances bridge communities and inspire deep connections through the universal language of music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(194, 136, 64, 0.2)',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '2rem',
            fontFamily: "'Alex Brush', cursive",
            color: '#C28840',
            marginBottom: '20px'
          }}>
            Ricardo Scales
          </div>
          <div style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)'
          }}>
            © 2025 Ricardo Scales. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
