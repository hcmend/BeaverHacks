import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BlockMath, InlineMath } from 'react-katex';
import { GoogleGenAI } from '@google/genai';
import 'katex/dist/katex.min.css';  // Make sure to import KaTeX styles

const PageOne = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize GoogleGenAI with your API key
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputMessage) return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: inputMessage }
    ]);

    // Send the message to Gemini AI API
    setLoading(true);
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',      // Choose the appropriate Gemini model
        contents: `Explain the following mathematical concept using Markdown and LaTeX: ${inputMessage}`,
      });

      // Add the AI's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: response.text }
      ]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: "Sorry, something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Gemini AI Chat</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {/* Render Markdown and LaTeX content properly */}
            <ReactMarkdown
              children={message.text}
              components={{
                // Use BlockMath for block LaTeX expressions
                code({node, inline, className, children, ...props}) {
                  const match = /math\s*(\S+)/.exec(className || '')
                  return match ? <BlockMath math={String(children).replace(/\n$/, '')}/> : <code {...props}>{children}</code>
                }
              }}
            />
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Send</button>
      </form>
    </div>
  );
};

export default PageOne;
