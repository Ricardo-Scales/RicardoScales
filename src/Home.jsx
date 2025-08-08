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
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="home-logo">
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="home-desktop-nav">
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="home-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("/attached_assets/476309616_1144645414332615_8348618865407374253_n_1753392146607.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 20px 60px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '800px'
          }}>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 6vw, 4rem)',
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
              color: '#C28840',
              marginBottom: '25px',
              fontWeight: '700',
              lineHeight: '1.2',
              letterSpacing: '0',
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              whiteSpace: 'normal',
              hyphens: 'none',
              WebkitHyphens: 'none'
            }}>
              Ricardo Scales: Composer, Civic Virtuoso, Cultural Pillar
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.125rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '35px',
              lineHeight: '1.6',
              maxWidth: '100%',
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
              whiteSpace: 'normal',
              hyphens: 'none',
              WebkitHyphens: 'none'
            }}>
              Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces.
              His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that
              captivate audiences worldwide.
            </p>

            <div className="button-container" style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}>
                Book an Event
              </button>

              <button style={{
                backgroundColor: 'transparent',
                color: '#C28840',
                border: '2px solid #C28840',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#C28840';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#C28840';
              }}>
                Explore Music
              </button>
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(194, 136, 64, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* Legacy Section */}
      <section style={{
        backgroundColor: '#C28840',
        padding: '60px 20px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <h2 className="legacy-title">
            A Legacy of Musical Excellence
          </h2>

          <div className="home-legacy-grid">
            <div className="legacy-quote">
              <blockquote style={{
                borderLeft: '4px solid rgba(255,255,255,0.3)',
                paddingLeft: '20px',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                lineHeight: '1.6',
                marginBottom: '20px',
                color: 'rgba(255,255,255,0.95)'
              }}>
                "Music is what I do; it's who I am. Each note carries the story of our collective journey, the rhythm of our shared humanity."
              </blockquote>

              <cite style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'normal',
                display: 'block'
              }}>
                — Ricardo Scales
              </cite>
            </div>

            <div className="legacy-text">
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.95)'
              }}>
                For over three decades, Ricardo Scales has been an influential force in the music world, seamlessly blending jazz, gospel, and classical traditions. As a civic virtuoso, he has dedicated his talents to cultural enrichment, performing at prestigious venues while maintaining deep community connections.
              </p>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.95)'
              }}>
                His work transcends entertainment—it preserves cultural heritage while pushing artistic boundaries. Ricardo's compositions have scored civic celebrations, historical commemorations, and intimate gatherings, each performance infused with his signature sophistication and emotional depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section style={{
        backgroundColor: '#1a1a1a',
        padding: '100px 20px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: '400'
          }}>
            Musical Journey
          </h2>

          <div className="home-journey-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '250px',
                background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("/attached_assets/0 0 10 300 dpi for conversion (2023_01_11 05_44_32 UTC)_1753419956252.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px 12px 0 0'
              }}>
              </div>
              <div style={{
                padding: window.innerWidth <= 768 ? '20px 15px' : '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '20px',
                  color: 'white',
                  fontWeight: '600',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}>
                  Early Beginnings
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: "'Inter', sans-serif",
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal'
                }}>
                  Ricardo's musical journey began at age five, studying classical piano before discovering his passion for jazz improvisation. His formative years were marked by rigorous training and mentorship from legendary performers.
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '250px',
                background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("/attached_assets/RS Yoshi 300 dpi_1753419975695.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px 12px 0 0'
              }}>
              </div>
              <div style={{
                padding: window.innerWidth <= 768 ? '20px 15px' : '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '20px',
                  color: 'white',
                  fontWeight: '600',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}>
                  Rise to Prominence
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: "'Inter', sans-serif",
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal'
                }}>
                  Throughout the 1990s, Ricardo established himself as a distinctive voice in contemporary jazz, releasing acclaimed albums and collaborating with industry luminaries while developing his characteristic fusion style.
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '250px',
                background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("/attached_assets/RS by RKS  300 dpi (1)_1753419950459.jpg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px 12px 0 0'
              }}>
              </div>
              <div style={{
                padding: window.innerWidth <= 768 ? '0' : '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '20px',
                  color: 'white',
                  fontWeight: '600'
                }}>
                  Cultural Leadership
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.9)',
                  margin: '0',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Today, Ricardo stands as a cultural pillar, balancing international performances with music education initiatives and civic engagement projects that bring artistic excellence to diverse communities. His leadership extends beyond the stage, fostering the next generation of musicians while preserving the rich traditions that define our cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid rgba(194, 136, 64, 0.2)',
        padding: '60px 20px 40px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '36px',
            fontFamily: "'Alex Brush', cursive",
            color: '#C28840',
            marginBottom: '30px',
            textShadow: '0 4px 8px rgba(194, 136, 64, 0.3)'
          }}>
            Ricardo Scales
          </div>

          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(194, 136, 64, 0.3), transparent)',
            margin: '30px 0',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}></div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)'
          }}>
            <p style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif"
            }}>
              © 2025 Ricardo Scales. All rights reserved.
            </p>

            <div style={{
              height: '20px',
              width: '1px',
              backgroundColor: 'rgba(194, 136, 64, 0.3)'
            }}></div>

            <p style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic'
            }}>
              Designed by <span style={{ color: '#C28840' }}>Marchitechs</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;