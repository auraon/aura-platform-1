import React, { useState } from "react";
import { PricingTable } from "./components/PricingTable";
import { RazorpayButton } from "./components/RazorpayButton";
import { StripeButton } from "./components/StripeButton";
import { ProgressChart } from "./components/ProgressChart";
import { FloatingTagline } from "./components/FloatingTagline";
import { FloatingIcons } from "./components/FloatingIcons";

export default function App() {
  const [region, setRegion] = useState<"IN" | "INTL">("IN");
  const pricing = region === "IN"
    ? { weekly: 99, monthly: 299, annual: 999, currency: "INR" }
    : { weekly: 10, monthly: 49, annual: 99, currency: "USD" };

  return (
    <div className="aura-bg">
      <header>
        <img src="/aura-logo.png" alt="Aura Logo" className="logo-animated" />
        <FloatingTagline />
        <div className="region-toggle">
          <button
            className={`toggle-btn ${region === "IN" ? "active" : ""}`}
            onClick={() => setRegion("IN")}
          >
            <span className="on-switch"></span> India
          </button>
          <button
            className={`toggle-btn ${region === "INTL" ? "active" : ""}`}
            onClick={() => setRegion("INTL")}
          >
            <span className="on-switch"></span> International
          </button>
        </div>
      </header>
      <main>
        <FloatingIcons />
        <section className="pricing-section">
          <PricingTable region={region} />
          {region === "IN" ? (
            <RazorpayButton amount={pricing.weekly} description="Weekly Diet Plan" />
          ) : (
            <StripeButton amount={pricing.weekly} description="Weekly Diet Plan" />
          )}
        </section>
        <section className="progress-section">
          <ProgressChart data={[24, 22.5, 22, 21.8, 21.5, 21.2]} />
        </section>
        <section className="quick-links">
          <a className="aura-btn" href="#calculators">Health Calculators</a>
          <a className="aura-btn" href="#workout">Workout</a>
          <a className="aura-btn" href="#yoga">Yoga & Mindfulness</a>
          <a className="aura-btn" href="#skincare">Skincare</a>
          <a className="aura-btn" href="#consult">Consultations</a>
        </section>
      </main>
    </div>
  );
}