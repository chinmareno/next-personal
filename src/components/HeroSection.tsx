"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition === 0);
      if (!isScrolledDown && 0 < scrollPosition) setIsScrolledDown(true);
      else setIsScrolledDown(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section
      id="home"
      className="min-h-screen bg-blue-800/10 flex items-center justify-center relative"
    >
      <div className="text-center">
        <Image
          src="/myself.jpg"
          alt="Alex Morgan - Full Stack Developer"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover mb-8 mx-auto shadow-glow border-4 border-primary/20"
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 200px"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter">
          <span className="bg-primary bg-clip-text text-transparent">
            Chin Mareno
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          Full-Stack Web Developer
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable and high-performance web solutions for your business
          needs. Specializing in React, Node.js, and modern development
          practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToPortfolio}
            className="bg-primary cursor-pointer hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            View Portfolio
          </Button>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="cursor-pointer border-primary/30 hover:border-primary hover:shadow-elegant hover:bg-transparent hover:text-white px-8 py-6 text-lg"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/chinmareno"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/chinmareno"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chin-mareno-792b80229/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0077B5]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
        {!isScrolledDown && (
          <ArrowDown className="animate-bounce w-6 h-6 text-muted-foreground mx-auto" />
        )}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </Section>
  );
};
