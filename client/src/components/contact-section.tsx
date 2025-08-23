import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Mail, Phone } from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Innovation Drive", "San Francisco, CA 94102", "United States"],
      bgColor: "bg-temporal-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@temporalai.com", "partnerships@temporalai.com"],
      bgColor: "bg-temporal-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Available 9AM-6PM PST"],
      bgColor: "bg-temporal-secondary"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-temporal-background to-background dark:from-temporal-background dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-temporal-primary dark:text-temporal-primary mb-6 animate-fade-in" data-testid="heading-contact">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" data-testid="text-contact-description">
            Ready to explore how Temporal AI can transform your business? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center`}>
                  <info.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-temporal-primary dark:text-temporal-primary mb-2" data-testid={`heading-contact-info-${index}`}>
                    {info.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} data-testid={`text-contact-detail-${index}-${detailIndex}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-background dark:bg-background rounded-3xl p-8 shadow-lg border border-temporal-border dark:border-temporal-border card-hover">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-temporal-text mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="focus-ring"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Your Name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-temporal-text mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-temporal-text mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    placeholder="Your Company"
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-temporal-text mb-2">
                    Subject
                  </Label>
                  <Select value={formData.subject} onValueChange={(value) => updateFormData("subject", value)} required>
                    <SelectTrigger data-testid="select-subject">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="demo">Product Demo</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-temporal-text mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-temporal-primary hover:bg-temporal-primary/90 text-white py-4 h-auto font-medium"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
