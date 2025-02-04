import React, { useState } from "react";

export function RadioOpt() {
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Edit Resume", "Download Resume", "View Resume"];

  return (
    <div className="mt-4">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2 mb-2">
          <input
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-[12px] text-[#000000] font-medium">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioOpt;