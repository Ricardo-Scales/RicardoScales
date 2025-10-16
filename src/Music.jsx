import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Music() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [musicData, setMusicData] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [player, setPlayer] = useState(null);
  const apiReadyPromiseRef = useRef(
    new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
      } else {
        window.onYouTubeIframeAPIReady = () => {
          resolve();
          delete window.onYouTubeIframeAPIReady;
        };

        if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
      }
    })
  );
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    fetch('/music.json')
      .then(res => res.json())
      .then(data => setMusicData(data))
      .catch(err => console.error('Error loading music data:', err));

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
        setPlayer(null);
      }
    };
  }, []);

  const createPlayer = async (track) => {
    await apiReadyPromiseRef.current;

    if (playerInstanceRef.current) {
      playerInstanceRef.current.loadVideoById(track.youtubeId);
      return;
    }

    const newPlayer = new window.YT.Player('youtube-player', {
      height: '100%',
      width: '100%',
      videoId: track.youtubeId,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
          setTimeout(() => event.target.unMute(), 1000);
        }
      }
    });
    playerInstanceRef.current = newPlayer;
    setPlayer(newPlayer);
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
    createPlayer(track);
  };

  const closePlayer = () => {
    if (player) {
      player.stopVideo();
    }
    setCurrentTrack(null);
  };

  const formatViews = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <Link to="/" style={{
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.8rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #d4af37, #f4e5b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Ricardo Scales</Link>
          </div>
          
          <nav style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
            <Link to="/" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Contact</Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >☰</button>
        </div>

        {isMenuOpen && (
          <div style={{
            backgroundColor: '#0a0a0a',
            padding: '20px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="mobile-nav">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/" onClick={() => setIsMenuOpen(false)} style={{
                color: '#999',
                textDecoration: 'none',
                fontSize: '16px'
              }}>Home</Link>
              <Link to="/bio" onClick={() => setIsMenuOpen(false)} style={{
                color: '#999',
                textDecoration: 'none',
                fontSize: '16px'
              }}>Bio</Link>
              <Link to="/music" onClick={() => setIsMenuOpen(false)} style={{
                color: '#d4af37',
                textDecoration: 'none',
                fontSize: '16px'
              }}>Music</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{
                color: '#999',
                textDecoration: 'none',
                fontSize: '16px'
              }}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <main style={{ paddingTop: '80px', maxWidth: '1400px', margin: '0 auto', padding: '100px 24px 48px' }}>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #d4af37, #f4e5b0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Music Videos</h1>
        <p style={{ color: '#999', marginBottom: '40px', fontSize: '16px' }}>
          Click any track to watch and listen
        </p>

        {currentTrack && (
          <div role="region" aria-label="Now Playing" style={{
            marginBottom: '40px',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0
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
              />
            </div>
            <div style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#151515'
            }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                  {currentTrack.title}
                </div>
                <div style={{ fontSize: '14px', color: '#999' }}>
                  {currentTrack.artist} • {currentTrack.duration}
                </div>
              </div>
              <button
                onClick={closePlayer}
                aria-label="Close player"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {musicData.map((track, index) => (
            <div
              key={index}
              onClick={() => playTrack(track)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${track.title} by ${track.artist}`}
              onKeyPress={(e) => { if (e.key === 'Enter') playTrack(track); }}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(212, 175, 55, 0.2)';
                e.currentTarget.querySelector('.play-overlay').style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                e.currentTarget.querySelector('.play-overlay').style.opacity = '0';
              }}
            >
              <div style={{ position: 'relative', paddingBottom: '100%' }}>
                <img
                  src={track.thumb}
                  srcSet={`${track.thumb} 320w, ${track.thumb} 640w`}
                  sizes="(max-width: 640px) 320px, 640px"
                  alt={`${track.title} cover`}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  className="play-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#d4af37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderLeft: '20px solid white',
                      borderTop: '12px solid transparent',
                      borderBottom: '12px solid transparent',
                      marginLeft: '4px'
                    }}></div>
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>{track.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#999',
                  marginBottom: '8px'
                }}>{track.artist}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#666'
                }}>
                  <span>{track.duration}</span>
                  <span>{formatViews(track.views)} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Music;
