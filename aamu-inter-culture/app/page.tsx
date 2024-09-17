"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
  Facebook,
  Globe2,
  GraduationCap,
  Instagram,
  Linkedin,
  School,
  Send,
  Sparkles,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const countries = [
  "us",
  "cn",
  "in",
  "ng",
  "br",
  "de",
  "jp",
  "fr",
  "gb",
  "ca",
  "au",
  "kr",
  "za",
  "mx",
  "eg",
  "it",
  "tr",
  "ru",
  "es",
  "sa",
];

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/logo/campus.jpg"
        alt="AAMU Campus"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#660000] to-black opacity-75"></div>
    </div>
    <div className="relative z-10 text-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
        AAMU International Student Association
      </h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
        Connecting International Students Across Campus
      </p>
      <div className="animate-fade-in flex flex-col sm:flex-row justify-center gap-4">
        <Button
          size="lg"
          className="bg-[#660000] text-white hover:bg-[#660000]/90 transition-transform duration-300 hover:scale-105"
        >
          Join ISA <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-[#660000] hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
        >
          Explore Resources
        </Button>
      </div>
    </div>
  </section>
);

const AboutISASection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Our Mission",
      content:
        "AAMU ISA fosters a vibrant, inclusive community for international students, promoting cultural exchange and support.",
      icon: Globe2,
    },
    {
      title: "Cultural Events",
      content:
        "We organize diverse events celebrating cultures, including festivals, food fairs, and cultural showcases.",
      icon: Sparkles,
    },
    {
      title: "Academic Support",
      content:
        "Our programs include study groups, tutoring, and workshops to help international students excel academically.",
      icon: GraduationCap,
    },
    {
      title: "Social Activities",
      content:
        "From game nights to outdoor adventures, we offer activities to build friendships and create lasting memories.",
      icon: Users,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#ffeeee]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#660000]">
          About AAMU ISA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="mb-4 text-[#660000]"
                    animate={{ rotate: currentSlide === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <slide.icon size={48} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#660000] mb-2 group-hover:text-[#990000] transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{slide.content}</p>
                  <motion.div
                    className="w-full h-1 bg-[#660000] mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FlagsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + countries.length) % countries.length
    );
  }, []);

  const resetAutoRotation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAutoRotating(false);
    timeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  }, []);

  const handleManualRotation = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next") {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoRotation();
    },
    [nextSlide, prevSlide, resetAutoRotation]
  );

  useEffect(() => {
    if (isAutoRotating) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [isAutoRotating, nextSlide]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getVisibleFlags = () => {
    const visibleFlags = [];
    for (let i = 0; i < 7; i++) {
      const index = (currentIndex + i) % countries.length;
      visibleFlags.push(countries[index]);
    }
    return visibleFlags;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#ffeeee] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#660000]">
          Our Diverse Community
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-center items-center h-[300px]">
            {getVisibleFlags().map((country, index) => (
              <div
                key={index}
                className={`transition-all duration-300 absolute ${
                  index === 3
                    ? "w-48 h-36 z-30"
                    : index === 2 || index === 4
                    ? "w-40 h-30 opacity-80 z-20"
                    : index === 1 || index === 5
                    ? "w-32 h-24 opacity-60 z-10"
                    : "w-24 h-18 opacity-40 z-0"
                }`}
                style={{
                  transform: `translateX(${(index - 3) * 120}px)`,
                }}
              >
                <Image
                  src={`https://flagcdn.com/w320/${country}.png`}
                  alt={`Flag of ${country}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleManualRotation("prev")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#660000] hover:text-[#990000] rounded-full p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous flag"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => handleManualRotation("next")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#660000] hover:text-[#990000] rounded-full p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next flag"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-[#660000] animate-pulse">
            Our community represents students from over 50 countries, bringing
            diverse perspectives and cultures to AAMU.
          </p>
        </div>
      </div>
    </section>
  );
};

const QuotesSection = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/logo/diversestudents.jpg"
        alt="Diverse group of students"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#660000] to-black opacity-75"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Voices of Our Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            quote:
              "ISA has been my home away from home. It's where I've made lifelong friends and created unforgettable memories.",
            author: "Maria S., Brazil",
          },
          {
            quote:
              "Through ISA, I've learned so much about different cultures and grown both personally and professionally.",
            author: "Ahmed K., Egypt",
          },
          {
            quote:
              "The support I've received from ISA has been instrumental in my academic success and cultural adjustment.",
            author: "Yuki T., Japan",
          },
          {
            quote:
              "ISA events have opened my eyes to the beauty of diversity and the power of cross-cultural connections.",
            author: "Olivia M., Nigeria",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-lg border-0 transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <CardContent className="p-6">
              <p className="text-lg mb-4 text-white">
                {'"'}
                {item.quote}
                {'"'}
              </p>
              <p className="text-sm font-bold text-white">- {item.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactAndNewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#ffeeee]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#660000]">
          Contact Us & Stay Connected
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#660000]">
                    Get in Touch
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact/eboard" passHref>
                      <Button className="w-full sm:w-auto bg-[#660000] text-white hover:bg-[#660000]/90">
                        <Users className="mr-2 h-4 w-4" /> Contact E-Board
                      </Button>
                    </Link>
                    <Link href="/contact/dso" passHref>
                      <Button className="w-full sm:w-auto bg-[#660000] text-white hover:bg-[#660000]/90">
                        <School className="mr-2 h-4 w-4" /> Contact DSO
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Have questions or need assistance? Reach out to our E-Board
                    or DSO team. We're here to help!
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#660000]">
                    Stay Connected
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for the latest updates and
                    resources
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow transition-all duration-300 focus:ring-2 focus: ring-[#660000]"
                    />
                    <Button
                      type="submit"
                      className="bg-[#660000] text-white hover:bg-[#660000]/90"
                    >
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#660000] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">AAMU ISA</h3>
          <p className="text-gray-300">
            Connecting international students across campus and fostering a
            diverse, supportive community.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Events", "Resources", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="text-gray-300 not-italic">
            <p>4900 Meridian Street</p>
            <p>Normal, AL 35762</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:isa@aamu.edu"
                className="hover:text-white transition-colors duration-300"
              >
                isa@aamu.edu
              </a>
            </p>
            <p>Phone: (256) 372-5000</p>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-6 w-6 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>
          © {new Date().getFullYear()} AAMU International Student Association -
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutISASection />
      <FlagsSection />
      <QuotesSection />
      <ContactAndNewsletterSection />
      <Footer />
    </div>
  );
}
