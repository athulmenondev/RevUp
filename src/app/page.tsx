import { EventCard } from "@/components/event-card";
import { events } from "@/lib/events";
import { Calendar, Zap } from "lucide-react";
import { RevUpLogo } from "@/components/revup-logo";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12 md:mb-16">
        <div className="inline-block bg-primary text-primary-foreground p-4 rounded-full mb-4 shadow-lg">
          <RevUpLogo className="h-24 w-48" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 font-headline">
          EEE VTS SBC NSSCE
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
          Discover, learn, and connect at exclusive EEE VTS SBC NSSCE events. Dive into the world of technology, innovation, and professional growth.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3 font-headline">
          <Calendar className="h-8 w-8 text-accent" />
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3">
            <Zap className="h-8 w-8 text-accent" />
            Why Join?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Our events are designed to foster learning and networking among tech enthusiasts. Gain insights from industry leaders, participate in hands-on workshops, and expand your professional network.
        </p>
      </section>
    </div>
  );
}
