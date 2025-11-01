import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
// Import Tailwind's base styles (if you haven't already in index.css)
import './index.css';

// Import components based on your project structure
// Note the lowercase paths matching your tree
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Schedule from './components/schedule.jsx';
import About from './components/about.jsx';
import RevUpPage from './pages/RevUpPage.jsx'; // <-- 1. IMPORT RevUpPage HERE

// --- ASSUMING these files exist ---
// Your tree didn't list sponsors or footer, so I'm assuming the paths.
// Please adjust if your filenames are different!
import Sponsors from './components/sponsors.jsx'; 
import Footer from './components/footer.jsx'; // Assuming 'footer.jsx' based on your other files

function App() {
  return (
    // BrowserRouter wraps your entire application
    <BrowserRouter>
      {/* This main div provides the default dark theme.
        Remove 'App' if you don't use App.css
      */}
      <div className="App bg-gray-900 text-white min-h-screen font-sans">
        
        {/* Navbar is outside <Routes>, so it appears on every page */}
        <Navbar />
        
        <main>
          {/* <Routes> defines all the pages your app can render */}
          <Routes>
            {/* The "Home" page, which renders the Hero component */}
            <Route path="/" element={<Hero />} />
            
            {/* Other pages */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/revup" element={<RevUpPage />} /> {/* <-- 2. ADD THE ROUTE HERE */}
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            
            {/* A "Catch-all" 404 Not Found page */}
            <Route path="*" element={
              <div className="text-center py-20 px-4">
                <h1 className="text-3xl font-bold text-cyan-400">404 - Page Not Found</h1>
                <p className="text-gray-300 mt-4">Sorry, the page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        
        {/* Footer is also outside <Routes>, so it appears on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;