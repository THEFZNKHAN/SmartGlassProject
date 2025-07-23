import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import toast from "react-hot-toast";

const API_KEY = '';

export default function ChatWithGrok() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

 const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", content: input, timestamp: new Date() };
  setMessages(prev => [...prev, userMsg]);
  setInput("");
  setIsTyping(true);

  try {
    const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDSP4oo8164ZdAfB0K4LeESFbJb6ntbxd4",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": "AIzaSyDSP4oo8164ZdAfB0K4LeESFbJb6ntbxd4"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: userMsg.content }
          ]
        }
      ]
    })
  }
);

    const data = await response.json();

    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      const aiMsg = {
        role: "assistant",
        content: data.candidates[0].content.parts[0].text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } else {
      toast.error("Failed to get a response from Gemini API.");
    }
  } catch (err) {
    toast.error("Error connecting to Gemini API.");
    console.error(err);
  }

  setIsTyping(false);
  inputRef.current.focus();
};
     

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-screen">
        <header className="sticky top-0 bg-gray-800 flex justify-between items-center px-4 py-3">
          <span className="text-xl font-bold">SmartGlass Grok Chat</span>
          <Link className="text-sm hover:underline" to="/dashboard">Home</Link>
        </header>

        <section className="flex-1 overflow-auto px-4 py-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.role === "user" ? "bg-blue-600" : "bg-gray-700"}`}>
                  {msg.content}
                  <div className="text-[10px] text-gray-400 mt-1 text-right">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="px-4 py-2 bg-gray-700 rounded-lg max-w-xs">
                SmartGlass is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </section>

        <footer className="sticky bottom-0 bg-gray-800 px-4 py-4">
          <form
            className="flex gap-2 max-w-2xl mx-auto"
            onSubmit={e => { e.preventDefault(); sendMessage(); }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
              ref={inputRef}
              autoComplete="off"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-4 py-2 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
}