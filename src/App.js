import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to ThinkBack.ai!');

  useEffect(() => {
    document.title = `ThinkBack Demo - Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage(`You've clicked ${count + 1} times!`);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Counter reset! Welcome to ThinkBack.ai!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 ThinkBack.ai Demo</h1>
        <p>{message}</p>
        
        <div className="counter-section">
          <h2>Interactive Counter</h2>
          <div className="counter-display">
            <span className="count">{count}</span>
          </div>
          
          <div className="button-group">
            <button onClick={handleIncrement} className="btn btn-primary">
              Increment (+1)
            </button>
            <button onClick={handleReset} className="btn btn-secondary">
              Reset
            </button>
          </div>
        </div>

        <div className="features">
          <h3>✨ Features Demonstrated:</h3>
          <ul>
            <li>✅ Live Preview with Hot Reload</li>
            <li>✅ Real-time Code Editing</li>
            <li>✅ Responsive Design Testing</li>
            <li>✅ Browser Development Environment</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;