import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Zap, Target } from "lucide-react";

export const AboutSection = () => {
  const coreSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next",
    "Remix",
    "Node",
    "Express",
    "PostgreSQL",
    "Git",
    "Tailwind CSS",
    "REST",
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Attention to Detail",
      description:
        "Focus on clean, maintainable code and user-friendly interfaces",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Timely Delivery",
      description:
        "Able to deliver projects efficiently without cutting corners",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communication",
      description: "Clear and transparent updates in team settings",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description:
        "Write structured, scalable, and well-documented applications",
    },
  ];

  return (
    <Section id="about">
      <SectionHeader
        title="About Me"
        subtitle="Aspiring full-stack developer building modern, efficient web applications"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            I’m a full-stack developer with experience building web applications
            using modern JavaScript technologies. I enjoy creating intuitive
            user interfaces, implementing robust backend solutions, and
            continuously improving my skills to deliver quality solutions.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I’m eager to contribute to projects where I can leverage React,
            Node.js, and PostgreSQL while learning new tools and frameworks. My
            goal is to write clean, maintainable code and help teams ship
            features efficiently.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-foreground text-sm bg-secondary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-6 bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary">{value.icon}</div>
              <h3 className="font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
