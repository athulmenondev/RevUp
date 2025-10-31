import { EventCard } from "@/components/event-card";
import { events } from "@/lib/events";
import { Calendar, Zap, Target, Eye } from "lucide-react";
import { RevUpLogo } from "@/components/revup-logo";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section id="home" className="text-center mb-12 md:mb-16 pt-16">
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

      <section id="events">
        <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3 font-headline pt-16">
          <Calendar className="h-8 w-8 text-accent" />
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section id="about" className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
            <Zap className="h-8 w-8 text-accent" />
            Why Join?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Our events are designed to foster learning and networking among tech enthusiasts. Gain insights from industry leaders, participate in hands-on workshops, and expand your professional network.
        </p>
      </section>

      <section id="mission" className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
            <Target className="h-8 w-8 text-accent" />
            Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            To foster a community of innovators and leaders in vehicular technology, providing a platform for continuous learning, professional development, and networking. We aim to bridge the gap between academia and industry.
        </p>
      </section>

      <section id="vision" className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
            <Eye className="h-8 w-8 text-accent" />
            Our Vision
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            To be a leading student branch chapter, recognized for our contribution to the advancement of vehicular technology and for empowering students to become pioneers in the field.
        </p>
      </section>
    </div>
  );
}
