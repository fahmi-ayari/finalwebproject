import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]); // State to store chat messages

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleNewUserMessage = (newMessage: string) => {
        if (!newMessage.trim()) return; // Avoid sending empty messages
    
        // Add the user's message to the chat window
        setMessages((prevMessages) => [...prevMessages, `User: ${newMessage}`]);
    
        // Send the message to the Rasa server
        fetch("http://0.0.0.0:5005", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sender: "user", // Unique user ID
                message: newMessage,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const botResponse = data[0]?.text || "I didn’t understand that.";
                    // Add the bot's response to the chat window
                    setMessages((prevMessages) => [...prevMessages, `Bot: ${botResponse}`]);
                } else {
                    // If no response is received
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        "Bot: Sorry, I didn’t understand that.",
                    ]);
                }
            })
            .catch((error) => {
                console.error("Error connecting to Rasa server:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    "Bot: Sorry, something went wrong.",
                ]);
            });
    };
    

    return (
        <div className="chatbot-container">
            {/* Chat window */}
            <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
                <div className="chat-header">
                    <span>Chatbot</span>
                    <button className="close-btn" onClick={toggleChat}>×</button>
                </div>
                <div className="chat-body">
                    <div className="messages">
                        {messages.map((message, index) => (
                            <p key={index}>{message}</p>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                                handleNewUserMessage(e.currentTarget.value);
                                e.currentTarget.value = ""; // Clear the input field
                            }
                        }}
                    />
                </div>
            </div>

            {/* Chat toggle button */}
            <button className="chat-toggle-btn" onClick={toggleChat}>
                💬
            </button>
        </div>
    );
};

export default Chatbot;
