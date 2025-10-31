import Link from "next/link";

const VtsLogo = () => (
  <svg
    width="120"
    height="50"
    viewBox="0 0 160 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-foreground"
  >
    <g fill="currentColor">
      {/* IEEE part */}
      <path d="M0 0 H 15 V 5 H 0 V 0 M 0 7 H 15 V 12 H 0 V 7 M 0 14 H 15 V 19 H 0 V 14" />
      <path d="M17 0 H 22 V 19 H 17 V 0 M 24 0 H 29 V 19 H 24 V 0 M 31 0 H 36 V 19 H 31 V 0" />
      {/* Lines */}
      <path d="M0 21 H 80 V 22 H 0 V 21 M 0 24 H 80 V 25 H 0 V 24 M 0 27 H 80 V 28 H 0 V 27" />
      {/* VTS */}
      <path d="M17 30 L 35 55 L 53 30 H 43 L 35 45 L 27 30 H 17 Z" />
      <path d="M55 30 H 65 V 45 H 75 V 30 H 85 V 55 H 55 V 30 Z" />
      <path d="M88 30 C 105 30 110 55 95 55 C 90 55 88 52 88 50 L 88 45 C 93 45 95 47 98 47 C 103 47 103 40 98 40 L 92 40 V 35 H 98 C 101 35 101 32 98 32 C 95 32 93 34 88 34 V 30 M 105 30 C 122 30 118 55 105 55 C 100 55 98 52 98 50 V 48 H 110 V 55 H 120 V 30 H 110 V 42 H 98 V 32 C 100 30 102 30 105 30" transform="translate(10, 0)" />
    </g>
    <text
      x="80"
      y="60"
      font-family="Arial, sans-serif"
      font-size="6"
      fill="currentColor"
      text-anchor="middle"
    >
      Connecting the Mobile World
    </text>
  </svg>
);


export function Header() {
  return (
    <header className="bg-card shadow-md border-b border-border fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <VtsLogo />
          <span className="text-sm font-semibold tracking-tight font-headline text-muted-foreground whitespace-nowrap">
            SBC NSSCE
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</Link>
          <Link href="/#events" className="text-muted-foreground hover:text-primary transition-colors font-medium">Events</Link>
          <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
        </nav>
      </div>
    </header>
  );
}
