import { progress } from "framer-motion";
import { useEffect, useState } from "react";
import { FC } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full p-0 rounded-lg">
      <div className="w-full bg-blue-200 rounded-full h-[5px]">
        <div
          className="bg-[#5047E5] h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[#717171] text-[14px] font-normal">Progress</span>
        <span className="text-black font-bold text-sm">{progress}%</span>
      </div>
    </div>
  );
};

// Example Usage:
export default function App() {
  const [progress, setProgress] = useState(75);

  return (
    <div className="space-y-4">
      <ProgressBar progress={progress} />
    </div>
  );
}