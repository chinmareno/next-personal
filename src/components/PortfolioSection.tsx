import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Platform for XYZ Retail",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      situation:
        "XYZ Retail needed to expand into e-commerce with a scalable, user-friendly platform supporting desktop and mobile users.",
      task: "Built front-end and back-end components with seamless inventory and payment system integration.",
      action:
        "Designed responsive React UI, developed RESTful APIs with Node.js/MongoDB, integrated AWS for optimization, and set up CI/CD pipeline.",
      result:
        "35% increase in online sales within 3 months, improved user experience, and reduced manual inventory management.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Section id="portfolio">
      <SectionHeader
        title="Featured Projects"
        subtitle="Real-world applications that demonstrate my technical expertise and problem-solving abilities"
      />

      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="p-0 bg-card text-primary-foreground border-border hover:shadow-elegant transition-all duration-500 overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Situation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.situation}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-1">Task</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.task}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-1">Action</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.action}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-1">Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
