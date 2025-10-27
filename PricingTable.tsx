import React from "react";

export const PricingTable = ({ region }: { region: "IN" | "INTL" }) => {
  const prices = region === "IN"
    ? { weekly: "₹99", monthly: "₹299", annual: "₹999" }
    : { weekly: "$10", monthly: "$49", annual: "$99" };
  return (
    <div className="aura-pricing-table">
      <div className="pricing-row">
        <span className="plan-title">Weekly Diet Plan</span>
        <span className="plan-price neon">{prices.weekly}</span>
      </div>
      <div className="pricing-row">
        <span className="plan-title">Monthly Subscription</span>
        <span className="plan-price neon">{prices.monthly}</span>
      </div>
      <div className="pricing-row">
        <span className="plan-title">Annual Subscription</span>
        <span className="plan-price neon">{prices.annual}</span>
      </div>
    </div>
  );
};