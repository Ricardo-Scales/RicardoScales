import React from 'react';
import { Link } from 'react-router-dom';

function Music() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white',
      fontFamily: "'Helvetica Neue', Arial, sans-serif"
    }}>
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '28px',
            fontFamily: "'Alex Brush', cursive",
            color: '#1db954',
            fontWeight: '400'
          }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</Link>
          </div>
          <nav style={{
            display: 'flex',
            gap: '32px'
          }}>
            <Link to="/" style={{
              color: '#b3b3b3',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: '#b3b3b3',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: '#1db954',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Music</Link>
            <Link to="#videos" style={{
              color: '#b3b3b3',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Videos</Link>
            <Link to="/contact" style={{
              color: '#b3b3b3',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Artist Header */}
      <section style={{
        paddingTop: '80px',
        background: 'linear-gradient(180deg, #1db954 0%, #121212 100%)',
        padding: '80px 24px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '24px',
          paddingBottom: '24px'
        }}>
          <div style={{
            width: '232px',
            height: '232px',
            borderRadius: '50%',
            backgroundColor: '#282828',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '48px',
            boxShadow: '0 4px 60px rgba(0,0,0,.5)'
          }}>
            RS
          </div>

          <div>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: '12px',
              fontWeight: '700',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Artist</p>
            <h1 style={{
              margin: '0 0 24px 0',
              fontSize: 'clamp(32px, 6vw, 96px)',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1.1'
            }}>Ricardo Scales</h1>
            <p style={{
              margin: '0',
              fontSize: '16px',
              color: '#b3b3b3',
              fontWeight: '400'
            }}>2.1M monthly listeners</p>
          </div>
        </div>
      </section>

      {/* Action Bar */}
      <section style={{
        backgroundColor: '#121212',
        padding: '24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <button style={{
            backgroundColor: '#1db954',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            <div style={{
              width: '0',
              height: '0',
              borderLeft: '12px solid white',
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              marginLeft: '2px'
            }}></div>
          </button>

          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #535353',
            borderRadius: '4px',
            padding: '8px 16px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Following</button>

          <div style={{
            color: '#b3b3b3',
            fontSize: '32px',
            cursor: 'pointer'
          }}>⋯</div>
        </div>
      </section>

      {/* Popular Tracks */}
      <section style={{
        backgroundColor: '#121212',
        padding: '0 24px 32px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: '0 0 16px 0'
          }}>Popular</h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {[
              { rank: 1, title: "I'm Here!", plays: "12,345,678", duration: "4:32" },
              { rank: 2, title: "Third Stream Dreams", plays: "8,123,456", duration: "5:18" },
              { rank: 3, title: "San Francisco Nights", plays: "6,789,012", duration: "4:45" },
              { rank: 4, title: "Redwood Room Memories", plays: "5,234,567", duration: "6:12" },
              { rank: 5, title: "Top of the Mark", plays: "4,567,890", duration: "5:22" }
            ].map((track, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '16px 1fr auto auto',
                gap: '16px',
                alignItems: 'center',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ffffff1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                <span style={{
                  color: '#b3b3b3',
                  fontSize: '16px',
                  fontWeight: '400'
                }}>{track.rank}</span>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#282828',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#1db954'
                  }}>RS</div>
                  <div>
                    <div style={{
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '4px'
                    }}>{track.title}</div>
                    <div style={{
                      color: '#b3b3b3',
                      fontSize: '14px'
                    }}>Ricardo Scales</div>
                  </div>
                </div>

                <span style={{
                  color: '#b3b3b3',
                  fontSize: '14px'
                }}>{track.plays}</span>

                <span style={{
                  color: '#b3b3b3',
                  fontSize: '14px'
                }}>{track.duration}</span>
              </div>
            ))}
          </div>

          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#b3b3b3',
            fontSize: '14px',
            fontWeight: '700',
            padding: '8px 0',
            cursor: 'pointer',
            marginTop: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Show all</button>
        </div>
      </section>

      {/* Albums */}
      <section style={{
        backgroundColor: '#121212',
        padding: '0 24px 32px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              margin: '0'
            }}>Albums</h2>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#b3b3b3',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Show all</button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: "I'm Here!", year: "2007", cover: "IH" },
              { title: "The Black Prince", year: "2005", cover: "BP" },
              { title: "Top of the Mark", year: "2010", cover: "TM" },
              { title: "Cultural Ambassador", year: "2015", cover: "CA" },
              { title: "Fillmore Revival", year: "2025", cover: "FR" },
              { title: "Legacy Collection", year: "2020", cover: "LC" }
            ].map((album, index) => (
              <div key={index} style={{
                backgroundColor: '#181818',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#282828'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#181818'}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: '#1db954',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '900',
                  color: 'white',
                  marginBottom: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,.5)'
                }}>{album.cover}</div>

                <h3 style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>{album.title}</h3>

                <p style={{
                  color: '#b3b3b3',
                  fontSize: '14px',
                  margin: '0'
                }}>{album.year} • Album</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{
        backgroundColor: '#121212',
        padding: '0 24px 48px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: '0 0 16px 0'
          }}>About</h2>

          <div style={{
            backgroundColor: '#181818',
            borderRadius: '8px',
            padding: '24px',
            display: 'flex',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#282828',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '48px',
            }}>RS</div>

            <div>
              <p style={{
                color: 'white',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0 0 16px 0'
              }}>
                Known as "The Black Liberace," Ricardo Scales has captivated audiences for over four decades with his virtuoso piano performances and innovative musical arrangements that blend classical, jazz, and contemporary styles.
              </p>
              <p style={{
                color: '#b3b3b3',
                fontSize: '14px',
                margin: '0'
              }}>
                2.1M monthly listeners • 847K followers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Music;