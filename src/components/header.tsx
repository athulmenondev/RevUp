import { Car } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-accent fill-accent" />
          <span className="text-xl font-bold tracking-tight font-headline">
            EEE VTS SBC NSSCE
          </span>
        </Link>
        <nav>
          {/* Future navigation links can go here */}
        </nav>
      </div>
    </header>
  );
}
