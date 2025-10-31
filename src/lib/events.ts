import type { Event } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getSpeakerImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found.`);
  }
  return image;
}

export const events: Event[] = [
  {
    id: 'rev-up-workshop',
    title: 'REVUP Workshop',
    date: 'September 28, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'NSSCE Auditorium',
    locationDescription: 'NSS College of Engineering, Akathethara, Palakkad, Kerala 678008',
    description:
      'A hands-on workshop on the future of automotive technology. Join us to explore the latest in vehicular technology, from electric vehicles to autonomous driving systems. This event is perfect for students and professionals looking to get ahead in the automotive industry.',
    speakers: [
      {
        name: 'Alex Roy',
        title: 'Automotive Futurist',
        image: getSpeakerImage('speaker-1'),
      },
      {
        name: 'Dr. Sarah Connor',
        title: 'AI & Robotics Expert',
        image: getSpeakerImage('speaker-3'),
      },
    ],
    agenda: [
      {
        time: '10:00 AM - 11:00 AM',
        title: 'The Electric Revolution',
        description: 'An overview of the current state of electric vehicles and future trends.',
      },
      {
        time: '11:00 AM - 12:30 PM',
        title: 'Intro to Autonomous Driving',
        description: 'A deep dive into the technologies behind self-driving cars.',
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Lunch Break',
        description: 'Connect with speakers and fellow attendees.',
      },
      {
        time: '1:30 PM - 3:30 PM',
        title: 'Hands-On: Build a Mini Autonomous Vehicle',
        description: 'A practical session where you get to build and program a small-scale autonomous car.',
      },
      {
        time: '3:30 PM - 4:00 PM',
        title: 'Q&A and Closing Remarks',
        description: 'Get your questions answered by the experts.',
      },
    ],
  },
];
