import { Lightbulb, Users, Shield } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with AI through cutting-edge research and development.",
      bgColor: "bg-temporal-secondary"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Designing AI that augments human capabilities rather than replacing them, fostering collaboration.",
      bgColor: "bg-temporal-accent"
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Committed to responsible AI development with transparency, fairness, and safety at our core.",
      bgColor: "bg-temporal-secondary"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-temporal-primary mb-6" data-testid="heading-mission">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-mission-description">
            To democratize artificial intelligence by creating intuitive, powerful platforms that enhance human potential and drive meaningful innovation across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover-lift bg-gradient-to-br from-temporal-background to-white border border-temporal-border"
              data-testid={`card-value-${index}`}
            >
              <div className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <value.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-temporal-primary mb-4" data-testid={`heading-value-${index}`}>
                {value.title}
              </h3>
              <p className="text-gray-600" data-testid={`text-value-description-${index}`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
