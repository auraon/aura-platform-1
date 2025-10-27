import React from "react";
import { FaAppleAlt, FaDumbbell, FaSpa, FaHeartbeat, FaUserMd } from "react-icons/fa";

const iconList = [
  <FaAppleAlt key="apple" />,
  <FaDumbbell key="dumbbell" />,
  <FaSpa key="spa" />,
  <FaHeartbeat key="heartbeat" />,
  <FaUserMd key="doctor" />,
];

export const FloatingIcons = () => (
  <div className="floating-icons-container">
    {iconList.map((icon, idx) => (
      <div
        key={idx}
        className="aura-floating-icon neon"
        style={{
          fontSize: 38 + idx * 2,
          margin: "0 18px",
          animationDelay: `${idx * 0.3}s`
        }}
      >
        {icon}
      </div>
    ))}
  </div>
);