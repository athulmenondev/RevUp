
import {
  Calendar,
  Zap,
  Target,
  Eye,
  Star,
  Wrench,
  UserCheck,
  Building2,
  PartyPopper,
  Users,
  Briefcase,
} from "lucide-react";
import { RevUpLogo } from "@/components/revup-logo";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section id="home" className="text-center mb-12 md:mb-16 pt-16">
        <div className="inline-block p-4 rounded-full mb-4">
          <RevUpLogo className="h-24 w-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-2 font-headline">
          RevUp
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-4 font-semibold">
          06 & 07 December 2025
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
          Discover, learn, and connect at the flagship event of EEE VTS SBC NSSCE.
          Dive into the world of technology, innovation, and professional
          growth.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/revup">Register for RevUp</Link>
        </Button>
      </section>

      <section
        id="about"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
          <Zap className="h-8 w-8 text-accent" />
          Why Join?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          Our events are designed to foster learning and networking among tech
          enthusiasts. Gain insights from industry leaders, participate in
          hands-on workshops, and expand your professional network.
        </p>
      </section>

      <section
        id="about-chapter"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
          About IEEE VTS SBC NSSCE
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          The IEEE Vehicular Technology Society Student Branch Chapter (VTS SBC) of NSS College of Engineering, Palakkad, is a dynamic platform dedicated to fostering innovation, research, and knowledge-sharing in the fields of vehicular technology, electric mobility, wireless communication, and intelligent transportation systems. Formed under the IEEE Student Branch NSSCE, the chapter aims to bridge the gap between academic learning and real-world applications by providing students with hands-on exposure to cutting-edge technologies. Through workshops, expert talks, and collaborative projects, we empower students to explore autonomous vehicles, electric and hybrid systems, and sustainable transport solutions. Our vision is 'Engineering Smarter Mobility for a Connected Future,' aligning with IEEE's global mission of advancing technology for humanity.
        </p>
      </section>

      <section
        id="about-sb"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
          About IEEE SB NSSCE
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          IEEE is the world's largest professional organization of engineers, formed in 1963. The IEEE SB NSSCE was formed in 1987 with an aim of dedicating to advancing technology for the benefit of humanity. Since its establishment, IEEE SB NSSCE has been actively organizing events at regional, national and international levels. Our family has members from all departments and consists of 10 societies, including the Computer Society (CS), Robotics Automation Society (RAS), and Vehicular Technology Society (VTS), as well as affinity groups like Women in Engineering (WiE). Our student branch has hosted various technical events, hands-on workshops, and talk sessions, and has been recognized with many awards at regional, national, and global levels.
        </p>
      </section>

      <section
        id="mission"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
          <Target className="h-8 w-8 text-accent" />
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          To foster a community of innovators and leaders in vehicular
          technology, providing a platform for continuous learning,
          professional development, and networking. We aim to bridge the gap
          between academia and industry.
        </p>
      </section>

      <section
        id="vision"
        className="mt-16 md:mt-24 text-center p-8 bg-card rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-headline flex items-center justify-center gap-3 pt-16">
          <Eye className="h-8 w-8 text-accent" />
          Our Vision
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          To be a leading student branch chapter, recognized for our
          contribution to the advancement of vehicular technology and for
          empowering students to become pioneers in the field.
        </p>
      </section>
    </div>
  );
}
