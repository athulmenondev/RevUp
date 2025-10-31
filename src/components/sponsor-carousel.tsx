"use client";

import { cn } from "@/lib/utils";
import React from "react";

const BrandLogo1 = () => (
  <svg
    viewBox="0 0 100 32"
    height="32"
    width="100"
    className="h-8 w-auto text-muted-foreground"
    fill="currentColor"
  >
    <path d="M0 0L40 32H0V0Z M60 0L100 32V0H60Z" />
  </svg>
);

const BrandLogo2 = () => (
  <svg
    viewBox="0 0 100 32"
    height="32"
    width="100"
    className="h-8 w-auto text-muted-foreground"
    fill="currentColor"
  >
    <circle cx="16" cy="16" r="12" />
    <circle cx="50" cy="16" r="16" fillOpacity="0.5" />
    <circle cx="84" cy="16" r="12" />
  </svg>
);

const BrandLogo3 = () => (
  <svg
    viewBox="0 0 100 32"
    height="32"
    width="100"
    className="h-8 w-auto text-muted-foreground"
    fill="currentColor"
  >
    <rect x="0" y="0" width="20" height="32" />
    <rect x="25" y="0" width="50" height="14" />
    <rect x="25" y="18" width="50" height="14" />
    <rect x="80" y="0" width="20" height="32" />
  </svg>
);

const BrandLogo4 = () => (
  <svg
    viewBox="0 0 100 32"
    height="32"
    width="100"
    className="h-8 w-auto text-muted-foreground"
    fill="currentColor"
  >
    <path d="M50 0L100 32H0L50 0Z" />
  </svg>
);
const BrandLogo5 = () => (
  <svg
    viewBox="0 0 100 32"
    height="32"
    width="100"
    className="h-8 w-auto text-muted-foreground"
    fill="currentColor"
  >
    <path d="M0 16 A 1 1 0 0 1 100 16" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M0 16 L100 16" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);


const sponsors = [
  { name: "Sponsor 1", logo: <BrandLogo1 /> },
  { name: "Sponsor 2", logo: <BrandLogo2 /> },
  { name: "Sponsor 3", logo: <BrandLogo3 /> },
  { name: "Sponsor 4", logo: <BrandLogo4 /> },
  { name: "Sponsor 5", logo: <BrandLogo5 /> },
];

export function SponsorCarousel() {
  return (
    <div
      className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <div className="flex w-max animate-scroll">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-20 flex items-center justify-center"
            title={sponsor.name}
          >
            {sponsor.logo}
          </div>
        ))}
      </div>
    </div>
  );
}