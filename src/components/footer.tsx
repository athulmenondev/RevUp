import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card mt-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} IEEE Student Branch. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
