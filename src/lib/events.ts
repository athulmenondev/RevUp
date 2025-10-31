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
    id: 'ai-in-robotics-workshop',
    title: 'AI in Robotics Workshop',
    date: 'October 26, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Tech Park, Building C, Room 101',
    locationDescription: 'Tech Park, Building C, Room 101, 123 Innovation Drive, Techville, USA',
    description:
      'Join us for a full-day immersive workshop on the latest advancements in Artificial Intelligence for Robotics. This event will feature hands-on sessions, expert talks, and networking opportunities with pioneers in the field. Whether you are a student, researcher, or industry professional, this workshop will provide valuable insights into the future of intelligent automation.',
    speakers: [
      {
        name: 'Dr. Evelyn Reed',
        title: 'Lead AI Researcher, RoboCorp',
        image: getSpeakerImage('speaker-1'),
      },
      {
        name: 'Professor Kenji Tanaka',
        title: 'Head of Robotics, Tech University',
        image: getSpeakerImage('speaker-2'),
      },
    ],
    agenda: [
      {
        time: '9:00 AM - 9:30 AM',
        title: 'Registration & Welcome Coffee',
        description: 'Check-in, grab some coffee, and meet fellow attendees.',
      },
      {
        time: '9:30 AM - 10:30 AM',
        title: 'Keynote: The Future of Cognitive Robotics',
        description: 'Dr. Evelyn Reed discusses the trajectory of AI in autonomous systems.',
      },
      {
        time: '10:30 AM - 12:00 PM',
        title: 'Workshop: Building a Neural Network for Object Detection',
        description: 'A hands-on session led by Professor Kenji Tanaka.',
      },
      {
        time: '12:00 PM - 1:00 PM',
        title: 'Lunch & Networking',
        description: 'Enjoy a complimentary lunch and connect with speakers and attendees.',
      },
      {
        time: '1:00 PM - 2:30 PM',
        title: 'Talk: Ethical Considerations in AI',
        description: 'An important discussion on the responsibilities of AI developers.',
      },
      {
        time: '2:30 PM - 4:00 PM',
        title: 'Panel Discussion & Closing Remarks',
        description: 'Q&A with all speakers and a summary of the day\'s learnings.',
      },
    ],
  },
  {
    id: '5g-and-beyond-seminar',
    title: '5G and Beyond Seminar',
    date: 'November 15, 2024',
    time: '1:00 PM - 5:00 PM',
    location: 'Main Auditorium, Engineering Hall',
    locationDescription: 'Main Auditorium, Engineering Hall, 456 College Ave, Cambria, USA',
    description:
      'Explore the transformative power of 5G technology and what lies on the horizon. This seminar brings together leading experts from academia and industry to discuss the latest trends, challenges, and opportunities in next-generation wireless communication. Topics include IoT, network slicing, and the path to 6G.',
    speakers: [
      {
        name: 'Maria Rodriguez',
        title: 'Principal Engineer, ConnectNet',
        image: getSpeakerImage('speaker-3'),
      },
      {
        name: 'David Chen',
        title: 'PhD, Wireless Communications Lab',
        image: getSpeakerImage('speaker-4'),
      },
    ],
    agenda: [
      {
        time: '1:00 PM - 1:15 PM',
        title: 'Opening Remarks',
        description: 'Welcome and introduction to the seminar.',
      },
      {
        time: '1:15 PM - 2:15 PM',
        title: 'The Architecture of 5G Networks',
        description: 'Maria Rodriguez provides a deep dive into 5G infrastructure.',
      },
      {
        time: '2:15 PM - 3:15 PM',
        title: 'Massive IoT and 5G',
        description: 'David Chen on how 5G enables a world of connected devices.',
      },
      {
        time: '3:15 PM - 3:45 PM',
        title: 'Coffee Break & Tech Demos',
        description: 'Interact with live demos of 5G applications.',
      },
      {
        time: '3:45 PM - 4:45 PM',
        title: 'Panel: The Road to 6G',
        description: 'A forward-looking discussion with our speakers.',
      },
      {
        time: '4:45 PM - 5:00 PM',
        title: 'Closing and Q&A',
        description: 'Final questions and wrap-up.',
      },
    ],
  },
    {
    id: 'sustainable-energy-symposium',
    title: 'Sustainable Energy Symposium',
    date: 'December 5, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Grand Conference Hall',
    locationDescription: 'Grand Conference Hall, 789 University Plaza, Metro City, USA',
    description:
      'A symposium dedicated to exploring innovations in sustainable energy. Join researchers, policymakers, and industry leaders as they discuss the future of green technology, from advanced solar panels to smart grid solutions. This event aims to foster collaboration and accelerate the transition to a sustainable energy future.',
    speakers: [
      {
        name: 'Dr. Evelyn Reed',
        title: 'Director of GreenTech Institute',
        image: getSpeakerImage('speaker-1'),
      },
      {
        name: 'Professor Kenji Tanaka',
        title: 'Expert in Photovoltaic Systems',
        image: getSpeakerImage('speaker-2'),
      },
    ],
    agenda: [
      {
        time: '10:00 AM - 10:30 AM',
        title: 'Introduction to Modern Sustainability',
        description: 'Opening keynote on the current state of sustainable energy.',
      },
      {
        time: '10:30 AM - 11:30 AM',
        title: 'Advances in Solar Cell Technology',
        description: 'Professor Kenji Tanaka presents the latest research.',
      },
      {
        time: '11:30 AM - 12:30 PM',
        title: 'The Role of AI in Smart Grids',
        description: 'Dr. Evelyn Reed on optimizing energy distribution.',
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Networking Lunch',
        description: 'Connect with peers over a sustainable lunch.',
      },
      {
        time: '1:30 PM - 2:30 PM',
        title: 'Policy and Future Directions',
        description: 'Panel discussion on government and industry roles.',
      },
      {
        time: '2:30 PM - 3:00 PM',
        title: 'Closing Remarks',
        description: 'Summary of key takeaways and call to action.',
      },
    ],
  },
];
