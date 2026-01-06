import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <div
      className={`${className} bg-slate-900 flex items-center justify-center rounded-lg shadow-sm`}
    >
      <svg
        width="60%"
        height="60%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        {/* Cap Top */}
        <path
          d="M22 10L12 5L2 10L12 15L22 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-slate-900"
        />
        {/* Cap Bottom Lines */}
        <path
          d="M6 12V17C6 17.5 8 19 12 19C16 19 18 17.5 18 17V12"
          stroke="#3b82f6" // Brand Blue
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tassel */}
        <path
          d="M22 10V16"
          stroke="#3b82f6" // Brand Blue
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}