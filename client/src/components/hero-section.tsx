import { Button } from "@/components/ui/button";
import { Brain, Bot, Network, Cog, Cpu } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-white to-temporal-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-temporal-primary mb-6 leading-tight">
              Building the Future of{" "}
              <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Temporal AI Technologies develops cutting-edge AI platforms that transform how businesses and individuals interact with artificial intelligence. Our ecosystem of products delivers intelligent automation, enhanced productivity, and seamless AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-temporal-primary hover:bg-temporal-primary/90 text-white px-8 py-4 h-auto font-medium"
                data-testid="button-explore-projects"
              >
                Explore Our Projects
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-temporal-secondary text-temporal-secondary hover:bg-temporal-secondary hover:text-white px-8 py-4 h-auto font-medium"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-temporal-secondary/20 to-temporal-accent/20 rounded-3xl"></div>
              <div className="relative grid grid-cols-3 gap-4 p-8">
                <div className="w-16 h-16 bg-temporal-secondary rounded-xl animate-float flex items-center justify-center" style={{animationDelay: '0s'}}>
                  <Bot className="text-white w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-temporal-accent rounded-xl animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <Network className="text-white w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-temporal-secondary rounded-xl animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
                  <Cog className="text-white w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-temporal-accent rounded-xl animate-float flex items-center justify-center col-start-2" style={{animationDelay: '0.5s'}}>
                  <Brain className="text-white w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-temporal-secondary rounded-xl animate-float flex items-center justify-center" style={{animationDelay: '1.5s'}}>
                  <Cpu className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
