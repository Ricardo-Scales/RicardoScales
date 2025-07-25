import React from 'react';
import './App.css';

function App() {
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
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '52px',
            fontFamily: "'Alex Brush', cursive",
            color: '#C28840',
            fontWeight: '400',
            letterSpacing: '2px',
            textShadow: '0 3px 8px rgba(194, 136, 64, 0.4), 0 0 15px rgba(194, 136, 64, 0.2)',
            transform: 'rotate(-1deg)',
            position: 'relative'
          }}>
            Ricardo Scales
          </div>
          <nav style={{
            display: 'flex',
            gap: '35px'
          }}>
            <a href="#home" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="#bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</a>
            <a href="#tour" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Tour</a>
            <a href="#music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Music</a>
            <a href="#merch" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Merch</a>
            <a href="#videos" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Videos</a>
            <a href="#contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("/attached_assets/476309616_1144645414332615_8348618865407374253_n_1753392146607.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
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
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces. 
              His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that 
              captivate audiences worldwide.
            </p>

            <div style={{
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

        {/* Decorative overlay */}
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
        padding: '100px 40px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left side - Quote */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '400',
              lineHeight: '1.3',
              marginBottom: '40px',
              color: 'white'
            }}>
              A Legacy of Musical Excellence
            </h2>

            <blockquote style={{
              borderLeft: '4px solid rgba(255,255,255,0.3)',
              paddingLeft: '30px',
              fontSize: '1.125rem',
              fontStyle: 'italic',
              lineHeight: '1.6',
              marginBottom: '20px',
              color: 'rgba(255,255,255,0.95)',
              margin: '0 0 20px 0'
            }}>
              "Music is what I do; it's who I am. Each note carries the story of our collective journey, the rhythm of our shared humanity."
            </blockquote>

            <cite style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'normal'
            }}>
              — Ricardo Scales
            </cite>
          </div>

          {/* Right side - Biography text */}
          <div>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              marginBottom: '30px',
              color: 'rgba(255,255,255,0.95)'
            }}>
              For over three decades, Ricardo Scales has been an influential force in the music world, 
              seamlessly blending jazz, gospel, and classical traditions. As a civic virtuoso, he has 
              dedicated his talents to cultural enrichment, performing at prestigious venues while 
              maintaining deep community connections.
            </p>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.95)'
            }}>
              His work transcends entertainment—it preserves cultural heritage while pushing 
              artistic boundaries. Ricardo's compositions have scored civic celebrations, historical 
              commemorations, and intimate gatherings, each performance infused with his 
              signature sophistication and emotional depth.
            </p>
          </div>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section style={{
        backgroundColor: '#1a1a1a',
        padding: '100px 40px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            textAlign: 'center',
            marginBottom: '80px',
            fontWeight: '400'
          }}>
            Musical Journey
          </h2>

          {/* First row - Early Beginnings and Rise to Prominence */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '40px'
          }}>
            {/* Early Beginnings Card */}
            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '250px',
                background: 'linear-gradient(45deg, #C28840, #8B6914)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'white'
              }}>
                🎹
              </div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  Early Beginnings
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Ricardo's musical journey began at age five, studying classical piano before discovering his passion for jazz improvisation. His formative years were marked by rigorous training and mentorship from legendary performers.
                </p>
              </div>
            </div>

            {/* Rise to Prominence Card */}
            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '250px',
                background: 'linear-gradient(45deg, #8B4513, #CD853F)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'white'
              }}>
                🎺
              </div>
              <div style={{
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  Rise to Prominence
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Throughout the 1990s, Ricardo established himself as a distinctive voice in contemporary jazz, releasing acclaimed albums and collaborating with industry luminaries while developing his characteristic fusion style.
                </p>
              </div>
            </div>
          </div>

          {/* Second row - Cultural Leadership (full width) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px'
          }}>
            {/* Cultural Leadership Card - Full Width */}
            <div style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignItems: 'center'
            }}>
              <div style={{
                height: '300px',
                background: 'linear-gradient(45deg, #4A4A4A, #C28840)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                color: 'white'
              }}>
                🎭
              </div>
              <div style={{
                padding: '40px'
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '25px',
                  color: 'white'
                }}>
                  Cultural Leadership
                </h3>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Today, Ricardo stands as a cultural pillar, balancing international performances with music education initiatives and civic engagement projects that bring artistic excellence to diverse communities. His leadership extends beyond the stage, fostering the next generation of musicians while preserving the rich traditions that define our cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;