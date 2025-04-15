import { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { FaAngleDown } from "react-icons/fa";
import './index.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about the candidate's resume.", sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openChatbot, setChatbot] = useState(false);

  const handleSendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://chatbot-backend-1-ytrb.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userInput }]
        })
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  const chatbotBtn = () => {
    setChatbot(prev => !prev)
  }

  return (
    <>
    
      <div className="chatbot-container">
        {!openChatbot?<button className='chatbotBtn' onClick={chatbotBtn}>Chatbot</button>:
        <>
          <FaAngleDown onClick={chatbotBtn} className='downAngle'/>
          <MessageList messages={messages} isLoading={isLoading} />
          {error && <div className="error-message">{error}</div>}
          <MessageInput 
            onSend={handleSendMessage} 
            disabled={isLoading} 
          />
        </>
        }
      </div>
    
    </>
  );
};

export default Chatbot;