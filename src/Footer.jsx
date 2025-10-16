import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '30px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0',
          fontFamily: "'Inter', sans-serif"
        }}>
          © {new Date().getFullYear()} Ricardo Scales. All Rights Reserved. Built by{' '}
          <a 
            href="https://marchtechs.builders" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#C28840',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#d49a4d'}
            onMouseLeave={(e) => e.target.style.color = '#C28840'}
          >
            Marchitechs
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
