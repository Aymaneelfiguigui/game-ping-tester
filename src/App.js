import logo from './logo.svg';
import './App.css';
import { Meter } from './components/Meter';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [ping, setPing] = useState(0);
  const [isTesting, setIsTesting] = useState(false);

  const  preformTest = async () => {
    setIsTesting(true);
    try {
      const response = await axios.get('http://localhost:3001/ping')
      setPing(response.data.ping)
      console.log("ping", response.data.ping)
      console.log("response", response)
    
    }
    catch(error) {
      console.log("error", error)
    }
    setIsTesting(false);
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={preformTest} disabled={isTesting}>
        {isTesting ? 'Testing Ping...' : 'Test Ping'}
      </button>
      
      <Meter value={ping} />
  
      </header>
    </div>
  );
}

export default App;
