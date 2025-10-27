import React from "react";

export const StripeButton = ({ amount, description }: { amount: number, description: string }) => {
  const handlePay = () => {
    // Stripe/PayPal integration logic goes here
    alert(`Stripe/PayPal payment for $${amount} - ${description}`);
    // See Stripe/PayPal docs for actual integration
  };

  return (
    <button className="aura-btn neon" onClick={handlePay}>
      Pay with Stripe/PayPal
    </button>
  );
};