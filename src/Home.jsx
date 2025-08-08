
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
            style={{
              display: 'none',
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
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            fontStyle: 'italic'
          }}>
            "The Black Liberace" • "The Black Prince"
          </div>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
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
              Listen Now
            </Link>
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
              Book Event
            </Link>
          </div>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section style={{
        backgroundColor: '#111111',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: '400'
          }}>
            A Musical Journey
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {/* Card 1 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5832_1754679855455.png" 
                alt="Early Years" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Early Virtuoso
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Rising from conservatory training to overcome a career-threatening hand injury, Ricardo's determination established him as a formidable pianist.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5833_1754679855455.png" 
                alt="Third Stream" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Third Stream Pioneer
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Developing his signature fusion style, blending classical precision with jazz innovation and cultural depth.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5834_1754679855454.png" 
                alt="Cultural Ambassador" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Cultural Ambassador
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Performing for U.S. Presidents and international leaders, becoming America's musical ambassador to the world.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5837_1754679855454.png" 
                alt="Living Legend" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Living Legend
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Continuing to innovate and inspire, recently saving the Fillmore Jazz Festival and preserving cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section style={{
        backgroundColor: '#222222',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '40px',
            fontWeight: '400'
          }}>
            A Legacy of Excellence
          </h2>
          
          <blockquote style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.8',
            marginBottom: '30px',
            borderLeft: '4px solid #C28840',
            paddingLeft: '30px',
            textAlign: 'left'
          }}>
            "I've dedicated my life to breaking down barriers through music. When they said a young Black pianist couldn't make it in the classical world, I proved them wrong. Music isn't just what I do—it's who I am."
          </blockquote>
          
          <cite style={{
            fontSize: '1.1rem',
            color: '#C28840',
            fontWeight: '500'
          }}>
            — Ricardo Scales
          </cite>
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
