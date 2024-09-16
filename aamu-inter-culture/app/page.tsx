"use client";

import { Calendar, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Navigation component
const Navigation: React.FC = () => (
  <nav className="sticky top-0 bg-background shadow-md z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Image src="/logo.png" alt="ISA Logo" width={50} height={50} />
        <div className="space-x-4">
          <Link href="/" className="text-text-primary hover:text-primary-blue">
            Home
          </Link>
          <Link
            href="/directory"
            className="text-text-primary hover:text-primary-blue"
          >
            Student Directory
          </Link>
          <Link
            href="/cultural-corner"
            className="text-text-primary hover:text-primary-blue"
          >
            Cultural Corner
          </Link>
          <Link
            href="/events"
            className="text-text-primary hover:text-primary-blue"
          >
            Events
          </Link>
          <Link
            href="/resources"
            className="text-text-primary hover:text-primary-blue"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-text-primary hover:text-primary-blue"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <button className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-primary-green transition duration-300">
        Join ISA
      </button>
    </div>
  </nav>
);

// Hero Section component
const HeroSection: React.FC = () => (
  <div className="relative h-[600px]">
    <Image
      src="/hero-image.jpg"
      alt="Diverse group of students"
      layout="fill"
      objectFit="cover"
      className="brightness-75"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent-yellow to-accent-orange bg-clip-text text-transparent">
        Connecting Cultures, Building Communities at Alabama A&amp;M
      </h1>
      <p className="text-2xl mb-8 text-white">
        Fostering unity, diversity, and cultural exchange for a stronger global
        community.
      </p>
      <button className="bg-accent-yellow text-text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent-orange transition duration-300">
        Join the ISA
      </button>
    </div>
  </div>
);

// Featured Sections component
const FeaturedSections: React.FC = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Student Directory",
          description:
            "Browse and connect with international students from around the world studying at AAMU.",
          button: "Explore Students",
          color: "primary-blue",
        },
        {
          title: "Cultural Corner",
          description:
            "Share your culture, explore global traditions, and learn through stories, recipes, and more.",
          button: "Visit Cultural Corner",
          color: "primary-green",
        },
        {
          title: "Events Calendar",
          description:
            "Stay up-to-date with the latest ISA events and activities, and RSVP today.",
          button: "View Events",
          color: "accent-red",
        },
      ].map((section, index) => (
        <div key={index} className="bg-neutral-light p-6 rounded-lg shadow-md">
          <h2 className={`text-2xl font-semibold mb-4 text-${section.color}`}>
            {section.title}
          </h2>
          <p className="text-text-primary mb-4">{section.description}</p>
          <button
            className={`bg-${section.color} text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300`}
          >
            {section.button}
          </button>
        </div>
      ))}
    </div>
  </div>
);

// Events Section component
const EventsSection: React.FC = () => {
  const events = [
    {
      title: "Cultural Fest 2024",
      date: "March 15, 2024",
      location: "Student Center",
      image: "/event1.jpg",
    },
    {
      title: "International Food Fair",
      date: "April 22, 2024",
      location: "Campus Quad",
      image: "/event2.jpg",
    },
    {
      title: "Global Career Workshop",
      date: "May 10, 2024",
      location: "Career Center",
      image: "/event3.jpg",
    },
  ];

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-primary-blue">
          Upcoming Events
        </h2>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary-green">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary mb-2">{event.date}</p>
                  <p className="text-text-secondary mb-4">{event.location}</p>
                  <button className="bg-accent-orange text-white px-4 py-2 rounded hover:bg-accent-red transition duration-300">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Cultural Corner Preview component
const CulturalCornerPreview: React.FC = () => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-semibold mb-8 text-center text-primary-blue">
      Cultural Corner Preview
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-primary-green">
          Student Quote
        </h3>
        <blockquote className="text-text-primary italic mb-4">
          &ldquo;ISA has opened my eyes to so many different cultures. It&apos;s
          like traveling the world without leaving campus!&rdquo;
        </blockquote>
        <p className="text-text-secondary">- Maria, Brazil</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-primary-green">
          Cultural Highlights
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="/culture1.jpg"
            alt="Cultural event 1"
            width={100}
            height={100}
            className="rounded"
          />
          <Image
            src="/culture2.jpg"
            alt="Cultural event 2"
            width={100}
            height={100}
            className="rounded"
          />
          <Image
            src="/culture3.jpg"
            alt="Cultural event 3"
            width={100}
            height={100}
            className="rounded"
          />
        </div>
        <button className="mt-4 text-primary-blue hover:text-primary-green transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  </div>
);

// ISA Community Stats component
const CommunityStats: React.FC = () => (
  <div className="bg-primary-blue text-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Global Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <Globe className="w-12 h-12 mx-auto mb-4 text-accent-yellow" />
          <p className="text-4xl font-bold mb-2">500+</p>
          <p className="text-xl">Active international students</p>
        </div>
        <div>
          <Users className="w-12 h-12 mx-auto mb-4 text-accent-yellow" />
          <p className="text-4xl font-bold mb-2">45+</p>
          <p className="text-xl">Countries represented</p>
        </div>
        <div>
          <Calendar className="w-12 h-12 mx-auto mb-4 text-accent-yellow" />
          <p className="text-4xl font-bold mb-2">20+</p>
          <p className="text-xl">Events hosted annually</p>
        </div>
      </div>
    </div>
  </div>
);

// Footer component
const Footer: React.FC = () => (
  <footer className="bg-neutral-medium text-text-primary py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary-blue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-primary-blue">
                Events
              </Link>
            </li>
            <li>
              <Link href="/directory" className="hover:text-primary-blue">
                Directory
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary-blue">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p>Email: isa@aamu.edu</p>
          <p>Phone: (256) 372-5000</p>
          <p>Address: 4900 Meridian St N, Huntsville, AL 35810</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-blue">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-primary-blue">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-primary-blue">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; 2023 International Student Association at Alabama A&amp;M
          University. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Type definition for Slider settings
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }>;
}

// Main HomePage component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSections />
        <EventsSection />
        <CulturalCornerPreview />
        <CommunityStats />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
