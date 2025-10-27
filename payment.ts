export function getPaymentGateway(region: "IN" | "INTL") {
  if (region === "IN") {
    // Razorpay integration (client-side)
    return "razorpay";
  }
  // Stripe or PayPal for USD/international
  return "stripe";
}