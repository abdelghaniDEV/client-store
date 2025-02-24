"use client";
import React, { useEffect, useState } from "react";



export default function Notification() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  if (!visible) return null;
  return <div>Notification</div>;
}
