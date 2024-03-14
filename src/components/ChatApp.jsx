// ChatApp.js
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ChatApp = ({current,setCurrentIndex,userName, setUserName, userAddress, setUserAadhar, userAadhar, setUserAddress, userDOB, setUserDOB, userEmployment, setUserEmployment, userIncome, setUserIncome}) => {
    const [inputText, setInputText] = useState('');
        
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there!', sender: 'user' },
    { id: 2, text: 'Hello! Please Enter Your Full Name.', sender: 'bot' }
  ]);

  const handleSubmit = () => {

  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: inputText, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputText('');

     
      if (inputText.trim().toLowerCase() === 'start') {
        setMessages([
          ...messages,
          { id: messages.length + 1, text: 'What is your name?', sender: 'bot' }
        ]);
      } else if (inputText.trim().toLowerCase() === 'end') {
        
        setMessages([]);
      } else if (userName === '') {
        setUserName(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Nice to meet you, ${inputText}!`, sender: 'bot' },
          { id: messages.length + 3, text: `What is your Date of Birth? Enter in the format (DD/MM/YYYY)`, sender: 'bot' }
        ]);
      } else if (userDOB === '') {
        setUserDOB(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Your DOB ( ${inputText} ) Has been noted.`, sender: 'bot' },
          { id: messages.length + 3, text: `What is your Address? `, sender: 'bot' }
        ]);
      } else if (userAddress === '') {
        setUserAddress(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Thank you, ${userName}! Your address "${inputText}" has been noted.`, sender: 'bot' },
          { id: messages.length + 3, text: 'Please Tell your Aadhar Number.', sender: 'bot' }
        ]);
      } else if (userAadhar === '') {
        setUserAadhar(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Thank you, ${userName}! Your Aadhar "${inputText}" has been noted.`, sender: 'bot' },
          { id: messages.length + 3, text: 'Please Enter your Type of Employment.', sender: 'bot' }
        ]);
      } else if (userEmployment === '') {
        setUserEmployment(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Your Employment Type ( "${inputText}" ) has been noted.`, sender: 'bot' },
          { id: messages.length + 3, text: 'Please Enter your Annual Income in Rs.', sender: 'bot' }
        ]);
      } else if (userIncome === '') {
        setUserIncome(inputText);
        setMessages([
          ...messages,
          {id: messages.lenght + 1, text: `${inputText}`,sender: 'user'},
          { id: messages.length + 2, text: `Your Annual Income ( "${inputText}" ) has been noted.`, sender: 'bot' },
          { id: messages.length + 3, text: 'Thank you for your kind response.', sender: 'bot' },
          { id: messages.length + 4, text: 'Please Procced For the Aadhar Verification.', sender: 'bot' }
        ]);
      } else {
        
      }
    }
  };

  return (
    <div className="w-full h-[80vh] flex flex-col overflow-y-scroll bg-gray-200 justify-between">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <form  className="flex p-4">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 focus:outline-none"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleMessageSubmit} type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Send
        </button>
        <button onClick={handleSubmit} type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChatApp;
