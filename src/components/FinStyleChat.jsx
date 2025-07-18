import React, { useEffect, useState, useRef } from 'react';
import './FinStyleChat.css';

const FinStyleChat = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! Welcome to GTS 👋 How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const currentIndex = useRef(0);
  const hasStarted = useRef(false);
  const chatRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
  const sequence = [
    { from: 'user', text: "What are your main features?" },
    { from: 'bot',  text: "GTSBOT offers a full Developer Console for vector indexing, prompt and model control, real-time customization, multimodal input, voice commands, and smart caching with content hashing." },
    { from: 'user', text: "What’s your most popular plan pricing?" },
    { from: 'bot',  text: "Our most popular plan is $999/month." },
    { from: 'user', text: "How can I book a demo?" },
    { from: 'bot',  text: "Just go to our website, open the Contact page, click 'Book Demo', fill in your details — our team will reach out soon." }

  ];

  const typeInInputBox = async (text, done) => {
    for (let i = 0; i <= text.length; i++) {
      setInputValue(text.slice(0, i));
      await new Promise(r => setTimeout(r, 50));
    }
    await new Promise(r => setTimeout(r, 300));
    done();
  };

  /** plays the sequence once, then calls restart() */
  const playSequence = () => {
    const showNext = () => {
      /* finished this run? restart after 2 s */
      if (currentIndex.current >= sequence.length) {
        setTimeout(restart, 2000);
        return;
      }

      const msg = sequence[currentIndex.current];

      if (msg.from === 'user') {
        typeInInputBox(msg.text, () => {
          setMessages(prev => [...prev, msg]);
          setInputValue('');
          currentIndex.current++;
          setTimeout(showNext, 1200);
        });
      } else {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, msg]);
          currentIndex.current++;
          setTimeout(showNext, 1200);
        }, 1000);
      }
    };

    /* kick off first step */
    showNext();
  };

  /** clears chat and starts over */
  const restart = () => {
    currentIndex.current = 0;
    setMessages([
      { from: 'bot', text: "Hello! Welcome to GTS 👋 How can I help you today?" }
    ]);
    playSequence();
  };

  /* start once component is in view (keeps your intersection logic) */
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        playSequence();
      }
    },
    { threshold: 0.5 }
  );

  if (chatRef.current) observer.observe(chatRef.current);
  return () => chatRef.current && observer.unobserve(chatRef.current);
}, []);


  return (
    <div>
      <div className="chat-widget-background"
      style={{
    background: "url('/background.gif') no-repeat center center fixed",
    backgroundSize: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    zIndex: -1,
  }}
      />
      <div className="chat-widget-container" ref={chatRef}>
        <div className="chat-box">
          <div className="chat-header-letsgo">
            <span className="bots-name">GTSBOT</span>
            <div className="chat-header-icons">
              <span className="chat-header-icon">↻</span>
              <span className="chat-header-icon">×</span>
            </div>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble bot typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>
          <div className="chats-footer">
            <div className="chats-input-container">
              <input className="chats-input-field" placeholder="Message..." value={inputValue} disabled />
              <button className="sends-button">➤</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinStyleChat;
