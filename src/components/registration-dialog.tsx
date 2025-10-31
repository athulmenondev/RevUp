"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RegistrationForm } from "./registration-form";
import { useState } from "react";

export function RegistrationDialog({ eventTitle }: { eventTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Register Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Register for {eventTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below to secure your spot.
          </DialogDescription>
        </DialogHeader>
        <RegistrationForm onFormSubmit={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
