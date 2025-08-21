import { Brain } from "lucide-react";
import { SiLinkedin, SiX, SiGithub, SiMedium } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Temporal Assistants", href: "#", testId: "link-temporal-assistants" },
        { label: "TemporalOS", href: "#", testId: "link-temporal-os" },
        { label: "NeuroLink API", href: "#", testId: "link-neurolink-api" },
        { label: "Quantum Intelligence", href: "#", testId: "link-quantum-intelligence" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about", testId: "link-about", onClick: () => scrollToSection("about") },
        { label: "Careers", href: "#", testId: "link-careers" },
        { label: "Press & Media", href: "#", testId: "link-press" },
        { label: "Investors", href: "#investors", testId: "link-investors", onClick: () => scrollToSection("investors") },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Documentation", href: "#", testId: "link-documentation" },
        { label: "Help Center", href: "#", testId: "link-help-center" },
        { label: "Contact Us", href: "#contact", testId: "link-contact", onClick: () => scrollToSection("contact") },
        { label: "Privacy Policy", href: "#", testId: "link-privacy-policy" },
      ]
    }
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "#", testId: "link-linkedin", label: "LinkedIn" },
    { icon: SiX, href: "#", testId: "link-twitter", label: "X (formerly Twitter)" },
    { icon: SiGithub, href: "#", testId: "link-github", label: "GitHub" },
    { icon: SiMedium, href: "#", testId: "link-medium", label: "Medium" },
  ];

  return (
    <footer className="bg-temporal-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Brain className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold" data-testid="brand-name">Temporal AI</span>
            </div>
            <p className="text-gray-300 mb-6" data-testid="text-company-description">
              Building the future of artificial intelligence through innovative platforms and human-centered design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  data-testid={social.testId}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold mb-6" data-testid={`heading-footer-${sectionIndex}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.onClick}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      data-testid={link.testId}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300" data-testid="text-copyright">
            © 2024 Temporal AI Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
