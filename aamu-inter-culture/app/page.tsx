import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/logo/campus.jpg"
            alt="AAMU Campus"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            AAMU INTER CULTURE
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Discover a World of Opportunities
          </p>
          <div className="animate-fade-in">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Explore Programs <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Global Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, stat: "50+", label: "Countries Represented" },
              { icon: Users, stat: "1000+", label: "International Students" },
              { icon: Calendar, stat: "100+", label: "Annual Events" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <item.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">
                    {item.stat}
                  </h3>
                  <p className="text-gray-600">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flags Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Diverse Community
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={country}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image
                  src={`https://flagcdn.com/w80/${country}.png`}
                  alt={`Flag of ${country}`}
                  width={80}
                  height={60}
                  className="rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join our vibrant international community at AAMU
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
