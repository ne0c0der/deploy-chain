import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Layers, Plug, Atom, Monitor, Code, GitBranch, Infinity } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: Bot,
      title: "Temporal Assistants",
      status: "In Development",
      statusColor: "bg-orange-500",
      description: "Our flagship AI assistant platform offering personalized productivity enhancement, intelligent automation, and seamless workflow integration for businesses and individuals.",
      features: ["Natural Language Processing", "Workflow Automation"],
      buttonText: "Learn More",
      buttonVariant: "outline" as const,
      buttonClass: "border-temporal-secondary text-temporal-secondary hover:bg-temporal-secondary hover:text-white"
    },
    {
      icon: Layers,
      title: "TemporalOS",
      status: "In Development",
      statusColor: "bg-orange-500",
      description: "Revolutionary AI-native operating system that learns from user behavior to provide predictive computing experiences and intelligent resource management.",
      features: ["Predictive Computing", "Adaptive Interface"],
      buttonText: "Learn More",
      buttonVariant: "outline" as const,
      buttonClass: "border-temporal-secondary text-temporal-secondary hover:bg-temporal-secondary hover:text-white"
    },
    {
      icon: Plug,
      title: "NeuroLink API",
      status: "Beta Access",
      statusColor: "bg-temporal-accent",
      description: "Comprehensive AI integration API enabling developers to embed advanced machine learning capabilities into their applications with minimal complexity.",
      features: ["REST API", "SDKs Available"],
      buttonText: "View Docs",
      buttonVariant: "default" as const,
      buttonClass: "bg-temporal-accent hover:bg-temporal-accent/90"
    },
    {
      icon: Atom,
      title: "Quantum Intelligence",
      status: "Research Phase",
      statusColor: "bg-purple-500",
      description: "Next-generation quantum-enhanced AI system leveraging quantum computing principles to solve complex optimization and pattern recognition challenges.",
      features: ["Quantum Computing", "Advanced ML"],
      buttonText: "Research Paper",
      buttonVariant: "outline" as const,
      buttonClass: "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
    }
  ];

  const placeholderIcons = [Monitor, Code, GitBranch, Infinity];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-temporal-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-temporal-primary mb-6" data-testid="heading-ecosystem">Our AI Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-ecosystem-description">
            Explore our comprehensive suite of AI platforms designed to transform industries and enhance human productivity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const PlaceholderIcon = placeholderIcons[index];
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover-lift border border-temporal-border"
                data-testid={`card-project-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <project.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-temporal-primary" data-testid={`heading-project-${index}`}>
                      {project.title}
                    </h3>
                    <Badge className={`${project.statusColor} text-white`} data-testid={`badge-status-${index}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <PlaceholderIcon className="w-16 h-16 text-gray-400 mb-2 mx-auto" />
                    <p className="text-gray-500 font-medium">{project.title} Interface</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-sm text-gray-500"
                        data-testid={`text-feature-${index}-${featureIndex}`}
                      >
                        • {feature}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant={project.buttonVariant}
                    className={project.buttonClass}
                    data-testid={`button-project-${index}`}
                  >
                    {project.buttonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
