'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AnimatedCard } from "@/components/animated-card";

const partnershipTiers = [
  {
    name: "Platinum",
    price: "₹20,000",
    features: [
      "Logo on posters",
      "Logo on Banners",
      "Logo on Event Merchandise",
      "Logo on event emails",
      "Survey from participants",
      "Special mention in inaugural and closing ceremonies",
      "Logo on Delegate Certificates",
      "Exclusive talk/Interaction with participants",
      "Exclusive stall space for brand promotion",
    ],
  },
  {
    name: "Gold",
    price: "₹15,000",
    features: [
      "Logo on posters",
      "Logo on Banners",
      "Logo on Event Merchandise",
      "Logo on event emails",
      "Survey from participants",
      "Special mention in inaugural and closing ceremonies",
      "Logo on Delegate Certificates",
      "Exclusive talk/Interaction with participants",
    ],
  },
  {
    name: "Silver",
    price: "₹10,000",
    features: [
      "Logo on posters",
      "Logo on Banners",
      "Logo on Event Merchandise",
      "Logo on event emails",
      "Survey from participants",
      "Special mention in inaugural and closing ceremonies",
      "Logo on Delegate Certificates",
    ],
  },
  {
    name: "Bronze",
    price: "₹5,000",
    features: [
      "Logo on posters",
      "Logo on Banners",
      "Logo on Event Merchandise",
      "Logo on event emails",
      "Survey from participants",
    ],
  },
];

const allFeatures = [
  "Logo on posters",
  "Logo on Banners",
  "Logo on Event Merchandise",
  "Logo on event emails",
  "Survey from participants",
  "Special mention in inaugural and closing ceremonies",
  "Logo on Delegate Certificates",
  "Exclusive talk/Interaction with participants",
  "Exclusive stall space for brand promotion",
];

const whySponsorItems = [
    {
        title: "Enhance Brand Visibility",
        description: "Gain wide exposure among hundreds of students, faculty, professionals, and industry leaders through event branding, digital promotions, and media coverage.",
    },
    {
        title: "Engage Future Talent",
        description: "Interact directly with aspiring engineers and innovators who represent the next generation of technical leaders.",
    },
    {
        title: "Strengthen Industry-Academia Collaboration",
        description: "Support initiatives that encourage practical learning, research, and innovation in emerging technologies like electric vehicles, automation, and sustainable transport.",
    },
    {
        title: "Showcase Corporate Social Responsibility",
        description: "Align your brand with a student-led initiative that promotes education, technology, and sustainability - values that shape the future of mobility.",
    },
]

export default function SponsorsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pt-24">
      <section
        id="why-sponsor"
        className="text-center mb-12 md:mb-16 pt-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 font-headline">
          Why Partner with RevUp?
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-10">
          Partnering with RevUp, the flagship event of IEEE VTS SBC NSSCE,
          offers your organization a unique opportunity to connect with some of
          the brightest young minds in engineering and innovation. Your
          partnership with RevUp is not just a sponsorship—it's an investment
          in empowering innovation, nurturing talent, and driving a smarter,
          sustainable tomorrow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {whySponsorItems.map((item, index) => (
            <AnimatedCard key={item.title} index={index}>
              <div className="bg-card p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/80">
                  {item.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section id="partnership-tiers" className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center font-headline flex items-center justify-center gap-3">
          <Star className="h-8 w-8 text-accent" />
          Our Partnership Tiers
        </h2>
        <Card className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-lg text-primary">
                  Deliverables
                </TableHead>
                {partnershipTiers.map((tier) => (
                  <TableHead
                    key={tier.name}
                    className="text-center font-bold text-lg text-primary"
                  >
                    {tier.name}
                    <p className="text-base font-normal text-foreground/80">
                      {tier.price}
                    </p>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {allFeatures.map((feature) => (
                <TableRow key={feature}>
                  <TableCell className="font-medium text-foreground/90">
                    {feature}
                  </TableCell>
                  {partnershipTiers.map((tier) => (
                    <TableCell key={tier.name} className="text-center">
                      {tier.features.includes(feature) && (
                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      <section id="cta" className="mt-16 md:mt-24 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Join us in driving the future of vehicular technology. Contact us
          today to discuss sponsorship opportunities.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="mailto:ieeesb@nssce.ac.in">Become a Sponsor</a>
        </Button>
      </section>
    </div>
  );
}
