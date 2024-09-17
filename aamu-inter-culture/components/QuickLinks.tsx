"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

const QuickLinks: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Student Directory Link */}
          <Link href="/student-directory">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 w-64 h-16"
            >
              Find Your Peers
            </Button>
          </Link>

          {/* Submit Profile Link */}
          <Link href="/submit-profile">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 w-64 h-16"
            >
              Submit Your Profile
            </Button>
          </Link>

          {/* Events Link */}
          <Link href="/events">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 w-64 h-16"
            >
              Upcoming Events
            </Button>
          </Link>

          {/* Resources Link */}
          <Link href="/resources">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 w-64 h-16"
            >
              Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
