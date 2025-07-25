
import React from 'react';

function Bio() {
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
            textShadow: '0 8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(194, 136, 64, 0.6), 0 0 20px rgba(194, 136, 64, 0.3)',
            transform: 'rotate(-1deg)',
            position: 'relative',
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.7))'
          }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</a>
          </div>
          <nav style={{
            display: 'flex',
            gap: '35px'
          }}>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="/bio" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</a>
            <a href="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Music</a>
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

      {/* Hero Section with Black & White Performance Image */}
      <section style={{
        minHeight: '60vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("/attached_assets/piano_performance_bw.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 40px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Ricardo Scales
          </h1>
          <div style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            "The Black Liberace" • "The Black Prince"
          </div>
          <div style={{
            fontSize: '1.25rem',
            color: '#C28840',
            fontWeight: '500',
            letterSpacing: '2px'
          }}>
            PIANIST • COMPOSER • CULTURAL AMBASSADOR
          </div>
        </div>
      </section>

      {/* Main Bio Content */}
      <section style={{
        backgroundColor: '#000000',
        padding: '40px 40px 80px'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Gold Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #C28840, transparent)',
            margin: '0 auto 60px',
            maxWidth: '400px'
          }}></div>
          
          {/* Third Stream Music */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              Master of "Third Stream" Music
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px'
            }}>
              Ricardo Scales has spent over four decades redefining what it means to be a pianist in America. This conservatory trained virtuoso seamlessly weaves together classical precision, jazz improvisation, gospel soul, and R&B groove into what he calls "third stream" music, a revolutionary approach that has made him one of San Francisco's most beloved cultural figures.
            </p>
          </div>

          {/* The Hand That Wouldn't Quit */}
          <div style={{ 
            backgroundColor: '#1a1a1a',
            padding: '50px',
            borderRadius: '12px',
            marginBottom: '60px',
            borderLeft: '4px solid #C28840'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              The Hand That Wouldn't Quit
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)'
            }}>
              When Ricardo was just 19, a devastating accident paralyzed his left hand. Doctors were unanimous: his concert career was over before it began. But where others saw an ending, Ricardo saw a beginning. Rejecting medical opinion, he embarked on the most important performance of his life, teaching his lifeless fingers to dance across piano keys again. Through months of relentless self therapy, he achieved the impossible, restoring his hand to full strength and proving that some dreams refuse to die.
            </p>
          </div>

          {/* Where Legends Come to Play */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              Where Legends Come to Play
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px'
            }}>
              From 1982 to 1996, Ricardo transformed San Francisco's Redwood Room into the city's premier musical destination. Night after night, touring superstars would abandon their hotel rooms to join him at the piano. Billy Joel sliding onto the bench for impromptu duets, Harry Connick Jr. trading jazz riffs, Liza Minnelli bringing her theatrical magic. These weren't planned collaborations; they were musical pilgrimages to witness a master at work.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)'
            }}>
              His next chapter unfolded 19 floors above the city at the Top of the Mark, where for over two decades he became as much a part of San Francisco's skyline as the Golden Gate Bridge. Former Mayor Willie Brown recognized what the city already knew: Ricardo wasn't just performing in these venues, he was creating them.
            </p>
          </div>

          {/* The Presidential Pianist */}
          <div style={{
            backgroundColor: '#C28840',
            padding: '50px',
            borderRadius: '12px',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: 'white',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              The Presidential Pianist
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.95)'
            }}>
              Ricardo's artistry has graced the highest levels of American leadership, performing for seated U.S. Presidents and Vice President Kamala Harris. When former British Prime Minister Tony Blair wanted a private concert, he called Ricardo. This isn't just musical talent, it's cultural diplomacy at its finest, with Ricardo serving as America's unofficial musical ambassador to the world.
            </p>
          </div>

          {/* A Recording Empire */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              A Recording Empire Built Note by Note
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)'
            }}>
              With over 30 albums to his name, Ricardo has built more than a discography, he's created a musical empire. His 2007 release "I'm Here!" earned Billboard Latin Music Awards recognition, while his complete artistic control through DPMG Records and Bay Sound Records proves that great artists don't just make music, they make their own rules.
            </p>
          </div>

          {/* Community Savior */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '50px',
            borderRadius: '12px',
            marginBottom: '60px',
            borderLeft: '4px solid #C28840'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              Community Savior
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)'
            }}>
              In April 2025, when bureaucracy threatened to silence the Fillmore Jazz Festival forever, Ricardo stepped forward with a solution as elegant as his music. "The show will go on," he declared, transforming neighborhood churches into concert halls and proving that true artists don't just preserve culture, they create it anew when the world tries to take it away.
            </p>
          </div>

          {/* Living History */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400'
            }}>
              Living History
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px'
            }}>
              Today, Ricardo Scales embodies the bridge between San Francisco's golden entertainment era and its vibrant future. Every performance carries the weight of his mother's philanthropic legacy, the triumph over his career threatening injury, and the promise that great music and the communities it serves will always endure.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)'
            }}>
              His hands tell the story of American resilience. His music speaks the language of universal hope.
            </p>
          </div>

          {/* Quote */}
          <div style={{
            textAlign: 'center',
            padding: '60px 0',
            borderTop: '1px solid rgba(194, 136, 64, 0.3)',
            borderBottom: '1px solid rgba(194, 136, 64, 0.3)'
          }}>
            <blockquote style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: '#C28840',
              margin: '0 0 20px 0',
              lineHeight: '1.4'
            }}>
              "Music isn't just what I do, it's who I am, and who we all can become."
            </blockquote>
            <cite style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'normal'
            }}>
              —Ricardo Scales
            </cite>
          </div>

          {/* Contact Section */}
          <div style={{
            textAlign: 'center',
            padding: '60px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              Book Ricardo Scales
            </h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
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
                Book for Events
              </button>
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
                Latest Music
              </button>
            </div>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '30px',
              fontStyle: 'italic'
            }}>
              The legend continues with every note...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(194, 136, 64, 0.2)',
        padding: '60px 40px 40px',
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

export default Bio;
