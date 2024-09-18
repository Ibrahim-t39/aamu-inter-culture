"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, info: "(123) 456-7890" },
  { icon: Mail, info: "isa@aamu.edu" },
  { icon: MapPin, info: "4900 Meridian St N, Huntsville, AL 35810" },
  { icon: Globe, info: "www.aamu.edu/isa" },
];

const socialMedia = [
  { icon: Facebook, link: "#" },
  { icon: Instagram, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Linkedin, link: "#" },
];

const eboardMembers = [
  {
    name: "John Doe",
    position: "President",
    email: "john.doe@aamu.edu",
    image: "/images/eboard-1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    email: "jane.smith@aamu.edu",
    image: "/images/eboard-2.jpg",
  },
  {
    name: "Mike Johnson",
    position: "Treasurer",
    email: "mike.johnson@aamu.edu",
    image: "/images/eboard-3.jpg",
  },
  {
    name: "Sarah Brown",
    position: "Secretary",
    email: "sarah.brown@aamu.edu",
    image: "/images/eboard-4.jpg",
  },
];

const dsoInfo = [
  {
    name: "Dr. Emily Davis",
    title: "Primary DSO",
    email: "emily.davis@aamu.edu",
    phone: "(123) 456-7891",
    image: "/images/dso-1.jpg",
  },
  {
    name: "Mr. Robert Wilson",
    title: "Secondary DSO",
    email: "robert.wilson@aamu.edu",
    phone: "(123) 456-7892",
    image: "/images/dso-2.jpg",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, subject, category, message });
    alert("Your message has been sent. We'll get back to you soon!");
    setName("");
    setEmail("");
    setSubject("");
    setCategory("");
    setMessage("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/logo/aamuwelcomecenter.jpg)" }}
    >
      <div className="min-h-screen bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#660000]">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 border-[#660000]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-[#660000]">Get in Touch</CardTitle>
                <CardDescription>
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/70 text-[#660000] placeholder-[#660000]/70 border-[#660000]/30"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/70 text-[#660000] placeholder-[#660000]/70 border-[#660000]/30"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-white/70 text-[#660000] placeholder-[#660000]/70 border-[#660000]/30"
                    />
                  </div>
                  <div>
                    <Select onValueChange={setCategory}>
                      <SelectTrigger className="bg-white/70 text-[#660000] border-[#660000]/30">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="event">Event Information</SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px] bg-white/70 text-[#660000] placeholder-[#660000]/70 border-[#660000]/30"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#660000] hover:bg-[#660000]/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-[#660000]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-[#660000]">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Here&apos;s how you can reach us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-[#660000]"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.info}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#660000] mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialMedia.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="text-[#660000] hover:text-[#660000]/80 transition-colors duration-300"
                      >
                        <item.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#660000] mb-2">
                    Office Hours
                  </h3>
                  <div className="flex items-center text-[#660000]">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                  </div>
                  <p className="mt-2 text-sm text-[#660000]/80">
                    We are closed on weekends and university holidays.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-center mb-6 text-[#660000]">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {eboardMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/80 border-[#660000]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center text-[#660000]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#660000] hover:underline"
                  >
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-6 text-[#660000]">
            Designated School Officials (DSO)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {dsoInfo.map((dso, index) => (
              <Card
                key={index}
                className="bg-white/80 border-[#660000]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center">
                    <Image
                      src={dso.image}
                      alt={dso.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <CardTitle className="text-[#660000]">
                        {dso.name}
                      </CardTitle>
                      <CardDescription>{dso.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-[#660000]">
                      <Mail className="w-5 h-5 mr-2" />
                      <a
                        href={`mailto:${dso.email}`}
                        className="hover:underline"
                      >
                        {dso.email}
                      </a>
                    </div>
                    <div className="flex items-center text-[#660000]">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{dso.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-6 text-[#660000]">
            Our Location
          </h2>
          <div className="mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5392605195397!2d-86.5720848!3d34.783499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b60d32a7d1f%3A0x5f0a1a2a9c8a3b0!2sAlabama%20A%26M%20University!5e0!3m2!1sen!2sus!4v1652234567890!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
