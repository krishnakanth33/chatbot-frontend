import PropTypes from 'prop-types';

const MessageList = ({ messages, isLoading }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`message ${message.sender}`}
          aria-live={message.sender === 'bot' ? 'polite' : 'off'}
        >
          {message.text}
        </div>
      ))}
      {isLoading && (
        <div className="message bot loading">
          <span className="typing-indicator">• • •</span>
        </div>
      )}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MessageList;