import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: { type: String, required: true }, // Student's or Alumni's name
    receiver: { type: String, required: true }, // Student or Alumni ID
    content: { type: String, required: true }, // Message content
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
