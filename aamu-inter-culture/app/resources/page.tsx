"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import {
  Bus,
  GraduationCap,
  HelpCircle,
  Home,
  PhoneCall,
  Scale,
  Search,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

// Sample data structure for resources
const resourceSections = [
  {
    title: "Visa and Immigration",
    icon: Search,
    items: [
      {
        title: "Visa Information",
        description:
          "Comprehensive details about student visas and immigration policies.",
        link: "#",
      },
      {
        title: "SEVIS Updates",
        description:
          "Stay informed with the latest updates on the Student and Exchange Visitor Information System.",
        link: "#",
      },
      {
        title: "International Student Office",
        description:
          "Get in touch with our dedicated team for visa and immigration support.",
        link: "#",
      },
    ],
  },
  {
    title: "Housing and Accommodation",
    icon: Home,
    items: [
      {
        title: "On-Campus Housing",
        description:
          "Explore comfortable and convenient on-campus living options.",
        link: "#",
      },
      {
        title: "Off-Campus Housing Guide",
        description:
          "Navigate the local housing market with our comprehensive off-campus guide.",
        link: "#",
      },
    ],
  },
  {
    title: "Health and Wellness",
    icon: Stethoscope,
    items: [
      {
        title: "Student Health Center",
        description: "Access quality healthcare services right on campus.",
        link: "#",
      },
      {
        title: "Mental Health Resources",
        description:
          "Discover support services for your emotional and mental well-being.",
        link: "#",
      },
    ],
  },
  {
    title: "Academic Support",
    icon: GraduationCap,
    items: [
      {
        title: "Tutoring Services",
        description:
          "Boost your academic performance with our expert tutoring programs.",
        link: "#",
      },
      {
        title: "Writing Center",
        description:
          "Enhance your writing skills with personalized guidance and workshops.",
        link: "#",
      },
    ],
  },
  {
    title: "Legal and Financial Services",
    icon: Scale,
    items: [
      {
        title: "Legal Aid",
        description:
          "Get assistance with legal matters related to your student status.",
        link: "#",
      },
      {
        title: "Financial Guidance",
        description:
          "Learn about scholarships, financial aid, and managing your finances.",
        link: "#",
      },
    ],
  },
  {
    title: "Transportation",
    icon: Bus,
    items: [
      {
        title: "Campus Shuttle",
        description:
          "Navigate the campus easily with our free shuttle service.",
        link: "#",
      },
      {
        title: "Local Transportation Guide",
        description:
          "Explore the city with our comprehensive transportation guide.",
        link: "#",
      },
    ],
  },
];

// Sample FAQ data
const faqs = [
  {
    question: "How do I maintain my visa status?",
    answer:
      "To maintain your visa status, ensure you're enrolled full-time, make satisfactory academic progress, and don't work off-campus without authorization. Always consult with the International Student Office before making any changes to your academic program or travel plans.",
  },
  {
    question: "Can I work while studying?",
    answer:
      "International students can typically work on-campus up to 20 hours per week during the academic year and full-time during breaks. Off-campus work usually requires special authorization like CPT or OPT. Always check with the International Student Office for the most up-to-date regulations.",
  },
  {
    question: "How can I get involved in campus activities?",
    answer:
      "There are many ways to get involved! Join student organizations, attend cultural events, participate in sports clubs, or volunteer. Check the Student Activities Board for upcoming events and opportunities to engage with the campus community.",
  },
  {
    question: "What should I do if I'm feeling homesick?",
    answer:
      "Feeling homesick is normal. Connect with other international students, join cultural clubs, or speak with a counselor at the Student Health Center. Remember, the International Student Office is always here to support you and can provide resources to help you adjust.",
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = resourceSections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
      }}
    >
      <div className="min-h-screen bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#660000]">
            Student Resources
          </h1>

          <div className="mb-6 relative">
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/70 text-[#660000] placeholder-[#660000]/70 border-[#660000]/30"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#660000]/70" />
          </div>

          <Tabs defaultValue={resourceSections[0]?.title} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border border-[#660000]/30">
              <TabsList className="w-full justify-start bg-[#660000]/10">
                {filteredSections.map((section) => (
                  <TabsTrigger
                    key={section.title}
                    value={section.title}
                    className="flex-shrink-0 text-[#660000] data-[state=active]:bg-[#660000]/20"
                  >
                    <section.icon className="w-5 h-5 mr-2" />
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            {filteredSections.map((section) => (
              <TabsContent key={section.title} value={section.title}>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item, index) => (
                    <Card
                      key={index}
                      className="bg-[#660000]/30 text-white border-[#660000]/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <section.icon className="w-6 h-6 mr-2" />
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/90">
                          {item.description}
                        </CardDescription>
                        <a
                          href={item.link}
                          className="mt-2 inline-block text-white underline hover:text-white/80 transition-colors duration-200"
                        >
                          Learn More
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[#660000] text-center">
              Frequently Asked Questions
            </h2>
            <Card className="bg-[#660000]/10 border-[#660000]/30">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-[#660000] hover:text-[#660000]/80">
                        <div className="flex items-center">
                          <HelpCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                          <span className="text-left">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#660000]/90">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#660000]">
              Need More Help?
            </h2>
            <p className="text-[#660000]/90 mb-4">
              Our International Student Office is here to assist you with any
              questions or concerns.
            </p>
            <div className="flex justify-center items-center text-[#660000]">
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>Contact us at: (123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
