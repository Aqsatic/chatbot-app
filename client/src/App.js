import { useState } from 'react';
import './App.css';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className="app-content">
        <h1>Welcome to Our Website</h1>
        <p>This is a demo page with a chatbot widget in the bottom right corner.</p>
        <p>Click the chat button to ask questions!</p>
      </div>

      <ChatWidget isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
