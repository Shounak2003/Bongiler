import React from 'react';
import './App.css';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bongiler</h1>
      </header>
      <ScrollProgressBar />
      <main>
        <section id="install">
          <h2>Check out Bong Compiler</h2>
          <button id="install-btn" onClick={() => window.location.href = 'https://github.com/Shounak2003/Bong-Compiler'}>Go to Bong Compiler</button>
        </section>
        <section id="about">
          <h2>About the Bong Compiler</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo pretium varius. Suspendisse potenti. Praesent interdum ante et ex varius, vel convallis ligula bibendum. Donec eget velit eu ex facilisis convallis et et purus. Sed venenatis volutpat sem, ut pharetra mi fermentum eget. Cras tempor ligula vel ipsum vulputate, non scelerisque risus aliquam. Phasellus sit amet posuere eros.</p>
        </section>
        <section id="video-panel">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" frameborder="0" allowfullscreen></iframe>
        </section>
        <section id="documentation">
          <h2>Documentation</h2>
          <input type="text" id="search-bar" placeholder="Search documentation..." />
          <div id="docs-content">
            <h3>Getting Started</h3>
            <p>To start using the Bong compiler, follow these instructions...</p>
            <h3>Syntax</h3>
            <p>Bong language syntax overview...</p>
            <!-- More documentation content -->
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
