"use client";

import { cn } from "@/lib/utils";

export const RevUpLogo = ({ className }: { className?: string }) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 400 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-foreground", className)}
  >
    <g fill="currentColor">
      {/* REVUP Text */}
      <path d="M50 150 L 50 180 L 80 180 L 80 170 L 60 170 L 60 160 L 80 160 L 80 150 Z" />
      <path d="M90 150 L 120 150 L 120 180 L 90 180 Z M 100 160 L 110 160 V 170 L 100 170 Z" />
      <path d="M130 150 L 160 150 L 160 160 L 140 180 L 130 180 Z M 140 160 L 150 160 L 140 170 Z" />
      <path d="M170 150 L 200 150 L 200 180 L 170 180 Z M 180 160 L 190 160 V 170 L 180 170 Z" />
      <path d="M210 150 L 240 150 L 240 180 L 210 180 Z M 220 160 L 230 160 V 170 L 220 170 Z" />
      
      {/* Speedometer */}
      <path d="M100 100 A 80 80 0 0 1 260 100 L 250 110 A 70 70 0 0 0 110 110 Z" />
      
      {/* Speedometer ticks */}
      <path d="M105 95 L 115 85 L 120 90 L 110 100 Z" />
      <path d="M125 75 L 135 65 L 140 70 L 130 80 Z" />
      <path d="M150 60 L 160 50 L 165 55 L 155 65 Z" />
      <path d="M180 50 L 190 40 L 195 45 L 185 55 Z" />
      <path d="M210 50 L 220 40 L 225 45 L 215 55 Z" />
      <path d="M240 60 L 250 50 L 255 55 L 245 65 Z" />
      <path d="M265 75 L 275 65 L 280 70 L 270 80 Z" />
      <path d="M285 95 L 295 85 L 300 90 L 290 100 Z" />

      {/* Needle */}
      <path d="M180 100 L 230 70 L 225 65 Z" />

      {/* Flames */}
      <path d="M260 100 C 280 90, 290 70, 310 60 C 300 80, 290 90, 270 105 C 280 100, 290 95, 300 90" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M270 105 C 290 95, 300 75, 320 65 C 310 85, 300 95, 280 110 C 290 105, 300 100, 310 95" stroke="currentColor" strokeWidth="2" fill="none" />
    </g>
  </svg>
);
