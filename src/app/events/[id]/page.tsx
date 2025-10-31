import { events } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import InteractiveMap from "@/components/interactive-map";
import { RegistrationDialog } from "@/components/registration-dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EventPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventPage({ params }: EventPageProps) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to all events
        </Link>
      </Button>
      <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-headline">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{event.location}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {event.description}
              </p>
            </section>

            <Separator className="my-8" />

            <section id="agenda" className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3 font-headline">
                <BookOpen className="h-8 w-8 text-accent" />
                Agenda
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {event.agenda.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="secondary"
                          className="font-mono text-sm py-1"
                        >
                          {item.time}
                        </Badge>
                        <span className="font-semibold text-primary/90">
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-6 border-l-2 border-accent ml-5">
                      <p className="text-muted-foreground">{item.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Users className="h-6 w-6 text-accent" />
                  Speakers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {event.speakers.map((speaker) => (
                  <div key={speaker.name} className="flex items-center gap-4">
                    <Image
                      src={speaker.image.imageUrl}
                      alt={speaker.image.description}
                      data-ai-hint={speaker.image.imageHint}
                      width={64}
                      height={64}
                      className="rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <h3 className="font-semibold text-primary">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <MapPin className="h-6 w-6 text-accent" />
                  Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InteractiveMap locationDescription={event.locationDescription} />
              </CardContent>
            </Card>

            <RegistrationDialog eventTitle={event.title} />
          </aside>
        </div>
      </div>
    </div>
  );
}
