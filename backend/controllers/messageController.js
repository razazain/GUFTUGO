const asyncHandler = require("express-async-handler");
const Message = require("../Models/messageModels")
const User = require("../Models/userModel")
const Chat = require("../Models/chatModels")

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        console.log("❌ Invalid data passed into request:", { content, chatId });
        return res.status(400).json({ message: "Invalid request data" });
    }

    const newMessage = {
        sender: req.user?._id,
        content: content,
        chat: chatId,
    };

    try {
        let message = await Message.create(newMessage);

        message = await message.populate("sender", "name pic");
        message = await message.populate("chat");
        message = await User.populate(message, {
            path: "chat.users",
            select: "name pic email",
        });

        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

        res.json(message);
    } catch (error) {
        console.error("🚨 Error sending message:", error.message, error.stack); // ✅ Log error
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});














module.exports = { sendMessage, allMessages }













