import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: 'white', 
      fontFamily: "'Inter', sans-serif"
    }}>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.95)',
        borderBottom: '1px solid rgba(194, 136, 64, 0.2)',
        zIndex: 1000,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            fontWeight: '500',
            animation: 'fadeInLeft 0.8s ease-out'
          }}>
            Ricardo Scales
          </div>
          <nav style={{
            display: 'flex', 
            gap: '40px',
            animation: 'fadeInRight 0.8s ease-out'
          }}>
            <a href="#story" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '16px',
              transition: 'all 0.3s ease',
              borderBottom: '2px solid transparent'
            }}>My Story</a>
            <a href="#tour" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '16px',
              transition: 'all 0.3s ease',
              borderBottom: '2px solid transparent'
            }}>Final Tour</a>
            <a href="#bookings" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '16px',
              transition: 'all 0.3s ease',
              borderBottom: '2px solid transparent'
            }}>Bookings</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: