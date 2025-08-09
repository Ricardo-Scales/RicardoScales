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
            <Link to="/" style={{
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              fontWeight: '600'
            }}>Ricardo Scales</Link>
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
        backgroundPosition: 'center top',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          padding: '0 20px',
          textAlign: 'left'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '30px',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Ricardo Scales: Composer, Civic Virtuoso, Cultural Pillar
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            lineHeight: '1.6',
            fontFamily: "'Inter', sans-serif",
            maxWidth: '800px'
          }}>
            Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces. His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that captivate audiences worldwide.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
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
        padding: '60px 20px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="legacy-container">
            <div className="legacy-left">
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '30px',
                fontWeight: '400',
                lineHeight: '1.2'
              }}>
                Legacy of Musical Excellence
              </h2>

              <div style={{
                padding: 'clamp(20px, 4vw, 30px)',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                borderLeft: '4px solid white',
                backdropFilter: 'blur(10px)'
              }}>
                <blockquote style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                  fontStyle: 'italic',
                  color: 'white',
                  lineHeight: '1.7',
                  margin: '0 0 15px 0'
                }}>
                  "When legends like Billy Joel and Harry Connick Jr. abandon their hotel rooms to join you at the piano, you know you've transcended performance and entered the realm of musical pilgrimage."
                </blockquote>
                <cite style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)',
                  fontStyle: 'normal'
                }}>
                  — San Francisco Chronicle
                </cite>
              </div>
            </div>

            <div className="legacy-right">
              <p style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '25px',
                fontFamily: "'Inter', sans-serif"
              }}>
                For over four decades, Ricardo Scales has redefined what it means to be a pianist in America. This conservatory-trained virtuoso seamlessly weaves together classical precision, jazz improvisation, gospel soul, and R&B groove.
              </p>

              <p style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '25px',
                fontFamily: "'Inter', sans-serif"
              }}>
                From San Francisco's legendary Redwood Room to the Top of the Mark, Ricardo has transformed intimate venues into cultural landmarks. His performances for U.S. Presidents and international dignitaries have established him as America's unofficial musical ambassador.
              </p>

              <p style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.95)',
                fontFamily: "'Inter', sans-serif"
              }}>
                With over 30 albums and Billboard recognition, Ricardo continues to bridge generations through the universal language of music, proving that true artistry transcends all boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section style={{
        backgroundColor: '#000000',
        padding: '100px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '60px',
            textAlign: 'center',
            fontWeight: '400'
          }}>
            Musical Journey
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {/* Early Beginnings */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url("/attached_assets/Untitled design (50)_1753418865395.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontFamily: "'Playfair Display', serif",
                  color: '#C28840',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  Early Beginnings
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.7',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Ricardo's musical journey began at age five, studying classical piano before discovering his passion for jazz improvisation. His formative years were marked by rigorous training and mentorship from legendary artists.
                </p>
              </div>
            </div>

            {/* Rise to Prominence */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url("/attached_assets/RS Yoshi 300 dpi_1753419975695.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontFamily: "'Playfair Display', serif",
                  color: '#C28840',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  Rise to Prominence
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.7',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Throughout the 1990s, Ricardo established himself as a distinctive voice in contemporary jazz, releasing acclaimed albums and collaborating with industry luminaries while developing his characteristic fusion style.
                </p>
              </div>
            </div>

            {/* Cultural Leadership */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url("/attached_assets/ricardo upsclaed_1753392463500.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontFamily: "'Playfair Display', serif",
                  color: '#C28840',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  Cultural Leadership
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.7',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Today, Ricardo stands as a cultural pillar, balancing international performances with music education initiatives and civic engagement projects that bring artistic excellence to diverse communities.
                </p>
              </div>
            </div>

            {/* Legacy Continues */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url("/attached_assets/0 0 10 300 dpi for conversion (2023_01_11 05_44_32 UTC)_1753419956252.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontFamily: "'Playfair Display', serif",
                  color: '#C28840',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  Legacy Continues
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.7',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  As a composer, civic virtuoso, and cultural pillar, Ricardo's influence resonates through every performance, every student mentored, and every community touched by his artistry. His dedication continues to inspire new generations of musicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;