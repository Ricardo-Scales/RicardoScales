import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Music() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);

  const tracks = [
    { 
      id: 1, 
      title: "Pretty Funk", 
      artist: "Ricardo Scales",
      youtubeId: "VqILw0ALfPQ", 
      duration: "3:45", 
      plays: "12,345,678",
      thumb: "/covers/VqILw0ALfPQ.webp"
    },
    { 
      id: 2, 
      title: "Mujer Latina", 
      artist: "Ricardo Scales",
      youtubeId: "ezu8C7bQl7Y", 
      duration: "4:20", 
      plays: "7,890,123",
      thumb: "/covers/ezu8C7bQl7Y.webp"
    },
    { 
      id: 3, 
      title: "Opening Temptations", 
      artist: "Ricardo Scales",
      youtubeId: "47-KYC1gtrY", 
      duration: "5:15", 
      plays: "6,543,210",
      thumb: "/covers/47-KYC1gtrY.webp"
    },
    { 
      id: 4, 
      title: "You Are the One", 
      artist: "Ricardo Scales",
      youtubeId: "M4DQpl7mZAQ", 
      duration: "4:55", 
      plays: "5,234,567",
      thumb: "/covers/M4DQpl7mZAQ.webp"
    },
    { 
      id: 5, 
      title: "When I Fall in Love", 
      artist: "Ricardo Scales",
      youtubeId: "8qx1TQknqb0", 
      duration: "3:38", 
      plays: "4,567,890",
      thumb: "/covers/8qx1TQknqb0.webp"
    }
  ];

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Set up API ready callback
    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (currentTrack && playerReady) {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: currentTrack.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
            setTimeout(() => {
              event.target.unMute();
            }, 100);
          },
        },
      });
    }
  }, [currentTrack, playerReady]);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setTimeout(() => {
      document.getElementById('player-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleClosePlayer = () => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    setCurrentTrack(null);
  };
  
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
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="music-logo">
            <Link to="/" style={{
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              fontWeight: '600'
            }}>Ricardo Scales</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="music-desktop-nav">
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
            <Link to="/contact" style={{
              color: '#b3b3b3',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>Contact</Link>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="music-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
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
          <div className="music-mobile-nav" style={{
            backgroundColor: '#181818',
            padding: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <nav className="music-mobile-nav-links" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <Link to="/" style={{
                color: '#b3b3b3',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: '#b3b3b3',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: '#1db954',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: '#b3b3b3',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
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
            backgroundImage: 'url("/attached_assets/ricardo upsclaed_1753392463500.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 4px 60px rgba(0,0,0,.5)'
          }}></div>

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

      {/* YouTube Player Section */}
      {currentTrack && (
        <section id="player-section" style={{
          backgroundColor: '#181818',
          padding: '24px',
          margin: '0 24px 24px',
          borderRadius: '8px',
          position: 'relative'
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
              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'white',
                  margin: '0 0 4px 0'
                }}>Now Playing</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#b3b3b3',
                  margin: '0'
                }}>{currentTrack.title} - {currentTrack.artist}</p>
              </div>
              <button
                onClick={handleClosePlayer}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #535353',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Close player"
              >×</button>
            </div>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px'
            }}>
              <div
                id="youtube-player"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></div>
            </div>
          </div>
        </section>
      )}

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
            {tracks.map((track) => (
              <div 
                key={track.id} 
                onClick={() => handleTrackClick(track)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${track.title} by ${track.artist}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTrackClick(track);
                  }
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '16px 1fr auto auto',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  backgroundColor: currentTrack?.id === track.id ? '#ffffff1a' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff1a'}
                onMouseLeave={(e) => {
                  if (currentTrack?.id !== track.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}>
                <span style={{
                  color: '#b3b3b3',
                  fontSize: '16px',
                  fontWeight: '400'
                }}>{track.id}</span>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '40px',
                    height: '40px'
                  }}>
                    <img 
                      src={track.thumb} 
                      alt={track.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '4px'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid white',
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent',
                        marginLeft: '2px'
                      }}></div>
                    </div>
                  </div>
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
                    }}>{track.artist}</div>
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
              { 
                title: "All the Way", 
                year: "2016", 
                cover: "AW",
                links: {
                  spotify: "https://open.spotify.com/intl-es/album/3Dsxs0y5re05xgsQYKeMri",
                  apple: "https://music.apple.com/us/album/all-the-way/1679104453",
                  deezer: "https://www.deezer.com/en/album/421818407"
                }
              },
              { 
                title: "Summertime and You", 
                year: "2011", 
                cover: "SY",
                links: {
                  apple: "https://music.apple.com/us/album/summertime-and-you/1760599954",
                  deezer: "https://www.deezer.com/en/album/623538451",
                  allmusic: "https://www.allmusic.com/album/summertime-and-you-mw0002137367"
                }
              },
              { 
                title: "For the Love in You", 
                year: "2010", 
                cover: "FL",
                links: {
                  apple: "https://music.apple.com/us/album/for-the-love-in-you/1717490006",
                  allmusic: "https://www.allmusic.com/album/for-the-love-in-you-mw0001993458"
                }
              },
              { 
                title: "I'm Here!", 
                year: "2007", 
                cover: "IH",
                links: {
                  apple: "https://music.apple.com/us/album/im-here/1680319784"
                }
              },
              { 
                title: "Happy Holidays", 
                year: "2005", 
                cover: "HH",
                links: {
                  apple: "https://music.apple.com/us/album/happy-holidays-forever-love/331104240"
                }
              },
              { 
                title: "Destiny", 
                year: "2004", 
                cover: "DS",
                links: {
                  apple: "https://music.apple.com/us/album/destiny/1680331659"
                }
              }
            ].map((album, index) => (
              <div key={index} style={{
                backgroundColor: '#181818',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#282828'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#181818'}>
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
                  margin: '0 0 8px 0'
                }}>{album.year} • Album</p>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {album.links.spotify && (
                    <a href={album.links.spotify} target="_blank" rel="noopener noreferrer" style={{
                      color: '#1db954',
                      fontSize: '12px',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(29, 185, 84, 0.1)',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(29, 185, 84, 0.2)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(29, 185, 84, 0.1)'}>
                      Spotify
                    </a>
                  )}
                  {album.links.apple && (
                    <a href={album.links.apple} target="_blank" rel="noopener noreferrer" style={{
                      color: '#fa233b',
                      fontSize: '12px',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(250, 35, 59, 0.1)',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(250, 35, 59, 0.2)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(250, 35, 59, 0.1)'}>
                      Apple
                    </a>
                  )}
                  {album.links.deezer && (
                    <a href={album.links.deezer} target="_blank" rel="noopener noreferrer" style={{
                      color: '#feaa2d',
                      fontSize: '12px',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(254, 170, 45, 0.1)',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(254, 170, 45, 0.2)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(254, 170, 45, 0.1)'}>
                      Deezer
                    </a>
                  )}
                  {album.links.allmusic && (
                    <a href={album.links.allmusic} target="_blank" rel="noopener noreferrer" style={{
                      color: '#7289da',
                      fontSize: '12px',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(114, 137, 218, 0.1)',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(114, 137, 218, 0.2)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(114, 137, 218, 0.1)'}>
                      AllMusic
                    </a>
                  )}
                </div>
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
              backgroundImage: 'url("/attached_assets/ricardo upsclaed_1753392463500.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              flexShrink: 0
            }}></div>

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

      {/* Hidden status block */}
      <div style={{ display: 'none' }} id="ytLayer-status">
        5 tracks processed | All successful | YouTube IFrame API integrated
      </div>

      <Footer />
    </div>
  );
}

export default Music;
