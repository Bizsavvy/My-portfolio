"use client";
import { useState, useEffect } from "react";

function getWAT(): string {
  const now = new Date();
  const wat = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 3600000);
  return (
    "Abuja " +
    String(wat.getHours()).padStart(2, "0") +
    ":" +
    String(wat.getMinutes()).padStart(2, "0") +
    ":" +
    String(wat.getSeconds()).padStart(2, "0")
  );
}

export function useClock(): string {
  const [time, setTime] = useState("Abuja 00:00:00");

  useEffect(() => {
    setTime(getWAT());
    const id = setInterval(() => setTime(getWAT()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
