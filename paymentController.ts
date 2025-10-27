import { Request, Response } from 'express';
import { getRazorpayInstance } from '../utils/razorpay';

export async function createRazorpayOrder(req: Request, res: Response) {
  try {
    const { amount, currency } = req.body; // amount in INR, currency
    const razorpay = getRazorpayInstance();
    const options = {
      amount: amount * 100, // paise
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Razorpay order", details: error });
  }
}