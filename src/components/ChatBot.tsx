import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  avatar?: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const initialMessage = {
    text: "Hi! I'm Sarah, your virtual assistant. Do you have any questions about our services? I'm here to help! 😊",
    isUser: false,
    timestamp: new Date(),
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([initialMessage]);
      }, 500);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        text: newMessage,
        isUser: true,
        timestamp: new Date(),
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
      };
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      
      // Simulate bot response with typing delay
      setTimeout(() => {
        setIsTyping(false);
        const botMessage: Message = {
          text: getBotResponse(newMessage),
          isUser: false,
          timestamp: new Date(),
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
    }
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I assist you today? 😊";
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return "We offer a wide range of services including web development, mobile apps, and digital marketing. Which area interests you the most?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our pricing varies based on project requirements. Would you like to schedule a free consultation to discuss your specific needs?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return "You can reach us through email at contact@atc-tech.com or call us at +1 (555) 123-4567. Would you like me to connect you with our team?";
    } else if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "I understand you're interested in learning more. Could you please provide more details about what you're looking for? This will help me assist you better.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs"
          >
            <div className="flex items-start gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                alt="Sarah"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-gray-800">Sarah</h4>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close popup"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-sm text-gray-600">Hi there! 👋 Do you have any questions about our services? I'm here to help!</p>
                <button 
                  onClick={() => {
                    setShowPopup(false);
                    setIsOpen(true);
                  }}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Let's chat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button/Window */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {!isOpen ? (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Let's Chat
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt="Sarah"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-semibold">Sarah</h3>
                    <p className="text-xs text-blue-100">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-blue-700 p-1 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-end gap-2 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {!message.isUser && (
                      <img 
                        src={message.avatar}
                        alt="Sarah"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.isUser && (
                      <img 
                        src={message.avatar}
                        alt="You"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-end gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                      alt="Sarah"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ChatBot;