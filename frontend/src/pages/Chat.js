import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [Chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);
  const fetchChats = async () => {
    try {
      const response = await axios.get("/api/chat");
      setChats(response.data);
    } catch (err) {
      console.error("Error in fetching chats ", err);
    }
  };

  return (
    <div>
      {Chats.map((Chat) => (
        <div key={Chat._id}> CHAT: {Chat.chatName} </div>
      ))}
    </div>
  );
};

export default Chat;
