import React from 'react';
import './App.css';
import Button from './components/button';

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="./comnica_logo.png" alt="Company Logo" className="logo" />
      </header>
      <img src="./laptop.png" alt="laptop" className="laptop"/>
      <div className="background">
        <div className="text-container">
            <div className="title-text">
              Comnica Signature
            </div>
            <div className="description-text">
              Digizális aláíró szolgáltatás a Comnicától
            </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="side-bar-text-container">
          <div className="side-bar-title">
            Üdvözlöm a <br/>Comnica Signature-ben!
          </div>
          <div className="side-bar-description">
            A következőkben végigvezetjük dokumentumai elfogadásában és aláírásán. A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.
          </div>
          <Button text="KEZDHETJÜK" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
