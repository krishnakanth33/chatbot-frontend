import { useState } from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onSend(trimmedInput);
      setInput('');
    }
  };


  return (
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about me..."
          disabled={disabled}
          aria-label="Type your message"
        />
        <button 
          type="submit" 
          disabled={disabled || !input.trim()}
          aria-label="Send message"
        >
          {disabled ? 'Sending...' : 'Send'}
        </button>
      </form>
    
  );
};

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default MessageInput;