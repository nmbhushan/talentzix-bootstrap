"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function OTPInput({ length = 6, onChange }) {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange && onChange(newOtp.join(""));
    
    // Automatically focus the next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length).split("");
    const newOtp = Array(length).fill("");
    pasteData.forEach((char, i) => {
      if (/^\d$/.test(char)) newOtp[i] = char;
    });
    setOtp(newOtp);
    onChange && onChange(newOtp.join(""));
  };

  return (
    <div className="block w-full max-w-[410px] mx-auto">
      <div className="flex space-x-2 justify-center mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-10 h-10 h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0 text-center"
            />
          ))}
      </div>
    <Link href='/login' className="block" passHref>
        <Button type="submit" className="h-[52px] rounded-[8px] bg-[#6144A5] font-medium text-[20px] text-white text-center w-[100%] mt-3">
            Verify Now
        </Button>
    </Link>
    </div>
  );
}
