import React from "react";

export const RazorpayButton = ({ amount, description }: { amount: number, description: string }) => {
  const handlePay = () => {
    // Razorpay integration logic goes here
    alert(`Razorpay payment for ₹${amount} - ${description}`);
    // See Razorpay docs for actual integration
  };

  return (
    <button className="aura-btn neon" onClick={handlePay}>
      Pay with Razorpay
    </button>
  );
};