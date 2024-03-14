// ChatMessage.js
import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={message.sender === 'user' ? 'text-right mb-2' : 'mb-2'}>
      <div className={message.sender === 'user' ? 'bg-blue-500 text-white rounded p-2 inline-block max-w-3/4' : 'bg-gray-300 rounded p-2 inline-block max-w-3/4'}>
        {message.sender === 'user' ? `You: ${message.text}` : message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
