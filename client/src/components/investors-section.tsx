import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { TrendingUp, Handshake, Users } from "lucide-react";
import type { InsertPartnerInquiry } from "@shared/schema";

export default function InvestorsSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: ""
  });

  const partnerMutation = useMutation({
    mutationFn: async (data: InsertPartnerInquiry) => {
      const response = await apiRequest("POST", "/api/partners", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Partnership Inquiry Submitted",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        interest: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    partnerMutation.mutate(formData);
  };

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const partnerships = [
    {
      icon: TrendingUp,
      title: "Investment Opportunities",
      description: "Access detailed financial projections, market analysis, and growth strategies for our expanding AI portfolio.",
      bgColor: "bg-temporal-secondary"
    },
    {
      icon: Handshake,
      title: "Technology Partnerships",
      description: "Collaborate on cutting-edge research initiatives and integrate our AI solutions into your technology stack.",
      bgColor: "bg-temporal-accent"
    },
    {
      icon: Users,
      title: "Advisory Board",
      description: "Join our advisory network to guide strategic decisions and provide industry expertise as we scale globally.",
      bgColor: "bg-temporal-secondary"
    }
  ];

  return (
    <section id="investors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-temporal-primary mb-6" data-testid="heading-partnerships">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 mb-8" data-testid="text-partnerships-description">
              Join leading investors and technology partners in shaping the future of artificial intelligence. Explore investment opportunities and strategic collaboration possibilities.
            </p>
            
            <div className="space-y-6">
              {partnerships.map((partnership, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`partnership-item-${index}`}>
                  <div className={`w-8 h-8 ${partnership.bgColor} rounded-lg flex items-center justify-center mt-1`}>
                    <partnership.icon className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-temporal-primary mb-2" data-testid={`heading-partnership-${index}`}>
                      {partnership.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`text-partnership-description-${index}`}>
                      {partnership.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-temporal-background to-white rounded-3xl p-8 border border-temporal-border">
            <h3 className="text-2xl font-bold text-temporal-primary mb-6" data-testid="heading-partner-portal">
              Partner Portal Access
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-partner-inquiry">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-temporal-text mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="John"
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-temporal-text mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-temporal-text mb-2">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Your Company"
                  required
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-temporal-text mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="interest" className="block text-sm font-medium text-temporal-text mb-2">
                  Partnership Interest
                </Label>
                <Select value={formData.interest} onValueChange={(value) => updateFormData("interest", value)} required>
                  <SelectTrigger data-testid="select-interest">
                    <SelectValue placeholder="Select Partnership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investment">Investment Opportunity</SelectItem>
                    <SelectItem value="technology">Technology Partnership</SelectItem>
                    <SelectItem value="advisory">Advisory Board</SelectItem>
                    <SelectItem value="collaboration">Strategic Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-temporal-text mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={4}
                  placeholder="Tell us about your interest in partnering with Temporal AI..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={partnerMutation.isPending}
                className="w-full bg-temporal-secondary hover:bg-temporal-secondary/90 text-white py-4 h-auto font-medium"
                data-testid="button-submit-partner-inquiry"
              >
                {partnerMutation.isPending ? "Submitting..." : "Submit Partnership Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
