
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-600/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-serif text-yellow-600">
              Ricardo Scales
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#story" className="hover:text-yellow-600 transition-colors">My Story</a>
              <a href="#tour" className="hover:text-yellow-600 transition-colors">Final Tour</a>
              <a href="#bookings" className="hover:text-yellow-600 transition-colors">Bookings</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-yellow-600 mb-6 elegant-fade">
            Ricardo Scales
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            The Black Liberace • San Francisco's Musical Soul
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Five decades after doctors said I'd never play piano again, I'm taking my final bow on America's greatest stages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 text-black px-8 py-3 rounded hover:bg-yellow-500 transition-colors font-semibold">
              My Journey
            </button>
            <button className="border border-yellow-600 text-yellow-600 px-8 py-3 rounded hover:bg-yellow-600 hover:text-black transition-colors font-semibold">
              Final Tour Dates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
