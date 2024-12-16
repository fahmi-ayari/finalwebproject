import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]); // State to store chat messages

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleNewUserMessage = async (newMessage: string) => {
        if (!newMessage.trim()) return; // Avoid sending empty messages

        // Add the user's message to the chat window
        setMessages((prevMessages) => [...prevMessages, `User: ${newMessage}`]);

        try {
            // Send the message to the Rasa server
            const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sender: "user", // Unique user ID
                    message: newMessage,
                }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Rasa response:", data); // Debug: Log the response

            if (data && data.length > 0) {
                const botResponse = data[0]?.text || "I didn’t understand that.";
                console.log("Bot's response to display:", botResponse); // Log the bot's message

                // Update messages state
                setMessages((prevMessages) => {
                    const updatedMessages = [...prevMessages, `Bot: ${botResponse}`];
                    console.log("Updated messages state:", updatedMessages); // Debug the state update
                    return updatedMessages;
                });
            } else {
                console.log("No valid response received from Rasa.");
                setMessages((prevMessages) => [
                    ...prevMessages,
                    "Bot: Sorry, I didn’t understand that.",
                ]);
            }
        } catch (error) {
            console.error("Error connecting to Rasa server:", error); // Debug: Log the error
            setMessages((prevMessages) => [
                ...prevMessages,
                "Bot: Sorry, something went wrong. Please try again later.",
            ]);
        }
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
                        {messages.map((message, index) => {
                            const isUserMessage = message.startsWith("User:");
                            return (
                                <p
                                    key={index}
                                    className={isUserMessage ? "user-message" : "bot-message"}
                                >
                                    {message.replace("User: ", "").replace("Bot: ", "")}
                                </p>
                            );
                        })}
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


