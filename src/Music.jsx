
import React from 'react';

function Music() {
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
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</a>
            <a href="/music" style={{
              color: '#C28840',
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

      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("/attached_assets/ricardo upsclaed_1753392463500.png")',
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
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            MUSIC
          </h1>
          <div style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            A Legacy of Musical Excellence
          </div>
        </div>
      </section>

      {/* Featured Album Section */}
      <section style={{
        backgroundColor: '#0a0a0a',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            "I'M HERE!" OUT NOW
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '40px'
          }}>
            Listen to "I'm Here!" and other hit songs from Ricardo Scales
          </p>
          
          {/* Featured Album Player Mockup */}
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '500px',
            margin: '0 auto',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#C28840',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                RS
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'white',
                  margin: '0 0 5px 0'
                }}>
                  I'm Here!
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0
                }}>
                  Ricardo Scales
                </p>
              </div>
            </div>
            
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <span>1. I'm Here!</span>
                <span>04:32</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <span>2. Third Stream Dreams</span>
                <span>05:18</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <span>3. San Francisco Nights</span>
                <span>04:45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section style={{
        backgroundColor: '#000000',
        padding: '80px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: '400'
          }}>
            DISCOGRAPHY
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {/* Album 1 - I'm Here! */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#C28840',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  IH
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    I'm Here!
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2007 • Billboard Latin Music Awards
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>I'm Here!</span>
                  <span>04:32</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Third Stream Dreams</span>
                  <span>05:18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>San Francisco Nights</span>
                  <span>04:45</span>
                </div>
              </div>
            </div>

            {/* Album 2 - The Black Prince */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#8B4513',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  BP
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    The Black Prince
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2005 • Classical Jazz Fusion
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Redwood Room Memories</span>
                  <span>06:12</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Presidential Suite</span>
                  <span>05:45</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>The Hand That Healed</span>
                  <span>07:33</span>
                </div>
              </div>
            </div>

            {/* Album 3 - Top of the Mark */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#4A5568',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  TM
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    Top of the Mark
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2010 • Live Collection
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>19 Floors Above</span>
                  <span>04:56</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>City Lights Serenade</span>
                  <span>05:22</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Golden Gate Blues</span>
                  <span>06:08</span>
                </div>
              </div>
            </div>

            {/* Album 4 - Cultural Ambassador */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#2D3748',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  CA
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    Cultural Ambassador
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2015 • International Anthology
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Diplomatic Waltz</span>
                  <span>05:33</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Blair's Private Concert</span>
                  <span>06:45</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Harris Administration</span>
                  <span>04:28</span>
                </div>
              </div>
            </div>

            {/* Album 5 - Fillmore Revival */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#9B2C2C',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  FR
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    Fillmore Revival
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2025 • Community Savior
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>The Show Must Go On</span>
                  <span>05:12</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Church Hall Sessions</span>
                  <span>04:37</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Community Spirit</span>
                  <span>06:23</span>
                </div>
              </div>
            </div>

            {/* Album 6 - Legacy Collection */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#C28840',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  LC
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#C28840',
                    margin: '0 0 5px 0'
                  }}>
                    Legacy Collection
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    2020 • Greatest Hits
                  </p>
                </div>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Four Decades Strong</span>
                  <span>07:15</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Mother's Philanthropy</span>
                  <span>05:58</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Living History</span>
                  <span>06:42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: '#C28840',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Playfair Display', serif",
            color: 'white',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            Experience the Music
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px'
          }}>
            Discover over 30 albums of musical excellence spanning four decades of artistic innovation
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#C28840',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit'
            }}>
              Stream Now
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
            }}>
              Purchase Albums
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0a0a0a',
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

export default Music;
