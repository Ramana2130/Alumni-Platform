import express from 'express';
import Message from '../models/messagemodels.js';

const router = express.Router();

router.get('/messages/:sender/:receiver', async (req, res) => {
    try {
        const { sender, receiver } = req.params;
        const messages = await Message.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        }).sort('timestamp');
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});