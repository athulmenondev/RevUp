'use client';

import {
  Building2,
  PartyPopper,
  Star,
  UserCheck,
  Wrench,
  Users,
  Briefcase,
  HelpCircle,
  Map,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RegistrationDialog } from '@/components/registration-dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedCard } from '@/components/animated-card';
import { GpsRoadmap } from '@/components/gps-roadmap';

const faqItems = [
  {
    question: 'Who is eligible to participate in RevUp?',
    answer:
      'RevUp is open to all university students, professionals, and technology enthusiasts who have a passion for vehicular technology, electric mobility, and intelligent transportation systems.',
  },
  {
    question: 'What is the registration fee for the event?',
    answer: 'Registration details will be announced soon. Stay tuned!',
  },
  {
    question:
      'Will accommodation be provided for out-station participants?',
    answer:
      'We will provide a list of recommended nearby accommodations. Please note that accommodation is not included in the registration fee.',
  },
  {
    question: 'Will food be provided during the event?',
    answer: 'Yes, lunch and refreshments will be provided on both days of the event.',
  },
];

const highlightCards = [
  {
    icon: Wrench,
    title: 'Technical Workshops',
    description:
      'A blend of technical workshops to provide hands-on exposure to cutting-edge technologies shaping the future of mobility.',
  },
  {
    icon: UserCheck,
    title: 'Expert Talk Sessions',
    description:
      'Engage directly with industry experts and explore advancements in electric vehicles and intelligent transport systems.',
  },
  {
    icon: Building2,
    title: 'Industrial Visits',
    description:
      'Gain practical exposure through field visits to leading organizations in the vehicular domain.',
  },
  {
    icon: PartyPopper,
    title: 'Cultural Evenings & Networking',
    description:
      'Connect, share ideas, and build networks in a vibrant celebration of creativity and collaboration.',
  },
];

export default function RevUpPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section
        id="about-revup"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 font-headline">
          About RevUp
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-foreground/80">
          RevUp is a flagship initiative of the IEEE Vehicular Technology
          Society Student Branch Chapter (VTS SBC) of NSS College of
          Engineering, Palakkad, designed to ignite curiosity and innovation in
          the ever-evolving field of vehicular technology. This two-day
          immersive program brings together students, professionals, and
          enthusiasts through a blend of technical workshops, industrial
          visits, expert talk sessions, and cultural evenings, creating a
          perfect balance of learning and experience. Participants get the
          unique opportunity to engage directly with industry experts, explore
          advancements in electric vehicles, intelligent transport systems, and
          sustainable mobility, and gain practical exposure through field
          visits to leading organizations in the vehicular domain. RevUp stands
          as a symbol of the chapter's commitment to empowering young engineers
          to drive technological progress and steer toward a smarter,
          sustainable, and connected world.
        </p>
      </section>

      <section id="demographics" className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center font-headline">
          Our Audience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center bg-card-foreground/5">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-5xl font-extrabold text-primary">
                70+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-foreground/80">
                STUDENTS
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card-foreground/5">
            <CardHeader>
              <Briefcase className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-5xl font-extrabold text-primary">
                25+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-foreground/80">
                COLLEGES
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="events" className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3 font-headline justify-center">
          <Star className="h-8 w-8 text-accent" />
          RevUp Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedCard key={card.title} index={index}>
                <Card className="h-full transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-accent" />
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      <section id="schedule" className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center font-headline flex items-center justify-center gap-3">
          <Map className="h-8 w-8 text-accent" />
          Your RevUp Roadmap
        </h2>
        <GpsRoadmap />
      </section>

      <section id="faq" className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center font-headline flex items-center justify-center gap-3">
          <HelpCircle className="h-8 w-8 text-accent" />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      
      <section id="register" className="mt-16 md:mt-24 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Ready to RevUp?</h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Secure your spot at RevUp and be part of the future of vehicular technology.
        </p>
        <RegistrationDialog eventTitle="RevUp" />
      </section>
    </div>
  );
}
