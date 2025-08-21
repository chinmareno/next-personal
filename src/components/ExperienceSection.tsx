import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      responsibilities: [
        "Lead a team of 5 developers in building scalable web applications using React, Node.js, and AWS",
        "Architected and implemented microservices infrastructure, reducing system latency by 40%",
        "Mentored junior developers and established code review processes and best practices",
        "Collaborated with product managers and designers to deliver user-centric solutions",
        "Implemented CI/CD pipelines and automated testing, improving deployment efficiency by 60%",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained multiple client projects using modern web technologies",
        "Built responsive web applications with React, Redux, and RESTful APIs",
        "Optimized application performance and implemented SEO best practices",
        "Worked directly with clients to gather requirements and provide technical solutions",
        "Maintained 99.9% uptime for production applications serving 10k+ daily users",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Full-time",
      responsibilities: [
        "Created pixel-perfect responsive websites from design mockups",
        "Collaborated with UX/UI designers to implement interactive user interfaces",
        "Optimized website performance and ensured cross-browser compatibility",
        "Maintained and updated existing client websites using various CMS platforms",
        "Participated in code reviews and contributed to development best practices",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Sass",
        "WordPress",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2018 - 2019",
      type: "Freelance",
      responsibilities: [
        "Delivered custom web solutions for small businesses and startups",
        "Managed complete project lifecycle from requirements to deployment",
        "Built e-commerce websites with payment integration and inventory management",
        "Provided ongoing maintenance and technical support for client projects",
        "Achieved 100% client satisfaction rate with timely project delivery",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "WooCommerce",
      ],
    },
  ];

  return (
    <Section id="experience" className="bg-muted/5">
      <SectionHeader
        title="Professional Experience"
        subtitle="My journey through different roles and the impact I've made along the way"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 animate-glow-pulse" />

              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                } ml-12 md:ml-0`}
              >
                <Card className="p-6 bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="self-start sm:self-center bg-primary/10 text-primary border-primary/20"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-secondary/80 hover:bg-primary/20 text-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
