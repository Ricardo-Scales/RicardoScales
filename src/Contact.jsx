import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: 'white',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
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
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: '#C28840',
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
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: '#C28840',
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

      {/* Main Contact Section */}
      <section style={{
        backgroundColor: '#0a0a0a',
        padding: '120px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="contact-grid">
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontFamily: "'Playfair Display', serif",
                color: '#C28840',
                marginBottom: '40px',
                fontWeight: '400'
              }}>
                Book Ricardo Scales
              </h2>

              <div style={{ marginBottom: '50px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'white',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Performance Inquiries
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  For concert bookings, private events, corporate functions, and special performances.
                </p>
                <a href="mailto:booking@ricardoscales.com" style={{
                  color: '#C28840',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  booking@ricardoscales.com
                </a>
              </div>

              <div style={{ marginBottom: '50px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'white',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Media & Press
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Interview requests, media kits, and press inquiries.
                </p>
                <a href="mailto:press@ricardoscales.com" style={{
                  color: '#C28840',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  press@ricardoscales.com
                </a>
              </div>

              <div style={{ marginBottom: '50px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'white',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Management
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Professional representation and career management.
                </p>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.7'
                }}>
                  <p style={{ margin: '0 0 10px 0' }}>Elite Artist Management</p>
                  
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '50px',
              borderRadius: '12px',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                marginBottom: '30px',
                fontWeight: '400'
              }}>
                Send a Message
              </h3>

              <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '6px',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '6px',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Event Type
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: '#000000',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    <option value="">Select an option</option>
                    <option value="concert">Concert Performance</option>
                    <option value="private">Private Event</option>
                    <option value="corporate">Corporate Function</option>
                    <option value="wedding">Wedding</option>
                    <option value="gala">Gala/Fundraiser</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '6px',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: "'Playfair Display', serif",
                      resize: 'vertical'
                    }}
                    placeholder="Please include event date, location, duration, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#C28840',
                    color: 'white',
                    border: 'none',
                    padding: '18px 40px',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '20px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#A67234';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#C28840';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section style={{
        backgroundColor: '#C28840',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontFamily: "'Playfair Display', serif",
            color: 'white',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            "Music is the universal language that connects us all"
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            Thank you for your interest in working with Ricardo Scales. We look forward to creating magical musical moments together.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Contact;