import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/createOrder', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.REACT_APP_RAZORPAY_KEY_ID, // Access key from .env
            key_secret: process.env.RAZORPAY_KEY_SECRET,   // Access secret from .env
        });

        const options = {
            amount: req.body.amount * 100, // Amount in smallest currency unit (paise)
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`,
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send('Some error occurred');

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/verifyPayment', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest('hex');

    if (generatedSignature === razorpay_signature) {
        res.json({ status: "success" });
    } else {
        res.json({ status: "failure" });
    }
});

export default router;
